import { useNavigate, Link } from "react-router-dom";

import Footer from "components/footer/Footer";
import { useState } from "react";
import { useUserContext } from "context/UserContext";

import { ReactComponent as ProfileIcon } from "assets/icon/svg/profile.svg";

const MainLayout = ({ shadow, children }) => {
  const navigate = useNavigate();
  const { user } = useUserContext();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-white">
      <div style={{ minHeight: "70vh" }}>
        <nav className="navbar navbar-expand-lg" style={{ boxShadow: !shadow && "none" }}>
          <div className="container">
            <div className="navbar-brand fs-2 btn" onClick={() => navigate("/")}>
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
                  <Link to="#about-us" className="nav-link text-black">
                    Tentang Kami
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-black"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={handleDropdown}
                  >
                    Layanan
                  </a>
                  <div
                    className={`dropdown-menu ${isDropdownOpen && "show"}`}
                    aria-labelledby="navbarDropdown"
                  >
                    <a
                      className="dropdown-item"
                      role="button"
                      onClick={() => navigate("/konseling")}
                    >
                      Konseling
                    </a>
                    <a
                      className="dropdown-item"
                      role="button"
                      onClick={() => navigate("/psikotes")}
                    >
                      Psikotes
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <Link to="#testimoni" className="nav-link text-black">
                    Testimoni
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#frequently-answer-question" className="nav-link text-black">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="collapse navbar-collapse" id="nav-toggler">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center gap-5">
                <li className="nav-item">
                  {user?.fullname ? (
                    <Link to="/users" className="nav-link text-black">
                      <ProfileIcon className="me-2" />
                      {user?.fullname}
                    </Link>
                  ) : (
                    <Link to="/login" className="nav-link text-black">
                      <button className="btn btn-primary">Masuk</button>
                    </Link>
                  )}
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

export default MainLayout;
