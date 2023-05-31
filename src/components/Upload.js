import React, { useContext, useEffect, useState } from "react";
import DocSubmitModal from "./DocSubmitModal";
import DocPreviewModal from "./DocPreviewModal";
import { base_url, app_id, app_name } from "../services/api.config";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import Loading from "./Loader";
import Swal from "sweetalert2";

export default function Upload(props) {
  const [documentList, setdocumentList] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [docError, setDocError] = React.useState(false);
  const [loadingVisible, setLoadingVisible] = React.useState(false);
  const [previewShow, setPreviewShow] = React.useState(false);
  const [selectDocType, setselectDocType] = useState("");
  const [filesUpload, setfilesUpload] = useState();
  const { paramsApp } = useContext(AppContext);

  const [formValues, setFormValues] = useState([
    { selectDocument: "", uploadfile: "", password: "" },
  ]);

  useEffect(() => {
    documentData();
  }, []);

  const successAlert = () => {
    Swal.fire({
      title: 'congratulations!',
      text: 'You document uploaded successfully.',
      icon: 'success',
      allowOutsideClick: false,
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.value) {
        window.location.reload();
      } else {
      }
    });


  }


  const documentData = async () => {

    let config = {
      method: "get",
      url: base_url + "/v1/api/registration/dropdown",
      headers: {
        "Content-Type": "application/json",
        "x-application-id": app_id,
        "x-application-name": app_name,
      },
    };

    axios
      .request(config)
      .then((response) => {
        setdocumentList(response.data?.result?.doc_type);
        // console.log(JSON.stringify(response.data.result.doc_type));
      })
      .catch((error) => {
        console.log(error);
      });
  };



  let addFormFields = () => {
    setFormValues([
      ...formValues,
      { selectDocument: "", uploadfile: "", password: "" },
    ]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    if (e?.target?.files) {
      newFormValues[i][e.target.name] = e.target.value;
      newFormValues[i]["files"] = e.target.files;
      setFormValues(newFormValues);
      formValidation(formValues);
    } else {
      newFormValues[i][e.target.name] = e.target.value;
      setFormValues(newFormValues);
      formValidation(formValues);
    }
  };

  let docPreview = (e) => {
    if (e.uploadfile !== "") {
      if (e.files.length !== 0) {
        setselectDocType(e.files[0].type)
        setfilesUpload(URL.createObjectURL(e.files[0]));
      }
      // console.log(".......", filesUpload);
      const iframe = document.querySelector("iframe");
      if (iframe?.src) iframe.src = filesUpload;
      setPreviewShow(true);
    } else {
      setPreviewShow(true);
    }
  };
  const formValidation = (formValues) => {
    const data = [...formValues];
    let valid = true;
    for (let index = 0; index < data.length; index++) {
      // const element = data[index];
      if (data[index].selectDocument === "") {
        data[index].selectDocumentCheck = "Please select your document";
        valid = false;
      } else {
        data[index].selectDocumentCheck = "";
        valid = true;
      }

      if (data[index].uploadfile === "") {
        data[index].uploadfileCheck = "Please upload file required";
        valid = false;
      } else {
        data[index].uploadfileCheck = "";
        valid = true;
      }

    }
    setFormValues(data);
    return valid;
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    const errorRes = formValidation(formValues);
    if (errorRes) {
      setLoadingVisible(true);
      let formOfData = formValues;
      for (let i = 0; i <= formOfData.length - 1; i++) {
        formUploadData(formOfData[i], i, formOfData.length - 1);
      }

    }
  };

  const formUploadData = (value, index, length) => {
    let ddd = value;

    // console.log("..dsds. value.", ddd);

    var formdata = new FormData();

    formdata.append("loan_id", paramsApp.loan_id);
    formdata.append("uid", paramsApp.uid);
    formdata.append("type", ddd.selectDocument);
    formdata.append("group", "");
    formdata.append("password", "");
    formdata.append("fileKey", ddd.files[0]);

    var requestOptions = {
      method: "POST",
      headers: {
        "x-access-token": paramsApp?.token,
        "x-application-id": app_id,
        "x-application-name": app_name,
      },
      body: formdata,
      dataType: "jsonp",
    };
    fetch(base_url + "/v1/api/upload_multidoc", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log("resul----------------------------", result);
        if (result.success === true) {
          if (index === length) {
            setLoadingVisible(false);
            if (loadingVisible === false) {
              successAlert();
            }
          }
        } else {
          setLoadingVisible(false);
          setModalShow(true)
          setDocError(result?.result + " " + ddd.selectDocument)

        }
      })
      .catch((error) => console.log("error", error));
  };


  return (
    <>
      <div>
        {formValues.map((element, index) => (
          <div className="upload-lists" key={index}>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label className="form-label">Select Document</label>
                    <select
                      className="form-select form-control"
                      name="selectDocument"
                      value={element.selectDocument || ""}
                      onChange={(e) => handleChange(index, e)}
                    >
                      <option>Select Document</option>
                      {documentList.map((data) => (
                        <option key={data}>{data}</option>
                      ))}

                    </select>
                    <div className="errorForm">
                      {element.selectDocumentCheck}
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label className="form-label">Upload File</label>
                    <input
                      className="form-control"
                      id="imgs"
                      type="file"
                      accept="image/png, image/jpeg,.txt,.doc,.pdf"
                      name="uploadfile"
                      // value={element?.uploadfile}
                      onChange={(e) => handleChange(index, e)}
                    />
                    <div className="errorForm">{element.uploadfileCheck}</div>

                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label className="form-label">Password</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      value={element.password || ""}
                      onChange={(e) => handleChange(index, e)}
                    />
                  </div>

                </div>
                <div className="col-md-1">
                  <div className="removeCol">
                    <span
                      className="spanIconEye"
                      onClick={() => docPreview(element)}
                    >
                      <i className="bi bi-eye-fill"></i>
                    </span>
                    {formValues.length !== 1 ? (
                      <span
                        className="spanIconDel"
                        onClick={() => removeFormFields(index)}
                      >
                        <i className="bi bi-trash3-fill"></i>
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
        ))}
      </div>

      <div className="add-more-block">
        <button
          className="btn btn-primary btn-sm"
          type="button"
          onClick={() => addFormFields()}
        >
          Add More +
        </button>
      </div>

      <div className="submit-button">
        <button
          className="btn btn-primary btn-lg"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      {modalShow && (
        <DocSubmitModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          msg={docError}
        />
      )}
      {previewShow && (
        <DocPreviewModal
          show={previewShow}
          onHide={() => setPreviewShow(false)}
          imgshow={filesUpload}
          filepreviewtype={selectDocType}
        />
      )}

      {loadingVisible && <Loading />}
    </>
  );
}
