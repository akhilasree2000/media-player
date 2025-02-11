import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';


const Allvideios = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div>
                <h3>All Vedios</h3>
                <Card onClick={handleShow} style={{ width: '18rem' }}>
                    <Card.Img variant="top" height={"200px"} src="https://i.pinimg.com/474x/0f/0d/ff/0f0dffa3fdfef353cab1266ad7c78d88.jpg" />
                    <Card.Body>
                        <div className='d-flex justify-content-between '>
                            <Card.Title>Card Title</Card.Title>

                           <button className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
                        </div>

                    </Card.Body>
                </Card>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Upload Video Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>

                        <iframe  width="460" height="315" src="https://www.youtube.com/embed/-DOvxEQlKXI?si=TT_ggMXIXRIEJUrm-&autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    </div>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default Allvideios