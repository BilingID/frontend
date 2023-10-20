import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import DashboardLayout from "pages/users/dashboard/DashboardLayout";
import SidebarLayout from "pages/users/dashboard/SidebarLayout";
import ProfilItem from "pages/users/dashboard/items/Profile";
import PsikotesItem from "./items/Psikotes";
import JadwalItem from "./items/Jadwal";
import RiwayatItem from "./items/Riwayat";
import PengaturanItem from "./items/Pengaturan";
import LogoutItem from "./items/Logout";

const routeComponents = {
  "/users": <ProfilItem />,
  "/users/psikotes": <PsikotesItem />,
  "/users/jadwal": <JadwalItem />,
  "/users/riwayat": <RiwayatItem />,
  "/users/pengaturan": <PengaturanItem />,
  "/users/logout": <LogoutItem />,
};

const DashboardUsers = () => {
  const location = useLocation();
  const [page, setPage] = useState(routeComponents[location.pathname] || <ProfilItem />);

  useEffect(() => {
    const selectedPage = routeComponents[location.pathname] || <ProfilItem />;
    setPage(selectedPage);
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
