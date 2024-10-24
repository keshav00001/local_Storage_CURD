import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Datalist from "./Datalist";
const AddNewDataModal = (props) => {
    const [show, setShow] = useState(false);
    const [lists, setLists] = React.useState([]);

    const [formValues, setFormValues] = useState(
        { app_Id: "", app_name: "", auth_id: "", investment_Id: "" },
    );

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let handleSubmit = async (event) => {
        event.preventDefault();
        console.log("...ur data", formValues);
        setLists([...lists, formValues]);

        localStorage.setItem("added_list", JSON.stringify([...lists, formValues]));
        // Datalist();

        handleClose();
        // console.log("new form values local.....", storedNames)
        setFormValues({ app_Id: "", app_name: "", auth_id: "", investment_Id: "" });

        console.log("...ur data   arrr1", lists);

    }

    let handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
        // let newFormValues = [...formValues];

        // newFormValues[e.target.name] = e.target.value;
        // setFormValues(newFormValues);
        // console.log("new form values.....", formValues)
        //...



    };
    return (
        <>
            <Button onClick={handleShow}>
                <i className="bi bi-plus-circle"></i> Add
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Data</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal_body_form">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Application Id</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Application Id"
                                name="app_Id"
                                value={formValues.app_Id || ""}
                                onChange={(e) => handleChange(e)}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Application name</Form.Label>
                            <Form.Control
                                type="text"
                                className="form-control"
                                placeholder="Application name"
                                name="app_name"
                                value={formValues.app_name || ""}
                                onChange={(e) => handleChange(e)}
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.Label>Authentication Id</Form.Label>
                            <Form.Control
                                type="text"
                                className="form-control"
                                placeholder="Authentication Id"
                                name="auth_id"
                                value={formValues.auth_id || ""}
                                onChange={(e) => handleChange(e)}
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                            <Form.Label>Investment Id</Form.Label>
                            <Form.Control
                                type="text"
                                className="form-control"
                                placeholder="Investment Id"
                                name="investment_Id"
                                value={formValues.investment_Id || ""}
                                onChange={(e) => handleChange(e)}
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSubmit}>
                        GO
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AddNewDataModal;
