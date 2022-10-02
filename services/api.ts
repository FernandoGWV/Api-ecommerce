import axios from "axios";

const api = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/",
});

api.interceptors.request.use((config: any) => {
  config.headers["Authorization"] =
    "Bearer " + localStorage.getItem("@token") || "";

  return config;
});

export default api;
