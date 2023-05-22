import React from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const DocPreviewModal = (props) => {

    const { onHide, imgshow } = props;
    return (
        <Modal
            {...props}
            // size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Your document Preview
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* <p>{msg}</p> */}
                <Image src={imgshow} className="img-fluid" />

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Ok</Button>
                {/* <Button onClick={props.onHide}>Ok</Button> */}
            </Modal.Footer>
        </Modal>

    );
};

export default DocPreviewModal;