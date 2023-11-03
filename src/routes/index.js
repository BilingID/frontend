import { Navigate, useRoutes } from "react-router-dom";

import DashboardUsers from "pages/users/dashboard";
import Landing from "pages/Landing";
import LoginPage from "pages/auth/Login";
import RegisterPage from "pages/auth/Register";
import ForgotPasswordPage from "pages/auth/ForgotPassword";
import PsikotesPage from "pages/psikotes/Psikotes";
import PaymentPage from "pages/psikotes/Payment";

const PrivateRoute = ({ element }) => {
  const isAuthenticated = false; // TODO: check if user is authenticated
  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/users/*",
      // element: <PrivateRoute element={<DashboardUsers />} />,
      element: <DashboardUsers />,
    },
    {
      path: "/psikotes/*",
      element: <PsikotesPage />,
    },
    {
      path: "/psikotes/payment",
      element: <PaymentPage />,
    },
    {
      path: "/",
      element: <PrivateRoute element={<Landing />} />,
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
      path: "/forgot-password",
      element: <ForgotPasswordPage />,
    },
    {
      path: "*",
      element: <Navigate to="/" replace />, // debug
    },
  ]);

  return routes;
};

export default Routes;
