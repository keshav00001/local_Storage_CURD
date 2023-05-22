import React, { useState } from "react";
import Header from "../components/Header";
import Upload from "../components/Upload";
import { Link } from "react-router-dom";

export default function UploadDocument(props) {
  const [uploadFiles, setUploadFiles] = useState([1]);

  const handleUploadMore = () => {
    setUploadFiles([...uploadFiles, +1]);
  };



  return (
    <>
      <Header />
      <div className="upload-document">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div>
                <Upload
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
