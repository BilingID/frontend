import { FormInput } from "components/common/Form";

import AuthLayout from "./AuthLayout";
import { useState } from "react";

const ForgotPasswordPage = () => {
  const [form, setForm] = useState({
    email: "",
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <AuthLayout>
      <div className="fs-2 ">Lupa Kata Sandi?</div>

      <p className="my-4">Masukkan alamat email yang terkait dengan akunmu</p>

      <FormInput
        label="Alamat Email"
        placeholder="Masukkan alamat emailmu"
        name="email"
        onChange={handleFormChange}
      />

      <div className="text-end">
        <button className="btn btn-primary px-5" onClick={handleSubmit}>
          Kirim
        </button>
      </div>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
