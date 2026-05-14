// src/services/api.js
// Este archivo centraliza la conexión entre React y el backend Laravel.

import axios from "axios";

// URL base del backend Laravel.
// Laravel se está ejecutando en http://127.0.0.1:8000
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;