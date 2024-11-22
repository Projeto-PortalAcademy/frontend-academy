import axios from "axios";

const BASE_URL = "http://localhost:8000";

export const endpoints = {
  LOGIN: "/auth/login",
  CREATE_USER: "/users",
  FORMS: "/forms",
};

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
