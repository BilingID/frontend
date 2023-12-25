import MainLayout from "components/layout/MainLayout";
import { ReactComponent as DocumentIcon } from "assets/icon/svg/document.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "context/UserContext";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Counseling from "services/api/konseling";

const HasilDiagnosa = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { user, token } = useUserContext();

  const [result, setResult] = useState(null);

  useEffect(() => {
    const getResult = async () => {
      const { data, status } = await Counseling.getResult(token, id);

      if (status !== "success") {
        toast.warn("Gagal mendapatkan hasil konseling");
        return;
      }

      if (data) {
        setResult(data);
      }
    };

    getResult();
  }, []);

  return (
    <MainLayout shadow>
      <div className="container text-center py-5">
        <span className="d-block">Hasil Konseling :</span>
        {result?.attachment_path ? (
          <Link
            className="btn btn-default text-primary my-5 bg-primary-transparent"
            to={result.attachment_path}
            style={{
              lineHeight: "70px",
            }}
            target="_blank"
            download
          >
            <DocumentIcon className="me-2" width={48} height={48} />
            HASIL KONSELING
          </Link>
        ) : (
          <button className="btn btn-default text-danger my-5 bg-danger-transparent">
            Hasil konseling masih belum tersedia
          </button>
        )}

        <span className="d-block ">Hasil Konseling berupa Docs atau PDF yang dapat didownload</span>
        <div className="text-center" style={{ marginTop: 50 }}>
          <button className="btn btn-primary me-2" onClick={() => navigate(-1)}>
            Selesai
          </button>

          {user?.role !== "client" && (
            <button className="btn btn-primary" onClick={() => navigate("edit")}>
              Update
            </button>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default HasilDiagnosa;
