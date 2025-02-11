import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


const Add = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                    <Form.Control type="Video Caption" placeholder="Video Caption" />
                </FloatingLabel>
                    <FloatingLabel className="mb-3" controlId="floatingPassword" label="Video Image URL">
                        <Form.Control type="password" placeholder="Video Image URL" />
                    </FloatingLabel>

                    <FloatingLabel className="mb-3" controlId="floatingPassword" label="Video Youtube  Link">
                        <Form.Control type="password" placeholder="Video Youtube  Link" />
                    </FloatingLabel>
        </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Add