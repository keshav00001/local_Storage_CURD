import React, { useContext, useEffect, useState } from "react";
import Viewlist from "./Viewlist";
import { AppContext } from "../context/AppContext";

// getting the values of local storage
const getDatafromLS = () => {
    const data = localStorage.getItem("books");
    if (data) {
        return JSON.parse(data);
    } else {
        return [];
    }
};

const Datalist = () => {
    const { formShow, setFormShow } = useContext(AppContext);

    const [books, setbooks] = useState(getDatafromLS());

    const [application_id, setApplication_id] = useState("");
    const [application_name, setApplication_name] = useState("");
    const [authentication_id, setAuthentication_id] = useState("");
    const [investment_id, setInvestment_id] = useState("");
    const [editShow, setEditShow] = useState(false);

    // form submit event
    const handleAddBookSubmit = (e) => {
        e.preventDefault();
        // creating an object
        let book = {
            application_id,
            application_name,
            authentication_id,
            investment_id,
        };
        setbooks([...books, book]);
        setApplication_id("");
        setApplication_name("");
        setAuthentication_id("");
        setInvestment_id("");
        console.log("...line.43.");
    };

    // delete book from LS
    const deleteBook = (application_id) => {
        const filteredBooks = books.filter((element, index) => {
            return element.application_id !== application_id;
        });
        setbooks(filteredBooks);
    };
    const editBook = (application_id) => {
        setEditShow(true);
        setFormShow(true);

        const filteredBooks = books.filter((element, index) => {
            return element.application_id == application_id;
        });
        setApplication_id(filteredBooks[0].application_id);
        setApplication_name(filteredBooks[0].application_name);
        setAuthentication_id(filteredBooks[0].authentication_id);
        setInvestment_id(filteredBooks[0].investment_id);
    };
    const edit_data = () => {
        let booksDup = books;

        let updatedList = booksDup.map((item) => {
            if (item.application_id == application_id) {
                return {
                    ...item,
                    ...{
                        application_id,
                        application_name,
                        authentication_id,
                        investment_id,
                    },
                };
            }
            return item;
        });

        setbooks(updatedList);

        setApplication_id("");
        setApplication_name("");
        setAuthentication_id("");
        setInvestment_id("");
        setEditShow(false);
    };

    //////////////////////////////

    // saving data to local storage
    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(books));
    }, [books]);

    return (
        <div>
            <div className="wrapper">
                <h1>Add Partner</h1>
                <div className="main">
                    {formShow && (
                        <div className="form-container">
                            <form
                                autoComplete="off"
                                className="form-group"
                                onSubmit={handleAddBookSubmit}
                            >
                                <label>Application Id</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    required
                                    onChange={(e) => setApplication_id(e.target.value)}
                                    value={application_id}
                                ></input>
                                <br></br>
                                <label>Application name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    required
                                    onChange={(e) => setApplication_name(e.target.value)}
                                    value={application_name}
                                ></input>
                                <br></br>
                                <label>Authentication Id#</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    required
                                    onChange={(e) => setAuthentication_id(e.target.value)}
                                    value={authentication_id}
                                ></input>
                                <br></br>
                                <label>Investment Id#</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    required
                                    onChange={(e) => setInvestment_id(e.target.value)}
                                    value={investment_id}
                                ></input>
                                <br></br>
                                {!editShow ? (
                                    <button type="submit" className="btn btn-success btn-md">
                                        ADD
                                    </button>
                                ) : (
                                    ""
                                )}

                            </form>
                            {editShow ? (
                                <button
                                    type="submit"
                                    className="btn btn-success btn-md"
                                    onClick={() => edit_data()}
                                >
                                    Edit
                                </button>
                            ) : (
                                ""
                            )}
                        </div>
                    )}
                    <div className="view-container">
                        {books.length > 0 && (
                            <>
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Application Id#</th>
                                                <th>Application name</th>
                                                <th>Authentication Id</th>
                                                <th>Investment Id</th>
                                                <th>Visit site</th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <Viewlist
                                                books={books}
                                                editBook={editBook}
                                                deleteBook={deleteBook}
                                            />
                                        </tbody>
                                    </table>
                                </div>
                                <button
                                    className="btn btn-danger btn-md"
                                    onClick={() => setbooks([])}
                                >
                                    Remove All
                                </button>
                            </>
                        )}
                        {books.length < 1 && <div>No Data are added yet</div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Datalist;
