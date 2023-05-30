import React, { useState } from "react";
import Header from "../components/Header";
import Upload from "../components/Upload";

export default function UploadAllDocument(props) {
  return (
    <>
      <Header />
      <div className="upload-document">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="upload-heading">
                <h2>Upload All Documents</h2>
              </div>
              <div>
                <Upload />
              </div>
              <br />
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
