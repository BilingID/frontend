import { Link } from "react-router-dom";
import { FormInput, FormPassword } from "components/common/Form";

import { ReactComponent as GoogleIcon } from "assets/icon/svg/google-icon.svg";
import AuthLayout from "./AuthLayout";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useGoogleLogin } from "@react-oauth/google";
import registerUserByGoogle from "services/registerUserByGoogle";
import { useUserContext } from "context/UserContext";

const RegisterPage = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    acceptAggrement: false,
  });

  const { setToken } = useUserContext();

  const handleGoogleLogin = (res) => {
    const accessToken = res.access_token;
    registerUserByGoogle(accessToken).then((res) => {
      if (res.status === "success") {
        toast.success("Registrasi Berhasil");
      } else {
        toast.error(res.message);
      }
      setToken(res.data?.token);
    });
  };

  const googleLogin = useGoogleLogin({
    onSuccess: (res) => handleGoogleLogin(res),
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event) => {
    setForm((prevState) => ({
      ...prevState,
      acceptAggrement: event.target.checked,
    }));
  };

  const handleSubmit = (event) => {
    if (!form.acceptAggrement) {
      toast.warn("Kamu harus menyetujui syarat dan ketentuan");
      return;
    }
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
        <button
          className="btn btn-default fw-normal bg-white shadow-btn fs-6 px-5"
          onClick={googleLogin}
        >
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

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="acceptAggrement"
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label">Terima syarat dan ketentuan</label>
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
