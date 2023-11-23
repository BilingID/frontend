import MainLayout from "components/layout/MainLayout";
import { ReactComponent as DocumentIcon } from "assets/icon/svg/document.svg";
import { useNavigate } from "react-router-dom";

const HasilDiagnosa = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="container text-center py-5">
        <span className="d-block">Hasil Konseling :</span>
        <button className="btn btn-default text-primary my-5 bg-primary-transparent">
          <DocumentIcon className="me-2" width={48} height={48} />
          HASIL KONSELING
        </button>
        <span className="d-block ">Hasil Konseling berupa Docs atau PDF yang dapat didownload</span>
        <div className="text-center" style={{ marginTop: 50 }} onClick={() => navigate(-1)}>
          <button className="btn btn-primary">Selesai</button>
        </div>
      </div>
    </MainLayout>
  );
};

export default HasilDiagnosa;
