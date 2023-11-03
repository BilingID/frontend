import { ReactComponent as MessageIcon } from "assets/icon/svg/message.svg";
import { ReactComponent as NotificationIcon } from "assets/icon/svg/notification.svg";
import { useNavigate, Link } from "react-router-dom";

import Footer from "components/footer/Footer";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/");

  const [search, setSearch] = useState("");

  const handleFormChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    // console.log(search);
  }, [search]);

  return (
    <div>
      <div className="mb-5">
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
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="nav-toggler">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center gap-5">
                <li className="nav-item">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Cari Psikolog"
                    onChange={handleFormChange}
                  />
                </li>
                <li className="nav-item">
                  <Link to="#" className="text-black">
                    <NotificationIcon />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="text-black">
                    <MessageIcon />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {children}
      </div>

      <Footer className="bg-white" />
    </div>
  );
};

export default DashboardLayout;
