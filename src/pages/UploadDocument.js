import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Upload from "../components/Upload";
import { AppContext } from "../context/AppContext";
import Datalist from "../components/Datalist";
import DataView from "./DataView";


export default function UploadDocument(props) {
  const [uploadFiles, setUploadFiles] = useState([1]);
  const { paramsApp } = useContext(AppContext);

  const handleUploadMore = () => {
    setUploadFiles([...uploadFiles, +1]);
  };
  useEffect(() => {

  }, [])



  return (
    <>
      <Header />
      <div className="upload-document">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div>
                <Datalist />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
