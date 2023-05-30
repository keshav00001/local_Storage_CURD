import React, { useContext, useState } from "react";
import Header from "../components/Header";
import Upload from "../components/Upload";
import { AppContext } from "../context/AppContext";


export default function UploadDocument(props) {
  const [uploadFiles, setUploadFiles] = useState([1]);
  const { paramsApp } = useContext(AppContext);

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
              <div className="upload-heading">
                <h4>{paramsApp?.username} - {paramsApp?.loan_id} </h4>
              </div>
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
