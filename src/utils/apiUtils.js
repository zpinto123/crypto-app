import axios from "axios";
import api from "../services/config";

const STATUS_OK = 200;

const fetchData = (url, params = {}) => {
  console.log("url: ", `${api.base}${url}`);
  console.log("params: ", params);
  return axios
    .get(`${api.base}${url}`, {
      params
    })
    .then(verifyResponse)
    .catch(handleErrors);
};
// (url, method = "GET") =>
//   fetch(`${api.base}${url}`, { method })
//     .then(verifyResponse)
//     .catch(handleErrors);

const verifyResponse = res => {
  console.log("RES: ", res);
  if (!res || res.status !== STATUS_OK || !res.data) {
    console.log(`error fetching - status: ${res.status}`);
    return res.status;
  }
  console.log("RES: ", res);
  return res.data;
};

// axios.get("/user", {
//   params: {
//     ID: 12345
//   }
// });

const handleErrors = error => console.error(error);

export { fetchData };
