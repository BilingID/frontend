import { useNavigate } from "react-router-dom";

import { FormPassword } from "components/common/Form";
import { useState } from "react";
import AuthService from "services/api/auth";
import { useUserContext } from "context/UserContext";
import { toast } from "react-toastify";

const ChangePasswordItem = () => {
  const navigate = useNavigate();
  const { token, user, setUser } = useUserContext();

  // Form state
  const [form, setForm] = useState({
    password: "",
    passwordConfirmation: "",
  });

  const handleFormChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  // Form submission handling
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (form.password !== form.passwordConfirmation) {
      toast.error("Kata sandi tidak sama");
      return;
    }

    if (form.password.length < 8 || form.passwordConfirmation.length < 8) {
      toast.error("Kata sandi minimal 8 karakter");
      return;
    }

    AuthService.updatePassword(form, token).then((res) => {
      if (res.status === "success") {
        toast.success("Kata sandi berhasil diubah");
        setUser({
          ...user,
          isPasswordSet: 1,
        });
      } else {
        toast.error("Kata sandi gagal diubah");
      }

      navigate("/users");
    });
  };

  return (
    <div className="box px-5 py-5">
      <div className="fs-2 border-bottom pb-3 mb-5">Ubah Kata Sandi</div>

      <FormPassword
        label="Kata Sandi Baru"
        name="password"
        placeholder="Masukkan kata sandi baru minimal 8 karakter"
        onChange={handleFormChange}
      />

      <FormPassword
        label="Konfirmasi Kata Sandi Baru"
        name="passwordConfirmation"
        placeholder="Harus sama dengan kata sandi baru"
        onChange={handleFormChange}
      />

      <div className="d-flex justify-content-end gap-3 ">
        <button className="btn btn-outline-primary" onClick={() => navigate("/users")}>
          Batal
        </button>
        <button className="btn btn-primary" onClick={handleFormSubmit}>
          Simpan
        </button>
      </div>
    </div>
  );
};

export default ChangePasswordItem;
