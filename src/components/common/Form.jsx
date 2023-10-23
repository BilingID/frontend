import { useState } from "react";

import EyeSlashIcon from "assets/icon/svg/eye-slash.svg";
import EyeIcon from "assets/icon/svg/eye.svg";

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
              name="gender"
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
