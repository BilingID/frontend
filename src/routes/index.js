import { Navigate, useRoutes } from "react-router-dom";

import DashboardUsers from "pages/users/dashboard/Dashboard";
import Landing from "pages/users/Landing";
import LoginPage from "pages/auth/Login";
import RegisterPage from "pages/auth/Register";
import ForgotPasswordPage from "pages/auth/ForgotPassword";
import PsikotesPage from "pages/psikotes/Psikotes";
import PaymentPage from "pages/psikotes/payment/Payment";
import DiagnosaPage from "pages/konseling/Diagnosa";
import HasilDiagnosa from "pages/konseling/HasilDiagnosa";
import HasilPsikotes from "pages/psikotes/result/HasilPsikotes";
import MulaiKonseling from "pages/konseling/MulaiKonseling";

import { useUserContext } from "context/UserContext";
import AttemptPsikotesIndex from "pages/psikotes/attempt/Attempt";
import { toast } from "react-toastify";

const PrivateRoute = ({ element }) => {
  const { user } = useUserContext();

  if (!user) {
    toast.warn("Anda harus login terlebih dahulu");

    return <Navigate to="/login" replace />;
  }

  return element;
};

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/users/*",
      element: <PrivateRoute element={<DashboardUsers />} />,
    },
    {
      path: "/psikotes",
      element: <PrivateRoute element={<PsikotesPage />} />,
    },
    {
      path: "/psikotes/payment",
      element: <PrivateRoute element={<PaymentPage />} />,
    },
    {
      path: "/psikotes/attempt",
      element: <PrivateRoute element={<AttemptPsikotesIndex />} />,
    },
    {
      path: "/psikotes/:code/attempt",
      element: <PrivateRoute element={<AttemptPsikotesIndex />} />,
    },
    {
      path: "/psikotes/:code/payment",
      element: <PrivateRoute element={<PaymentPage step={1} />} />,
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
      path: "/forgot-password",
      element: <PrivateRoute element={<ForgotPasswordPage />} />,
    },
    {
      path: "*",
      element: <Navigate to="/" replace />, // debug
    },
    {
      path: "/users/konseling",
      element: <MulaiKonseling />,
    },
    {
      path: "/users/hasilPsikotes",
      element: <HasilPsikotes />,
    },
    {
      path: "/users/hasilpsikotes/diagnosa",
      element: <DiagnosaPage />,
    },
    {
      path: "/users/hasildiagnosa",
      element: <HasilDiagnosa />,
    },
  ]);

  return routes;
};

export default Routes;
