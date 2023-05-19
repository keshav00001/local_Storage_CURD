import React, { useState } from "react";
import Header from "../components/Header";
import Upload from "../components/Upload";
import { Link } from "react-router-dom";

export default function UploadDocument(props) {
  const [uploadFiles, setUploadFiles] = useState([1]);

  const handleUploadMore = () => {
    setUploadFiles([...uploadFiles, +1]);
    console.log("...uploadFiles...", uploadFiles);
  };

  const removeInputFields = (i) => {
    // console.log("..removeInputFields...", e)
    // var array = [...uploadFiles];
    // var index = array.indexOf(e)
    // if (index !== -1) {
    //   array.splice(index, 1);
    //   setUploadFiles({ array });
    // }
    let rows = [...uploadFiles];
    rows.splice(i, 1);
    setUploadFiles(rows);

  }

  return (
    <>
      <Header />
      <div className="upload-document">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div>
                {uploadFiles.map((item, index) => {
                  return (
                    <>
                      <div key={index}>
                        {(uploadFiles.length !== 1) ? <button className="btn btn-outline-danger" onClick={() => removeInputFields(index)}>x {index}</button> : ''}
                        <Upload
                          key={index}
                        // uploadFiles={uploadFiles}
                        // indexNos={index}
                        />
                      </div>
                    </>
                  )
                })}
              </div>
              {/* <div className="add-more-block">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleUploadMore()}
                >
                  Add More +
                </button>
              </div>
              <div className="submit-button">
                <button className="btn btn-primary btn-lg">Submit</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
