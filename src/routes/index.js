import { useRoutes } from "react-router-dom";

import DashboardUsers from "pages/users/dashboard";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/users/*",
      element: <DashboardUsers />,
    },
  ]);

  return routes;
};

export default Routes;
