import MainLayout from "components/layout/MainLayout";
import { useUserContext } from "context/UserContext";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Psychotest from "services/api/psikotes";

const HasilPsikotes = () => {
  const navigate = useNavigate();
  const { token } = useUserContext();
  const { code } = useParams();

  const [result, setResult] = useState({});

  useEffect(() => {
    const getResult = async () => {
      const { data, message, status } = await Psychotest.getResult(token, code);

      if (status === "error") {
        toast.warn(message);
        return;
      }

      setResult(data);
    };

    getResult();
  }, []);

  return (
    <MainLayout>
      <div className="container container-fluid text-center py-5">
        <span className="d-block">your personality type is :</span>
        <h1 className="my-5"> {result?.personality} </h1>

        <p className="mx-auto lh-lg" style={{ maxWidth: 800 }}>
          {result?.description}
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
