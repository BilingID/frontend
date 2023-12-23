import MainLayout from "components/layout/MainLayout";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as DocumentIcon } from "assets/icon/svg/Ellipse-65.svg";
import Psychologist from "services/api/psikolog";
import { useUserContext } from "context/UserContext";
import { toast } from "react-toastify";

const KonselingHome = () => {
  const [psychologists, setPsychologists] = useState([]);
  const { token } = useUserContext();

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchPsychologists = async () => {
      const { data, message, status } = await Psychologist.getAll(token);

      if (status !== "success") {
        toast.warn("Gagal mengambil data psikolog");
        return;
      }

      // splice the array
      const slicedData = [];
      while (data.length) slicedData.push(data.splice(0, 4));

      setPsychologists(slicedData);
    };

    fetchPsychologists();
  }, []);

  const navigate = useNavigate();
  return (
    <MainLayout shadow>
      <div className="container container-fluid text-center py-5">
        <h1 className="text-center mt-3 lh-base">
          Konseling dengan <br /> Psikolog BiLing.ID
        </h1>
        <p className="my-5 lh-lg mx-auto" style={{ maxWidth: 750 }}>
          Apakah kamu merasakan bahwa kontrol atas hidupmu mulai hilang? Mungkin kamu mengalami
          gangguan dari berbagai aspek kehidupan akibat masalah yang sedang kamu hadapi. Untuk itu,
          kami sarankan agar kamu berkonsultasi dengan Psikolog BiLing.ID, yang siap memberikan
          bantuan dan dukungan yang kamu butuhkan.
        </p>
        <button
          className="btn btn-primary mb-5"
          onClick={() =>
            window.scrollTo({
              top: 840,
              behavior: "smooth",
            })
          }
        >
          Daftar Konseling
        </button>
      </div>
      <div className="container container-fluid text-center py-5">
        {psychologists?.map((chunks, index) => {
          return (
            <div className="row my-4">
              {chunks.map((psychologist, index) => {
                return (
                  <div className="col">
                    <div
                      className="card rounded-corner py-5 pe-auto h-100"
                      onClick={() => navigate(`profile/${psychologist.id}`)}
                    >
                      <div className="card-body text-center">
                        <img
                          src={psychologist?.profile_photo || "https://via.placeholder.com/130"}
                          className="rounded-circle"
                        />
                        <div
                          className="badge d-block rounded-corner bg-warning mx-auto py-3 px-5 my-4 fs-6 text-white"
                          style={{ width: "fit-content" }}
                        >
                          2001+ Sesi
                        </div>
                        <h4 style={{ maxWidth: 200 }} className="mx-auto">
                          {psychologist.fullname}
                        </h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </MainLayout>
  );
};

export default KonselingHome;
