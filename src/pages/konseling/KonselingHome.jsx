import MainLayout from "components/layout/MainLayout";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as DocumentIcon } from "assets/icon/svg/Ellipse-65.svg";

const KonselingHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
        <div className="row my-4">
          {[...Array(4)].map((item, index) => {
            return (
              <div className="col">
                <div
                  className="card rounded-corner py-5 pe-auto"
                  onClick={() => navigate("profile")}
                >
                  <div className="card-body text-center">
                    <DocumentIcon />
                    <div
                      className="badge d-block rounded-corner bg-warning mx-auto py-3 px-5 my-4 fs-6 text-white"
                      style={{ width: "fit-content" }}
                    >
                      2001+ Sesi
                    </div>
                    <h4 style={{ maxWidth: 200 }} className="mx-auto">
                      Hani Kumala, M. Psi., Psikolog
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row">
          {[...Array(4)].map((item, index) => {
            return (
              <div className="col">
                <div
                  className="card rounded-corner py-5 pe-auto"
                  onClick={() => navigate("profile")}
                >
                  <div className="card-body text-center">
                    <DocumentIcon />
                    <div
                      className="badge d-block rounded-corner bg-warning mx-auto py-3 px-5 my-4 fs-6 text-white"
                      style={{ width: "fit-content" }}
                    >
                      2001+ Sesi
                    </div>
                    <h4 style={{ maxWidth: 200 }} className="mx-auto">
                      Hani Kumala, M. Psi., Psikolog
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
};

export default KonselingHome;
