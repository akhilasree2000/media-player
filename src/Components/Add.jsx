import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../Services/AllAPI';



const Add = ({setVedioResp}) => {
    const [video, setVideo] = useState({
        caption: "",
        image: "",
        videoURL: ""
    })
    console.log(video);
    const seperateYoutubeURL = (value) => {
        if (value.includes('.be/')) {
            // console.log(value);
            const VideoId = value.split('.be/')[1]
            setVideo({ ...video, videoURL: VideoId })
            console.log(VideoId);
            setError(false)

        }
        else {
            setError(true)
            console.error("invalid Youtube link")

        }
    }
    const handleSave = async () => {
        if (video.caption && video.image && video.videoURL) {
            // console.log("success");
            try {
                let response = await uploadVideo(video)
                setVedioResp(response)
                console.log(response);
                if (response.status >= 200 && response.status <= 300) {
                    alert("successfully added your vedio")
                    setShow(false)
                    setVideo({
                        caption: "",
                        image: "",
                        videoURL: ""
                    });
                } else {
                    alert("error occur please contact admin")
                }
            } catch {
                alert("error occur")
            }



        } else {
            alert("please fill the form")
        }
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [error, setError] = useState(false)
    return (
        <>
            <div><h2>Upload New Video <button onClick={handleShow} className='rounded-circle border-0 bg-warning'><i className="fa-solid fa-plus "></i></button></h2></div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Upload Video Details</Modal.Title>
                </Modal.Header>
                <Modal.Body> <FloatingLabel
                    controlId="floatingInput"
                    label="Video Caption"
                    className="mb-3"
                >
                    <Form.Control onChange={(e) => { setVideo({ ...video, caption: e.target.value }) }}
                        type="Video Caption" placeholder="Video Caption" />
                </FloatingLabel>
                    <FloatingLabel className="mb-3" controlId="floatingPassword" label="Video Image URL">
                        <Form.Control onChange={(e) => { setVideo({ ...video, image: e.target.value }) }} type="link" placeholder="Video Image URL" />
                    </FloatingLabel>

                    <FloatingLabel className="mb-3" controlId="floatingPassword" label="Video Youtube  Link">
                        <Form.Control onChange={(e) => seperateYoutubeURL(e.target.value)} type="text" placeholder="Video Youtube  Link" />
                    </FloatingLabel>
                    {error ?
                        <div>
                            <p className='text-danger'>Invalid Youtube Link</p>
                        </div> : ""}

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Add