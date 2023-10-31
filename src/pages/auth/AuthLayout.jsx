import RegisterImg from "assets/img/register-image.png";

const FrameWrapper = ({ children, className }) => {
  return (
    <div className={`col ${className}`}>
      <div className="container" style={{ paddingTop: "70px", maxWidth: "600px" }}>
        {children}
      </div>
    </div>
  );
};

const AuthLayout = ({ children }) => {
  return (
    <div className="row m-0 vh-100">
      <FrameWrapper className="bg-primary text-white">
        <div className="fs-2">BiLing.ID</div>
        <img src={RegisterImg} style={{ marginTop: "120px" }} />
      </FrameWrapper>
      <FrameWrapper className="bg-white pb-5">{children}</FrameWrapper>
    </div>
  );
};

export default AuthLayout;
