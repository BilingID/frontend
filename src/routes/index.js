import { Navigate, useRoutes } from "react-router-dom";

import DashboardUsers from "pages/users/dashboard/Dashboard";
import Landing from "pages/Landing";
import LoginPage from "pages/auth/Login";
import RegisterPage from "pages/auth/Register";
import ForgotPasswordPage from "pages/auth/ForgotPassword";
import PsikotesPage from "pages/psikotes/Psikotes";
import PaymentPage from "pages/psikotes/payment/Payment";
import KonselingPage from "pages/users/dashboard/items/Konseling";
import DiagnosaPage from "pages/users/dashboard/items/Diagnosa";
import HasilDiagnosa from "pages/users/dashboard/items/HasilDiagnosa";
import HasilPsikotes from "pages/users/dashboard/items/HasilPsikotes";
import MulaiKonseling from "pages/users/dashboard/items/MulaiKonseling";

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
      element: <KonselingPage />,
    },
    {
      path: "/users/hasilPsikotes",
      element: <HasilPsikotes/>,
    },
    {
      path: "/users/hasilpsikotes/diagnosa",
      element: <DiagnosaPage/>,
    },
    {
      path: "/users/hasildiagnosa",
      element: <HasilDiagnosa/>,
    },
    {
      path: "/users/mulaikonseling",
      element: <MulaiKonseling/>,
    },


  ]);

  return routes;
};

export default Routes;
