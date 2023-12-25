import MainLayout from "components/layout/MainLayout";
import React, { useRef, useState } from "react";
import { ReactComponent as DocumentIcon } from "assets/icon/svg/document.svg";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "context/UserContext";
import Counseling from "services/api/konseling";

const FormUpload = ({ onChange, form, handleUpload }) => {
  const fileRef = useRef(null);

  const handleClick = (event) => {
    fileRef.current.click();
  };

  return (
    <div className="input-group text-center mx-auto" style={{ width: "50%" }}>
      <button
        className="btn btn-outline-edit fs-6 align-items-center d-flex form-control"
        type="button"
        onClick={handleClick}
      >
        <DocumentIcon width={24} height={24} className="me-3" />
        {form?.file?.name || "Upload File Hasil Konseling"}
      </button>
      <input
        type="file"
        className="fw-bold form-control bg-white d-none"
        ref={fileRef}
        onChange={onChange}
      />
      <button className="btn btn-outline-edit text-primary" type="button" onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
};

const Diagnosa = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { token } = useUserContext();

  const [form, setForm] = useState({
    file: null,
  });

  const handleUploadChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    if (
      file.type !== "application/pdf" &&
      file.type !== "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      event.target.files = null;
      return toast.warn("File harus berupa PDF atau DOCX");
    }

    setForm({
      ...form,
      file: file,
    });
  };

  const handleUpload = async (event) => {
    event.preventDefault();

    if (!form.file) return toast.warn("File harus diisi");

    const { data, status } = await Counseling.update(token, id, form);
    console.log(data);

    if (status !== "success") {
      toast.warn("Gagal mengupload hasil konseling");
      return;
    }

    toast.success("Berhasil mengupload hasil konseling");
    navigate(-1);
  };

  return (
    <MainLayout shadow>
      <div className="container container-fluid py-5 text-center">
        <p className="mb-4">Input Hasil Konseling</p>

        <FormUpload onChange={handleUploadChange} handleUpload={handleUpload} form={form} />
        <p className="my-5">Hasil Konseling berupa Docs atau PDF yang dapat didownload</p>
        <button className="btn btn-primary" onClick={() => navigate(-1)}>
          Selesai
        </button>
      </div>
    </MainLayout>
  );
};

export default Diagnosa;
