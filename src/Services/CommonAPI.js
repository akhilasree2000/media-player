import axios from "axios";
import baseURL from "./baseURL";

const commonAPI = async (httpmethode, endpoint, requestBody) => {
  const requestConfig = {
    method: httpmethode,
    url: baseURL + endpoint,
    data: requestBody,
  };
  return axios(requestConfig)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export default commonAPI 