// src/services/api.js
// Conexión central entre React y el backend Laravel.
// En local usa 127.0.0.1; en producción usará la variable VITE_API_URL.

import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;