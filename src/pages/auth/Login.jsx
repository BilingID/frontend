import { Link, useNavigate } from "react-router-dom";
import { FormInput, FormPassword } from "components/common/Form";

import { ReactComponent as GoogleIcon } from "assets/icon/svg/google-icon.svg";
import AuthLayout from "./AuthLayout";
import { useEffect, useState } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { useUserContext } from "context/UserContext";

import { toast } from "react-toastify";
import fetchUserByGoogleAuth from "services/fetchUserByGoogleAuth";
import loginUser from "services/loginUser";

const LoginPage = () => {
  const { user, setToken } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/users");
    }
  }, [user]);

  const [googleUser, setGoogleUser] = useState([]);

  const googleLogin = useGoogleLogin({
    onSuccess: (res) => {
      setGoogleUser(res);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  useEffect(() => {
    if (googleUser?.access_token) {
      fetchUserByGoogleAuth(googleUser.access_token).then((res) => {
        setToken(res.data?.token);

        if (res.status === "success") toast.success("Login Berhasil");
        else toast.warn(res.message);
      });
    }
  }, [googleUser]);

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
    toast.dismiss();

    // TODO: add validation
    if (form.email === "" || form.password === "") return toast.warn("Mohon isi semua kolom");

    event.target.disabled = true;

    loginUser(form)
      .then((res) => {
        if (res.status === "success") {
          toast.success("Login Berhasil");
        } else {
          toast.warn(res.message);
        }
        setToken(res.data?.token);
      })
      .finally(() => {
        event.target.disabled = false;
      });
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
        <button
          className="btn btn-default fw-normal bg-white shadow-btn fs-6 px-5"
          onClick={googleLogin}
        >
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
