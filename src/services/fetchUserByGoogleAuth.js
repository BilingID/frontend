import axios from "axios";

export default async function fetchUserByGoogleAuth(accessToken) {
  return axios
    .post(`http://localhost:8000/api/v1/auth/google`, {
      access_token: accessToken,
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);
}
