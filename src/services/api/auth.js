import axios from "axios";

const BASE_API_URL = "http://localhost:8000/api/v1";

class Auth {
  constructor() {
    this.api = axios.create({
      baseURL: BASE_API_URL,
    });
  }

  handleError = (error) => error.response.data;

  login = (form) =>
    this.api
      .post("/auth/login", form)
      .then((res) => res.data)
      .catch(this.handleError);

  fetchByGoogle = (accessToken) =>
    this.api
      .post("/auth/google", { access_token: accessToken })
      .then((res) => res.data)
      .catch(this.handleError);

  register = (form) =>
    this.api
      .post("/auth/register", form)
      .then((res) => res.data)
      .catch(this.handleError);

  registerByGoogle = (accessToken) =>
    this.api
      .post("/auth/google/register", { access_token: accessToken })
      .then((res) => res.data)
      .catch(this.handleError);

  fetch = (token) =>
    this.api
      .get("/users", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => res.data)
      .catch(this.handleError);

  updateProfile = (body, token) =>
    this.api
      .post("/users", body, {
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
      })
      .then((res) => res.data)
      .catch(this.handleError);

  updatePassword = (form, token) => {
    const body = {
      password: form.password,
      password_confirmation: form.passwordConfirmation,
    };

    return this.api
      .put("/users/password", body, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => res.data)
      .catch(this.handleError);
  };

  updateEmail = (body, token) => {
    return this.api
      .put("/users/email", body, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => res.data)
      .catch(this.handleError);
  };
}

export default new Auth();
