import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import React from "react";

function DocSubmitModal(props) {
    const { onHide, msg } = props;
    return (
        <Row style={{ position: 'relative', top: -301, left: 792, }}>
            <Col md={6} className="mb-2">
                <Toast onClose={onHide || true} animation={false} >
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">{"Ooops !"}</strong>
                    </Toast.Header>
                    <Toast.Body > {msg}</Toast.Body>
                </Toast>
            </Col>

        </Row>

    );
}

export default DocSubmitModal;
