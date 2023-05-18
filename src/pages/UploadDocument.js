import React, { useState } from "react";
import Header from "../components/Header";
import Upload from "../components/Upload";
import { Link } from "react-router-dom";

export default function UploadDocument(props) {
  const [uploadFiles, setUploadFiles] = useState([1]);

  const handleUploadMore = () => {
    setUploadFiles([...uploadFiles, 1]);
  };

  return (
    <>
      <Header />
      <div className="upload-document">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="upload-heading">
                <h2>Upload All Documents</h2>
                <Link to="/upload-all-document" className="btn btn-secondary">
                  <i className="bi bi-cloud-arrow-up"></i> Upload All Document
                </Link>
              </div>
              <div>
                {uploadFiles.map((item, index) => (
                  <Upload />
                ))}
              </div>
              <div className="add-more-block">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleUploadMore()}
                >
                  Add More +
                </button>
              </div>
              <div className="submit-button">
                <button className="btn btn-primary btn-lg">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
