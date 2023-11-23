import MainLayout from "components/layout/MainLayout";
import React, { useState } from "react";

const Diagnosa = () => {
  const [showMessage, setShowMessage] = useState(false);
  const handleClick = () => {
    // Your click event logic goes here
    // For example, you can update the state to show the message
    setShowMessage(true);
  };
  return (
    <MainLayout>
      <div className="container container-fluid py-5 text-center">
        <p className="mb-4">Input Hasil Konseling</p>
        <div className="input-group mx-auto" style={{ width: "50%" }}>
          <input
            type="text"
            className="fw-bold form-control bg-white"
            value="Hasil Konseling _ Arla Sifhana Putri.pdf"
            disabled
          />
          <button className="btn btn-outline-edit text-primary" type="button">
            Upload
          </button>
        </div>
        <p className="my-5">Hasil Konseling berupa Docs atau PDF yang dapat didownload</p>
        <button className="btn btn-primary" onClick={handleClick}>
          Selesai
        </button>
        {showMessage && <p>Diagnosis telah ditambahkan</p>}
      </div>
    </MainLayout>
  );
};

export default Diagnosa;
