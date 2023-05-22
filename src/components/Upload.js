import React, { useState } from "react";
import { Formik, Form, useField, useFormikContext } from "formik";
import * as Yup from "yup";
// import styled from "@emotion/styled";
// import "./styles.css";
// import "./formValidationFormik.css";
// import "../styles/formValidationFormik.css";
export default function Upload(props) {
  const [uploadCheck, setUploadCheck] = useState(false);
  const [password, setPassword] = useState("");
  const [selectDocument, setselectDocument] = useState("");
  const [uploadfile, setUploadfile] = useState("");

  const [formValues, setFormValues] = useState([
    { selectDocument: "", uploadfile: "", password: "" },
  ]);



  let addFormFields = () => {
    setFormValues([
      ...formValues,
      { password: "", selectDocument: "", uploadfile: "" },
    ]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
    console.log("...removeFormFields....", formValues);
  };

  let handleChange = (i, e) => {
    console.log("...handleChange...", e)
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
    formValidation(formValues);
  };


  const formValidation = (formValues) => {
    const data = [...formValues]
    let valid = true
    for (let index = 0; index < data.length; index++) {
      // const element = data[index];
      if (data[index].selectDocument == "") {
        data[index].selectDocumentCheck = "Please select your document"
        valid = false
      }
      else {
        data[index].selectDocumentCheck = ""
        valid = true
      }

      if (data[index].uploadfile == "") {
        data[index].uploadfileCheck = "Please upload file required"
        valid = false
      }
      else {
        data[index].uploadfileCheck = ""
        valid = true
      }

      // if (data[index].password == "") {
      //   data[index].passwordCheck = "password required"
      //   data[index].paswordLengthCheck = ""
      //   valid = false
      // } else if (data[index].password.length < 6) {
      //   data[index].passwordLengthCheck = "password should be greater than 6"
      //   data[index].passwordCheck = ""
      //   valid = false
      // }
      // else {
      //   data[index].passwordCheck = ""
      //   data[index].passwordLengthCheck = ""
      //   valid = true
      // }



    }
    setFormValues(data)
    return valid

  }



  let handleSubmit = (event) => {
    event.preventDefault();
    console.log("....form values...", formValues);
    // alert(JSON.stringify(formValues));
    const errorRes = formValidation(formValues)
    console.log("errorRes", errorRes)
    if (errorRes) {
      // api call
      alert("You are ready for submit")
    }
    else {
      // error msg
    }
  };




  return (
    <>

      <div>
        {formValues.map((element, index) => (
          <div className="upload-lists" key={index}>
            <div className="closeDiv">
              {formValues.length !== 1 ? (
                <span
                  className="close-icon"
                  onClick={() => removeFormFields(index)}
                >
                  <i className="bi bi-x"></i>
                </span>
              ) : (
                ""
              )}
            </div>
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
                      <option>EMI Report</option>
                      <option>OCR Aadhaar</option>
                      <option>OCR PAN Card</option>
                      <option>Underwriting Detail</option>
                      <option>Physical Verification Details</option>
                      <option>Back Aadhaar</option>
                      <option>DL</option>
                      <option>Voter ID</option>
                    </select>
                    <div className="errorForm">{element.selectDocumentCheck}</div>

                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label className="form-label">Upload File</label>
                    <input
                      className="form-control"
                      type="file"
                      name="uploadfile"
                      value={element.uploadfile || ""}
                      onChange={(e) => handleChange(index, e)}
                    />
                    <div className="errorForm">{element.uploadfileCheck}</div>
                    {uploadCheck && (
                      <span className="check-icon">
                        <i className="bi bi-check-lg"></i>
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-4">
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

    </>
  );
}
