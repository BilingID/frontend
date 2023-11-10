import axios from "axios";

export default async function loginUser(form) {
  return axios
    .post(`http://localhost:8000/api/v1/auth/login`, {
      email: form.email,
      password: form.password,
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);
}
