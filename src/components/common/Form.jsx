import { useRef, useState } from "react";

import EyeSlashIcon from "assets/icon/svg/eye-slash.svg";
import EyeIcon from "assets/icon/svg/eye.svg";
import { ReactComponent as DocumentIcon } from "assets/icon/svg/document.svg";

export const FormInput = ({ label, ...props }) => {
  return (
    <div className="d-flex flex-column gap-2 mb-4">
      <label className="form-label fw-bold">{label}</label>
      <input className="form-control" {...props} />
    </div>
  );
};

export const FormRadios = (props) => {
  return (
    <div className="d-flex flex-column gap-2 mb-4" onChange={props.onChange}>
      <label className="form-label fw-bold">{props.label}</label>
      {props.options.map((option) => {
        return (
          <div className="form-check" key={option}>
            <input
              className="form-check-input"
              type="radio"
              name={props.name}
              value={option}
              defaultChecked={props.checked === option}
            />
            <label className="form-check-label">{option}</label>
          </div>
        );
      })}
    </div>
  );
};

export const FormPassword = ({ label, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="d-flex flex-column gap-2 mb-4">
      <label className="form-label fw-bold">{label}</label>
      <div className="position-relative">
        <input className="form-control" type={showPassword ? "text" : "password"} {...props} />
        <img
          src={showPassword ? EyeIcon : EyeSlashIcon}
          className="position-absolute top-50 translate-middle"
          alt="show/hide password"
          style={{ right: "1rem", cursor: "pointer" }}
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        />
      </div>
    </div>
  );
};

export const FormUpload = ({ label, ...props }) => {
  const fileRef = useRef(null);

  const handleUpload = (event) => {
    fileRef.current.click();
  };

  return (
    <div className="input-group text-center mx-auto" style={{ width: "50%" }}>
      <button
        className="btn btn-outline-edit fs-6 align-items-center d-flex form-control"
        type="button"
        onClick={handleUpload}
      >
        <DocumentIcon width={24} height={24} className="me-3" />
        {fileRef.current?.files[0]?.name || "File belum dipilih"}
      </button>
      <input
        type="file"
        className="fw-bold form-control bg-white d-none"
        name={props.name}
        ref={fileRef}
      />
      <button className="btn btn-outline-edit text-primary" type="button" onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
};
