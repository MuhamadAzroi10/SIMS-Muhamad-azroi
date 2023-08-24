import axios from "axios";

const httpRequest = axios.create({
  baseURL: "https://take-home-test-api.nutech-integrasi.app",
});

httpRequest.interceptors.request.use((config) => {
  const appToken = localStorage.getItem("@token");

  if (appToken) {
    config.headers = {
      Authorization: `Bearer ${appToken}`,
    };
  }

  return config;
});

httpRequest.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 403 || error.response.status === 401) {
      localStorage.removeItem("@token");
      window.location.href = "/auth/login";
    }

    return Promise.reject(error);
  }
);

export default httpRequest;
