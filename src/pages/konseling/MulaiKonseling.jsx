import MainLayout from "components/layout/MainLayout";
import { Link } from "react-router-dom";

const Konseling = () => {
  return (
    <MainLayout>
      <div className="container container-fluid text-center py-5">
        <h1 className="my-5">
          Konseling dengan <br /> Hani Kumala, M. Psi., Psikolog
        </h1>
        <p className="my-5">Berikut adalah link Google Meet yang digunakan</p>
        <Link to="https://meet.google.com/zon-yhdk-anw" className="fs-4">
          https://meet.google.com/zon-yhdk-anw
        </Link>
      </div>
    </MainLayout>
  );
};

export default Konseling;
