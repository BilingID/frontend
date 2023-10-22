import { useNavigate } from "react-router-dom";

import { FormInput, FormPassword } from "components/common/Form";
import { useUserContext } from "context/UserContext";
import { useState } from "react";

const ChangePasswordItem = () => {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  // Form state
  const [form, setForm] = useState(user);

  const handleFormChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  // Form submission handling
  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log(form);

    setUser(form);
    navigate("/users");
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
