import { Navigate, useRoutes } from "react-router-dom";

import DashboardUsers from "pages/users/dashboard/Dashboard";
import Landing from "pages/users/Landing";
import LoginPage from "pages/auth/Login";
import RegisterPage from "pages/auth/Register";
import ForgotPasswordPage from "pages/auth/ForgotPassword";
import PsikotesPage from "pages/psikotes/Psikotes";
import PaymentPage from "pages/payment/Payment";
import DiagnosaPage from "pages/konseling/Diagnosa";
import HasilDiagnosa from "pages/konseling/HasilDiagnosa";
import HasilPsikotes from "pages/psikotes/HasilPsikotes";
import MulaiKonseling from "pages/konseling/MulaiKonseling";
import KonselingHome from "pages/konseling/KonselingHome";
import ShowProfile from "pages/konseling/ShowProfile";

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
      element: <PrivateRoute element={<PaymentPage label={"Psikotes"} />} />,
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
      element: <PrivateRoute element={<PaymentPage step={1} label={"Psikotes"} />} />,
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
      path: "/konseling/start",
      element: <MulaiKonseling />,
    },
    {
      path: "/konseling/result",
      element: <HasilPsikotes />,
    },
    {
      path: "/konseling/diagnosa",
      element: <DiagnosaPage />,
    },
    {
      path: "/konseling/result/diagnosa",
      element: <HasilDiagnosa />,
    },
    {
      path: "/konseling",
      element: <KonselingHome />,
    },
    {
      path: "/konseling/payment",
      element: <PrivateRoute element={<PaymentPage label={"Konseling"} />} />,
    },
    {
      path: "/konseling/profile",
      element: <ShowProfile />,
    },
  ]);

  return routes;
};

export default Routes;
