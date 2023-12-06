import axios from "axios";

const BASE_API_URL = "http://localhost:8000/api/v1";

class Psychotest {
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

  create = (accessToken) =>
    this.api
      .post("/psikotes", null, { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((res) => res.data)
      .catch(this.handleError);

  fetch = (accessToken) =>
    this.api
      .get("/psikotes", { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((res) => res.data)
      .catch(this.handleError);

  getPayment = (accessToken, code) =>
    this.api
      .get(`/psikotes/${code}`, { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((res) => res.data)
      .catch(this.handleError);

  getQuestions = (accessToken, code) =>
    this.api
      .get(`/psikotes/${code}/questions`, { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((res) => res.data)
      .catch(this.handleError);

  submitAnswers = (accessToken, code, answers) =>
    this.api
      .post(
        `/psikotes/${code}/answer`,
        {
          answers: answers,
        },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      )
      .then((res) => res.data)
      .catch(this.handleError);
}

export default new Psychotest();
