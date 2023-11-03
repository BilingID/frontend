import RegisterImg from "assets/img/register-image.png";
import { useNavigate } from "react-router-dom";

const FrameWrapper = ({ children, className, left }) => {
  return (
    <div className={`col ${className}  `}>
      {/* <div
        className={`container bg-danger ${left ? "d-flex justify-content-end" : ""} `}
        style={{ paddingTop: "70px", maxWidth: "656px" }}
      > */}
      <div className={`container   `} style={{ paddingTop: "70px", maxWidth: "556px" }}>
        <div>{children}</div>
      </div>
    </div>
  );
};

const AuthLayout = ({ children }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="row m-0 vh-100">
      <FrameWrapper className="bg-primary text-white" left>
        <div className="fs-2" onClick={handleClick}>
          BiLing.ID
        </div>
        <img src={RegisterImg} style={{ marginTop: "120px" }} />
      </FrameWrapper>
      <FrameWrapper className="bg-white pb-5">{children}</FrameWrapper>
    </div>
  );
};

export default AuthLayout;
