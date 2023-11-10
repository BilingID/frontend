import axios from "axios";

export default function fetchUser(token) {
  return axios
    .get(`http://localhost:8000/api/v1/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);
}
