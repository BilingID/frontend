import { ReactComponent as ProfileIcon } from "assets/icon/svg/profile.svg";
import { ReactComponent as NoteIcon } from "assets/icon/svg/note.svg";
import { ReactComponent as CalendarIcon } from "assets/icon/svg/calendar.svg";
// import { ReactComponent as ClipboardIcon } from "assets/icon/svg/clipboard-tick.svg";
// import { ReactComponent as SettingIcon } from "assets/icon/svg/setting-2.svg";
import { ReactComponent as LogoutIcon } from "assets/icon/svg/logout.svg";

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
      <div className="d-flex flex-column gap-3 mb-5 text-break">
        <div className="fs-6">Hai,</div>
        <h4>{user?.fullname}</h4>
        <span>{user?.email}</span>
      </div>
      <div className="d-flex flex-column gap-3 fs-5">
        <Option icon={<ProfileIcon />} path="/users" name="Profil" />
        <Option icon={<NoteIcon />} path="/users/psikotes" name="Psikotes" />
        <Option icon={<CalendarIcon />} path="/users/jadwal" name="Jadwal" />
        {/* <Option icon={<ClipboardIcon />} path="/users/riwayat" name="Riwayat" />
        <Option icon={<SettingIcon />} path="/users/pengaturan" name="Pengaturan" /> */}
        <Option icon={<LogoutIcon />} path={LOGIN_PATH} name="Keluar" handleClick={clearSession} />
      </div>
    </div>
  );
};

export default SidebarLayout;
