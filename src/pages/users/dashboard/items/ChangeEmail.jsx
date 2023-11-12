import { FormInput, FormPassword } from "components/common/Form";
import { useUserContext } from "context/UserContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthService from "services/api/auth";

const ChangeEmailItem = () => {
  const { user, token, updateUserData } = useUserContext();
  const navigate = useNavigate();

  // Form state
  const [form, setForm] = useState({
    oldEmail: user?.email,
    email: "",
    password: "",
  });

  const handleFormChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  // Form submission handling
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // is email
    if (!form.email.includes("@")) {
      toast.error("Email tidak valid");
      return;
    }

    if (form.email === form.oldEmail) {
      toast.error("Email tidak boleh sama");
      return;
    }

    if (form.password.length < 8) {
      toast.error("Kata sandi minimal 8 karakter");
      return;
    }

    const { status, message, errors } = await AuthService.updateEmail(form, token);

    if (status === "error" || errors) {
      toast.error(message);
      return;
    }

    toast.success("Email berhasil diubah");

    updateUserData();
    navigate("/users");
  };

  return (
    <div className="box px-5 py-5">
      <div className="fs-2 border-bottom pb-3 mb-5">Ubah Email</div>
      <FormInput
        label="Email Lama"
        type="email"
        name="oldEmail"
        value={user?.email}
        disabled={true}
      />
      <FormInput
        label="Email Baru"
        type="email"
        name="email"
        placeholder="Masukkan email baru"
        onChange={handleFormChange}
      />
      <FormPassword
        label="Kata Sandi"
        name="password"
        placeholder="Masukkan kata sandi minimal 8 karakter"
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

export default ChangeEmailItem;
