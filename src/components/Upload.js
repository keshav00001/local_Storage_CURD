import React, { useState } from "react";

export default function Upload(props) {
  const [uploadCheck, setUploadCheck] = useState(false);
  const [password, setPassword] = useState("");
  const [selectDocument, setselectDocument] = useState("");
  const [uploadfile, setUploadfile] = useState("");

  const [formValues, setFormValues] = useState([
    { password: "", selectDocument: "", uploadfile: "" },
  ]);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

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

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  };

  return (
    <>
      <div>
        {formValues.map((element, index) => (
          <div className="upload-lists">
            <form onSubmit={handleSubmit}>
              <div className="row" key={index}>
                {formValues.length !== 1 ? (
                  <div style={{ textAlign: "end" }}>
                    <span
                      style={{ textAlign: "end", fontWeight: "700" }}
                      onClick={() => removeFormFields(index)}
                    >
                      X {index + 1}
                    </span>
                  </div>
                ) : (
                  ""
                )}
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
          Add More +++
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
