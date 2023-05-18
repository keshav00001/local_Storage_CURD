import React, { useState } from "react";

export default function Upload(props) {
  const [uploadCheck, setUploadCheck] = useState(false);

  return (
    <div className="upload-lists">
      <div className="row">
        <div className="col-md-4">
          <div className="form-group">
            <label className="form-label">Select Document</label>
            <select className="form-select form-control">
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
            <input className="form-control" type="file" />
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
            />
          </div>
        </div>
      </div>
    </div>
  );
}
