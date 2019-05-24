import api from "../../services/config";

const STATUS_OK = 200;

const fetchData = (url, method = "GET") =>
  fetch(`${api.base}${url}&api_key=${api.key}`, { method })
    .then(verifyResponse)
    .catch(handleErrors);

const verifyResponse = res => {
  if (!res || res.status !== STATUS_OK) {
    console.log(`error fetching - status: ${res.status}`);
    return res.status;
  }
  return res.json();
};

const handleErrors = error => console.error(error);

export { fetchData };
