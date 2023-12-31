import { Link, useNavigate } from "react-router-dom";
import { FormInput, FormPassword } from "components/common/Form";

import { ReactComponent as GoogleIcon } from "assets/icon/svg/google-icon.svg";
import AuthLayout from "./AuthLayout";
import { useEffect, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useUserContext } from "context/UserContext";

import { toast } from "react-toastify";
import AuthService from "services/api/auth";

const LoginPage = () => {
  const { user, setToken } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/users");
    }
  }, [user]);

  const [googleUser, setGoogleUser] = useState(null);

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
      AuthService.fetchByGoogle(googleUser.access_token).then((res) => {
        if (res.status === "success") {
          toast.success("Login Berhasil");
          setToken(res.data?.token);
        } else toast.warn("Login Gagal");
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

  const handleSubmit = async (event) => {
    toast.dismiss();

    // TODO: add validation
    if (form.email === "" || form.password === "") return toast.warn("Mohon isi semua kolom");

    event.target.disabled = true;

    const { data, message, status } = await AuthService.login(form);

    if (status === "success") {
      toast.success("Login Berhasil");
    } else {
      // TODO: add translation
      if (message === "Your email is not registered") {
        toast.warn("Email yang anda masukkan tidak terdaftar");
      } else if (message === "Your password is incorrect") {
        toast.warn("Password yang anda masukkan salah");
      }
    }

    setToken(data?.token);
    event.target.disabled = false;
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
