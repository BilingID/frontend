import { Link } from "react-router-dom";
import { FormInput, FormPassword } from "components/common/Form";

import { ReactComponent as GoogleIcon } from "assets/icon/svg/google-icon.svg";
import AuthLayout from "./AuthLayout";
import { useState } from "react";

const LoginPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <AuthLayout>
      <div className="fs-2 ">Selamat Datang Kembali di BiLing.ID</div>

      <p className="my-4">
        Belum punya akun?{" "}
        <Link to="/register" className="text-decoration-none fw-bold">
          Daftar Disini!
        </Link>
      </p>

      <div className="text-center">
        <button className="btn btn-default fw-normal bg-white shadow-btn fs-6 px-5">
          <GoogleIcon className="me-2" /> Masuk dengan Google
        </button>
      </div>

      <div className="centered-line">atau</div>

      <FormInput
        label="Alamat Email"
        placeholder="Masukkan alamat emailmu"
        name="email"
        onChange={handleFormChange}
      />
      <FormPassword
        label="Kata Sandi"
        placeholder="Masukkan kata sandi"
        name="password"
        onChange={handleFormChange}
      />

      <div className="text-end mb-4">
        <Link to="/forgot-password" className="text-decoration-none fw-bold">
          Lupa kata sandi?
        </Link>
      </div>

      <div className="text-end">
        <button className="btn btn-primary px-5" onClick={handleSubmit}>
          Masuk
        </button>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
