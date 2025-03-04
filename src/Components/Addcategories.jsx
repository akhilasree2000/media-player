import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Allvideo from './Allvideios';
import { createCatogory, deleteCatogory, getCategoryAPI, getSingleVideo, updateCategory, deleteVideo, } from '../Services/AllAPI';
import { Card } from 'react-bootstrap';




const Addcategories = ({ setvideoDeletedResponse, categoryvideoDeletedResponse }) => {
    const [show, setShow] = useState(false);
    const [showVideo, setshowVideo] = useState(false);
    const [categoryName, setCategory] = useState("")
    const [data, setData] = useState([])
    const [Vdata, setvData] = useState([])
    const [selectedVideo, setselectedVideo] = useState(null)


    const handleClose = () => setShow(false);
    const handleCloseVideo = () => setshowVideo(false);
    const handleShow = () => setShow(true);

    //    add button

    const createNewCategory = async () => {
        if (categoryName) {
            try {
                const category = { categoryName, allvideos: [] }
                await createCatogory(category)
                setShow(false)
                setCategory("")
                getCategory()
            } catch (error) {
                console.error(error)
            }
        } else {
            alert("Please Fill the Form")
        }
    }
    useEffect(() => {
        getCategory()
    }, [categoryvideoDeletedResponse])

    const getCategory = async () => {
        try {
            let apiResponse = await getCategoryAPI();
            setData(apiResponse.data)
            console.log(apiResponse.data);

        } catch (error) {
            console.log(error);

        }
    }

    // 

    const onDeleteClick = async (id) => {
        try {
            await deleteCatogory(id)
            getCategory()
        } catch (error) {
            console.error(error);

        }
    }

    // dragOverContent for drag img ne dropped akkn...dom refresh akunnond

    const dragOverContent = (e) => {
        e.preventDefault()
    }

    // dropped

    const dropped = async (e, catData) => {
        let vId = (e.dataTransfer.getData("videoDetails"));
        try {
            let response = await getSingleVideo(vId);
            setvData(response.data)
            // console.log(response);

            if (response.status >= 200 && response.status <= 300) {
                catData.allvideos.push(response.data)
                await updateCategory(catData.id, catData)
                getCategory()
                let response = await deleteVideo(vId)
                setvideoDeletedResponse(response)
                // console.log(catData);

            }

            // console.log(catData);

            // let selectedCategory =data.find((a)=>a.id==catData.id)
            // console.log(selectedCategory,"qwerty");

        } catch (error) {
            console.error(error);

        }



    }
    const handleShowVideo = (video) => {
        setselectedVideo(video);
        setshowVideo(true);
    }

    const handleCategoryDrag=(e,categoryId,videoObj)=>{
    console.log(`started dragging ${videoObj} in ${categoryId}`);
   let  dataToTransfer ={
        videoObj,categoryId
    }
    e.dataToTransfer.setData("fromCategoryVideo",JSON.stringify((dataToTransfer)))

    }

    return (
        <>
            <div className='d-flex align-items-center gap-5'>
                <h2>All Categories</h2>
                <button onClick={handleShow} className='btn btn-warning rounded-circle fw-bolder fs-5'>
                    +

                </button>
            </div>
            {data.length > 0 ? data.map((val, index) => (
                <div
                    onDragOver={e => dragOverContent(e)}
                    onDrop={e => dropped(e, val)}
                    key={index} style={{ minHeight: "200px" }} className="container-fluid border border-2 rounder mt-3">
                    <div className="d-flex justify-content-between ">
                        <h4>{val.categoryName}</h4>
                        <button onClick={() => onDeleteClick(val.id)} className='btn'>
                            {""}
                            <i className='fa-solid fa-trash text-danger bg-dark'></i> </button>
                    </div>
                    <div className="row">
                        {
                            val.allvideos.map((a, index) => (
                                <div draggable={true} onDragStart={(e)=>handleCategoryDrag(e,val.id,a)} key={index} className="col-6">
                                    <Card
                                        // draggable={true} 
                                        // onDragStart={(e) => onVideoDrag(e, a.id)}
                                        key={index}
                                        style={{ width: "15rem" }}>


                                        <Card.Img variant="top"
                                            src={a.image}
                                            style={{ height: "200px", width: "100%" }}
                                            onClick={() => handleShowVideo(a)}
                                        />
                                        <Card.Body>

                                            <div className="d-flex justify-content-between">
                                                <Card.Title
                                                    onClick={() => handleShowVideo(a)}
                                                >
                                                    {a.caption}
                                                </Card.Title>




                                            </div>
                                        </Card.Body>
                                    </Card>

                                </div>
                            )
                            )
                        }

                    </div>


                </div>
            ))
                : <h1 className='text-danger fs-4'>No Category Found</h1>}


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add catogories details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                 <FloatingLabel
                    controlId="floatingInput"
                    label="catogory name"
                    className="mb-3"
                >
                    <Form.Control onChange={(e) => setCategory(e.target.value)} type="Video Caption" placeholder=" catogory name" />
                </FloatingLabel>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={createNewCategory}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>

            {
                selectedVideo && <Modal show={showVideo} onHide={handleCloseVideo}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedVideo.caption}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>

                            <iframe width="460" height="315" src={`https://www.youtube.com/embed/${selectedVideo.videoURL}-&autoplay=1`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowfullscreen></iframe>

                        </div>
                    </Modal.Body>

                </Modal>
            }



        </>
    )
}

export default Addcategories