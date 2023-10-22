import ProfileIcon from "assets/icon/svg/profile.svg";
import NoteIcon from "assets/icon/svg/note.svg";
import CalendarIcon from "assets/icon/svg/calendar.svg";
import ClipboardIcon from "assets/icon/svg/clipboard-tick.svg";
import SettingIcon from "assets/icon/svg/setting-2.svg";
import LogoutIcon from "assets/icon/svg/logout.svg";

import ArrowRightIcon from "assets/icon/svg/arrow-right.svg";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "context/UserContext";

const Option = ({ icon, name, path, status }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };

  return (
    <div
      className="d-flex justify-content-between btn px-0 fw-bold text-secondary"
      onClick={handleClick}
    >
      <div className="d-flex gap-2">
        <img src={icon} alt="option icon" /> {name}
      </div>
      <div className="">
        <img src={ArrowRightIcon} alt="arrow option icon" />
      </div>
    </div>
  );
};

const SidebarLayout = ({ children }) => {
  const { user, setUser } = useUserContext();

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
        <Option icon={ProfileIcon} path="/users" name="Profil" />
        <Option icon={NoteIcon} path="/users/psikotes" name="Psikotes" />
        <Option icon={CalendarIcon} path="/users/jadwal" name="Jadwal" />
        <Option icon={ClipboardIcon} path="/users/riwayat" name="Riwayat" />
        <Option icon={SettingIcon} path="/users/pengaturan" name="Pengaturan" />
        <Option icon={LogoutIcon} path="/users/keluar" name="Keluar" />
      </div>
    </div>
  );
};

export default SidebarLayout;
