import MainLayout from "components/layout/MainLayout";
import { ReactComponent as DocumentIcon } from "assets/icon/svg/Ellipse-65.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Psychologist from "services/api/psikolog";
import { useUserContext } from "context/UserContext";
import { toast } from "react-toastify";

const ShowProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [psychologist, setPsychologist] = useState({});
  const { token } = useUserContext();

  useEffect(() => {
    const fetchPsychologist = async () => {
      const { data, message, status } = await Psychologist.get(token, id);

      if (status !== "success") {
        toast.warning("Gagal mengambil data psikolog");
        return navigate(-1);
      }

      setPsychologist(data);
    };

    fetchPsychologist();
  }, []);

  return (
    <MainLayout shadow>
      <div className="container container-fluid py-5">
        <div className="row pb-5 border-bottom">
          <div className="col-auto">
            <img
              src={psychologist?.profile_photo || "https://via.placeholder.com/130"}
              className="rounded-circle"
            />
          </div>
          <div className="col d-flex flex-column justify-content-center">
            <h2 className="">{psychologist?.fullname}</h2>
            <div className="h7">
              Jumlah sesi konseling:{" "}
              <div className="badge rounded-corner bg-warning py-3 px-5 fs-6 text-white">
                2001+ Sesi
              </div>
            </div>
          </div>
        </div>
        <h4 className="mt-5">Profil Psikolog</h4>
        <p className="text-justify mt-4 lh-lg">{psychologist?.bio_desc || "-"}</p>

        <h4 className="mt-5">Keahlian Psikolog</h4>
        <p className="mt-3">{psychologist?.skill_desc || "-"}</p>

        <div className="text-center">
          <button
            className="btn btn-primary mt-5 mb-5"
            onClick={() => navigate(`/konseling/profile/${id}/payment`)}
          >
            Daftar Konseling
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default ShowProfile;
