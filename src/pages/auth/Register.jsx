import { Link } from "react-router-dom";
import { FormInput, FormPassword } from "components/common/Form";

import { ReactComponent as GoogleIcon } from "assets/icon/svg/google-icon.svg";
import AuthLayout from "./AuthLayout";
import { useState } from "react";

const RegisterPage = () => {
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
      <div className="fs-2">Selamat Datang di BiLing.ID</div>
      <p className="my-4">
        Sudah punya akun?{" "}
        <Link to="/login" className="text-decoration-none fw-bold">
          Masuk Disini!
        </Link>
      </p>
      <div className="text-center">
        <button className="btn btn-default fw-normal bg-white shadow-btn fs-6 px-5">
          <GoogleIcon className="me-2" /> Buat Akun dengan Google
        </button>
      </div>
      <div className="centered-line">atau</div>
      <FormInput
        label="Nama Lengkap"
        placeholder="Masukkan nama lengkapmu"
        name="fullName"
        onChange={handleFormChange}
      />
      <FormInput
        label="Alamat Email"
        placeholder="Masukkan alamat emailmu"
        name="email"
        onChange={handleFormChange}
      />
      <FormPassword
        label="Kata Sandi"
        placeholder="Masukkan kata sandi minimal 8 karakter"
        name="password"
        onChange={handleFormChange}
      />
      <FormPassword
        label="Konfirmasi Kata Sandi"
        placeholder="Harus sama dengan kata sandi"
        name="passwordConfirmation"
        onChange={handleFormChange}
      />

      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label class="form-check-label" for="flexCheckDefault">
          Terima syarat dan ketentuan
        </label>
      </div>

      <div className="text-end">
        <button className="btn btn-primary px-5" onClick={handleSubmit}>
          Buat Akun
        </button>
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;
