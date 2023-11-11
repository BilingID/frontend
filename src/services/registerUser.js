import axios from "axios";

export default async function registerUser(form) {
  return axios
    .post(`http://localhost:8000/api/v1/auth/register`, {
      fullname: form.fullname,
      email: form.email,
      password: form.password,
      password_confirmation: form.passwordConfirmation,
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);
}
