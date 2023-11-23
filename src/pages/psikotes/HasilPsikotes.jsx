import MainLayout from "components/layout/MainLayout";
import { useNavigate } from "react-router-dom";

const HasilPsikotes = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="container container-fluid text-center py-5">
        <span className="d-block">your personality type is :</span>
        <h1 className="my-5"> INTROVERT </h1>

        <p className="mx-auto lh-lg" style={{ maxWidth: 800 }}>
          Orang introvert lebih suka menyendiri untuk mengumpulkan energinya. Namun, mereka
          sebenarnya tidak ada masalah bila harus berada dalam situasi sosial.
        </p>
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-primary"
            style={{ marginTop: 100, marginBottom: 50 }}
            onClick={() => navigate(-1)}
          >
            Sebelumnya
          </button>
          <button
            className="btn btn-primary"
            style={{ marginTop: 100, marginBottom: 50 }}
            onClick={() => navigate("diagnosa")}
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default HasilPsikotes;
