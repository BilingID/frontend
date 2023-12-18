import axios from "axios";

const BASE_API_URL = "http://localhost:8000/api/v1/";

class Psychologist {
  constructor() {
    this.api = axios.create({
      baseURL: BASE_API_URL,
    });
  }

  handleError = (error) => {
    if (!error.response) {
      error.response = {
        data: {
          message: "Tidak dapat terhubung ke server",
        },
      };
    }
    return error.response.data;
  };

  updateDescription = (token, form) =>
    this.api
      .put("/users/psychologist/update", form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data)
      .catch(this.handleError);

  getAll = (token) =>
    this.api
      .get("/users/psychologist", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data)
      .catch(this.handleError);

  get = (token, id) =>
    this.api
      .get(`/users/psychologist/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data)
      .catch(this.handleError);
}

export default new Psychologist();
