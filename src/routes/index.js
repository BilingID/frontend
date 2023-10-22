import { Navigate, useRoutes } from "react-router-dom";

import DashboardUsers from "pages/users/dashboard";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/users/*",
      element: <DashboardUsers />,
    },
    {
      path: "*",
      element: <Navigate to="/users" replace />, // debug
    },
  ]);

  return routes;
};

export default Routes;
