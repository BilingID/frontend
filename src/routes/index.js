import { Navigate, useRoutes } from "react-router-dom";

import DashboardUsers from "pages/users/dashboard";
import Landing from "pages/Landing";
import LoginPage from "pages/auth/Login";
import RegisterPage from "pages/auth/Register";

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
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "*",
      element: <Navigate to="/" replace />, // debug
    },
  ]);

  return routes;
};

export default Routes;
