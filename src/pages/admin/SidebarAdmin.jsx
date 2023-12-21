import { ReactComponent as ProfileIcon } from "assets/icon/svg/profile.svg";
import { ReactComponent as ReceIcon } from "assets/icon/svg/receipt-text.svg";
import { ReactComponent as ProfetickIcon } from "assets/icon/svg/profile-tick.svg";
import { ReactComponent as LogoutIcon } from "assets/icon/svg/logout.svg";
import { ReactComponent as CustomerIcon} from "assets/icon/svg/people.svg";
import { ReactComponent as ArrowRightIcon } from "assets/icon/svg/arrow-right.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserContext } from "context/UserContext";
import Auth from "services/api/auth";
import { toast } from "react-toastify";

const LOGIN_PATH = "/login";

const Option = ({ icon, name, path, handleClick }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickDefault = () => {
    navigate(path);
  };

  return (
    <div
      className={`d-flex justify-content-between btn px-0 fw-bold ${
        location.pathname === path
          ? "text-primary"
          : path === LOGIN_PATH
          ? "text-danger"
          : "text-secondary"
      } `}
      onClick={handleClick || handleClickDefault}
    >
      <div className="d-flex flex-grow-1 gap-2">
        {icon} {name}
      </div>

      <ArrowRightIcon />
    </div>
  );
};

const SidebarLayout = () => {
  const { user, setUser, token, setToken } = useUserContext();
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
      className="box"
      style={{
        padding: "50px 30px",
      }}
    >
      <div className="d-flex flex-column gap-3 text-break">
        <div className="fs-3 text-primary">Billing ID</div>
        <h4>{user?.fullname}</h4>
        <span>{user?.email}</span>
      </div>
      <div className="d-flex flex-column gap-3 fs-5">
        <Option icon={<ProfileIcon />} path="/admin/Dashboard" name="Dashboard" />
        <Option icon={<ReceIcon />} path="/admin/Pembayaran" name="Pembayaran" />
        <Option icon={<ProfetickIcon />} path="/admin/Psikolog" name="Psikolog" />
        <Option icon={<CustomerIcon />} path="/admin/Customer" name="Customer" />
        <Option icon={<LogoutIcon />} path={LOGIN_PATH} name="Keluar" handleClick={clearSession} />
      </div>
    </div>
  );
};

export default SidebarLayout;
