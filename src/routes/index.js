import { Navigate, useRoutes } from "react-router-dom";

import DashboardUsers from "pages/users/dashboard";
import Landing from "pages/Landing";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/users/*",
      element: <DashboardUsers />,
    },
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "*",
      element: <Navigate to="/" replace />, // debug
    },
  ]);

  return routes;
};

export default Routes;
