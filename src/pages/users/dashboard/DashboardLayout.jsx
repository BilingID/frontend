import MessageIcon from "assets/icon/svg/message.svg";
import NotificationIcon from "assets/icon/svg/notification.svg";
import { useNavigate } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/");

  return (
    <div className="dashboard-body">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <div className="navbar-brand fs-2 btn" onClick={handleClick}>
            BiLing.ID
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav-toggler"
            aria-controls="nav-toggler"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="nav-toggler">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center gap-5">
              <li className="nav-item">
                <input type="text" className="form-control" placeholder="Cari Psikolog" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img src={NotificationIcon} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img src={MessageIcon} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {children}
    </div>
  );
};

export default DashboardLayout;
