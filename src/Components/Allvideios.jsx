import React, { useEffect, useState } from 'react'
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { getAllVideo, addHistory, deleteVideo, uploadVideo, getSingleCategory, updateCategory } from '../Services/AllAPI';

const Allvideo = ({ videoResp, videoDeletedResponse, setcategoryvideoDeletedResponse}) => {
  
    const [selectedVideo, setselectedVideo] = useState(null)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async (video) => {

        const { caption, videoURL } = video
        let date = new Date()
        let formatedDate = date.toLocaleString('en-IN', { timeZoneName: 'short' });

        const payload = { caption, videoURL, formatedDate }
        try {
            await addHistory(payload)


        } catch (error) {
            console.log(error);
        }

        setselectedVideo(video);
        setShow(true);
    }
    const [data, setData] = useState([])


    const getVideos = async () => {
        try {
            let apiResponse = await getAllVideo();
            if (apiResponse.status >= 200 && apiResponse.status <= 300) {
                console.log(apiResponse);
                setData(apiResponse.data)
                console.log(data);

            }

        } catch {
            console.error("error occured")
        }


    }
    useEffect(() => {
        getVideos();
    }, [videoResp,videoDeletedResponse]);

    //   delete

    const onDeleteClick = async (id) => {
        try {
            await deleteVideo(id);
            getVideos()
        } catch (error) {
            alert(error);
        }

    };
    //  drag

    const onVideoDrag = (e, id) => {
        console.log(e, id);
        e.dataTransfer.setData("videoDetails", id)

    }

    const onDragOverDiv = (e)=>{
        e.preventDefault()
    }

    const onVideoDrop =async (e)=>{
      let {categoryId,VideoObj} = JSON.parse(e.dataTransfer.getData("fromCategoryVideo")) 
      console.log(categoryId,VideoObj);
    //   upload video to videos api
      await uploadVideo(VideoObj)
      getVideos()
        // get category details
      let apiResponse = await getSingleCategory (categoryId)
      console.log(apiResponse.data, "single category details");
      let currentAllVideos = apiResponse.data.allVideos
      let sortedVideos = currentAllVideos.filter((item)=>item.id!=VideoObj.id)
     
      const payload ={
        id : categoryId,
        categoryName : apiResponse.data.categoryName,
        allVideos : sortedVideos
      }
      let deleteResponse = await updateCategory(categoryId,payload)
      setcategoryvideoDeletedResponse(deleteResponse)
    
    }

    return (
        <>
        {" "}
            <div style={{minHeight:"500px"}} onDragOver={(e)=>onDragOverDiv(e)} onDrop={(e)=>onVideoDrop(e)}>
                <h3>All Videos</h3>
                <div className="d-flex flex-wrap justify-content-center  gap-2">
                    {
                        data.map((a, index) => (
                            <Card draggable={true} onDragStart={(e) => onVideoDrag(e, a.id)} key={index}
                                style={{ width: "15rem" }}>


                                <Card.Img variant="top"
                                    src={a.image}
                                    onClick={() => handleShow(a)}
                                />
                                <Card.Body>

                                    <div className="d-flex justify-content-between">
                                        <Card.Title onClick={() => handleShow(a)}>{a.caption}</Card.Title>

                                        <Button onClick={() => onDeleteClick(a.id)} variant="light" className="btn" style={{ backgroundColor: "transparent", border: "none", padding: "0" }}>
                                            <i className="fa-solid fa-trash text-danger" ></i>
                                        </Button>

                                    </div>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </div>

            </div>


            <div>
                {selectedVideo && (
                    <Modal show={show} onHide={handleClose}>
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
                )}


            </div>
        </>
    )
}

export default Allvideo