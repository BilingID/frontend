import axios from "axios";

const BASE_API_URL = "http://localhost:8000/api/v1";

class Counseling {
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

  create = (accessToken, data) =>
    this.api
      .post("/konseling", data, { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((res) => res.data)
      .catch(this.handleError);

  fetch = (accessToken) =>
    this.api
      .get("/konseling", { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((res) => res.data)
      .catch(this.handleError);

  getPayment = (accessToken, code) =>
    this.api
      .get(`/konseling/${code}`, { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((res) => res.data)
      .catch(this.handleError);

  getMeetInfo = (accessToken, code) =>
    this.api
      .get(`/konseling/${code}/info`, { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((res) => res.data)
      .catch(this.handleError);

  getResult = (accessToken, code) =>
    this.api
      .get(`/konseling/${code}/result`, { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((res) => res.data)
      .catch(this.handleError);

  update = (accessToken, code, data) =>
    this.api
      .post(`/konseling/${code}/update`, data, {
        headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "multipart/form-data" },
      })
      .then((res) => res.data)
      .catch(this.handleError);
}

export default new Counseling();
