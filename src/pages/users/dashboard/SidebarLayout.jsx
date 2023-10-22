import { ReactComponent as ProfileIcon } from "assets/icon/svg/profile.svg";
import { ReactComponent as NoteIcon } from "assets/icon/svg/note.svg";
import { ReactComponent as CalendarIcon } from "assets/icon/svg/calendar.svg";
import { ReactComponent as ClipboardIcon } from "assets/icon/svg/clipboard-tick.svg";
import { ReactComponent as SettingIcon } from "assets/icon/svg/setting-2.svg";
import { ReactComponent as LogoutIcon } from "assets/icon/svg/logout.svg";

import { ReactComponent as ArrowRightIcon } from "assets/icon/svg/arrow-right.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserContext } from "context/UserContext";

const Option = ({ icon, name, path }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div
      className={`d-flex justify-content-between btn px-0 fw-bold ${
        location.pathname === path
          ? "text-primary"
          : path === "/users/keluar"
          ? "text-danger"
          : "text-secondary"
      } `}
      onClick={handleClick}
    >
      <div className="d-flex flex-grow-1 gap-2">
        {icon} {name}
      </div>

      <ArrowRightIcon />
    </div>
  );
};

const SidebarLayout = () => {
  const { user } = useUserContext();

  return (
    <div
      className="box"
      style={{
        padding: "50px 30px",
      }}
    >
      <div className="d-flex flex-column gap-3 mb-5">
        <div className="fs-6">Hai,</div>
        <div className="fs-4">{user?.fullName}</div>
        <div className="fs-7">{user?.email}</div>
      </div>
      <div className="d-flex flex-column gap-3 fs-5">
        <Option icon={<ProfileIcon />} path="/users" name="Profil" />
        <Option icon={<NoteIcon />} path="/users/psikotes" name="Psikotes" />
        <Option icon={<CalendarIcon />} path="/users/jadwal" name="Jadwal" />
        <Option icon={<ClipboardIcon />} path="/users/riwayat" name="Riwayat" />
        <Option icon={<SettingIcon />} path="/users/pengaturan" name="Pengaturan" />
        <Option icon={<LogoutIcon />} path="/users/keluar" name="Keluar" />
      </div>
    </div>
  );
};

export default SidebarLayout;
