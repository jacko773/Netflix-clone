import axios from "axios";

const API_KEY = "6dda2d92583ce1ef96f5356b033ebd98";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

instance.interceptors.request.use((config) => {
  config.params = { ...config.params, api_key: API_KEY };
  return config;
});

export default instance;
