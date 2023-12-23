import { ReactComponent as ReceiptIcon } from "assets/icon/svg/receipt-text.svg";
import { ReactComponent as Element4Icon } from "assets/icon/svg/element-4.svg";
import { ReactComponent as ProfileIcon } from "assets/icon/svg/profile-tick.svg";
import { ReactComponent as PeopleIcon } from "assets/icon/svg/people.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserContext } from "context/UserContext";
import Auth from "services/api/auth";
import { toast } from "react-toastify";

const LOGIN_PATH = "/login";

const Option = ({ icon, name, path, handleClick, active }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickDefault = () => {
    navigate(path);
  };

  return (
    <div
      className={`d-flex align-items-center btn rounded-corner pe-auto text-secondary py-3 ${
        active ? "bg-primary text-white fw-bold" : "fw-normal bg-light"
      }`}
      onClick={handleClick || handleClickDefault}
    >
      <div className="d-flex align-items-center gap-2 mx-3">
        {icon} {name}
      </div>
    </div>
  );
};

const SidebarLayout = () => {
  const { setUser, token, setToken } = useUserContext();
  const navigate = useNavigate();

  const clearSession = async () => {
    const { data, status, message } = await Auth.logout(token);

    if (status !== "success") {
      toast.warn(message);
      return;
    }

    toast.success(message);

    setUser(null);
    setToken(null);

    navigate(LOGIN_PATH);
  };

  return (
    <div
      className="shadow-sm me-5"
      style={{
        width: "320px",
      }}
    >
      <div
        className="container"
        style={{
          width: "280px",
        }}
      >
        <div className="d-flex flex-column gap-3">
          <div className="fs-3 text-primary text-center my-5">BiLing ID</div>
        </div>
        <div className="d-flex flex-column gap-3 fs-5">
          <Option icon={<Element4Icon />} path="/admin" name="Dashboard" active />
          <Option icon={<ReceiptIcon />} path="/admin" name="Pembayaran" />
          <Option icon={<ProfileIcon />} path="/admin" name="Psikolog" />
          <Option icon={<PeopleIcon />} path="/admin" name="Customer" />
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
