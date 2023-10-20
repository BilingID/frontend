import DashboardLayout from "pages/users/dashboard/DashboardLayout";
import SidebarLayout from "pages/users/dashboard/SidebarLayout";
import ProfilItem from "pages/users/dashboard/items/Profile";
import PsikotesItem from "./items/Psikotes";
import JadwalItem from "./items/Jadwal";
import RiwayatItem from "./items/Riwayat";
import PengaturanItem from "./items/Pengaturan";
import LogoutItem from "./items/Logout";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const DashboardUsers = () => {
  const location = useLocation();
  const [page, setPage] = useState(<ProfilItem />);
  useEffect(() => {
    switch (location.pathname) {
      case "/users":
        setPage(<ProfilItem />);
        break;
      case "/users/psikotes":
        setPage(<PsikotesItem />);
        break;
      case "/users/jadwal":
        setPage(<JadwalItem />);
        break;
      case "/users/riwayat":
        setPage(<RiwayatItem />);
        break;
      case "/users/pengaturan":
        setPage(<PengaturanItem />);
        break;
      case "/users/logout":
        setPage(<LogoutItem />);
        break;
      default:
        setPage(<ProfilItem />);
        break;
    }
  }, [location.pathname]);

  return (
    <DashboardLayout>
      <div className="container mt-5">
        <div className="row d-flex gap-4">
          <div className="col-3">
            <SidebarLayout />
          </div>
          <div className="col">{page}</div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardUsers;
