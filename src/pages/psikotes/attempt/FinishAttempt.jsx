import MainLayout from "components/layout/MainLayout";
import { useNavigate } from "react-router-dom";

const FinishAttempt = () => {
  const navigate = useNavigate();
  return (
    <div className="container my-5 text-center">
      <h1 className="pt-5 py-3">Yeay! Tes telah selesai</h1>
      <p style={{ width: "630px", lineHeight: "35px" }} className="mx-auto py-3">
        Hasil tes akan keluar secepatnya dan kamu bisa mengetahuinya di menu psikotes yang ada di
        profilmu.
      </p>
      <button className="btn btn-primary my-4" onClick={() => navigate("/users")}>
        Kembali ke Beranda
      </button>
    </div>
  );
};

export default FinishAttempt;
