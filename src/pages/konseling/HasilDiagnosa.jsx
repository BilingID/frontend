import MainLayout from "components/layout/MainLayout";
import { ReactComponent as DocumentIcon } from "assets/icon/svg/document.svg";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "context/UserContext";

const HasilDiagnosa = () => {
  const navigate = useNavigate();

  const { user } = useUserContext();

  return (
    <MainLayout shadow>
      <div className="container text-center py-5">
        <span className="d-block">Hasil Konseling :</span>
        <button className="btn btn-default text-primary my-5 bg-primary-transparent">
          <DocumentIcon className="me-2" width={48} height={48} />
          HASIL KONSELING
        </button>
        <span className="d-block ">Hasil Konseling berupa Docs atau PDF yang dapat didownload</span>
        <div className="text-center" style={{ marginTop: 50 }}>
          <button className="btn btn-primary me-2" onClick={() => navigate(-1)}>
            Selesai
          </button>

          {user?.role !== "client" && (
            <button className="btn btn-primary" onClick={() => navigate("/konseling/diagnosa")}>
              Update
            </button>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default HasilDiagnosa;
