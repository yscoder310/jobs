import axios from "axios";

export const API = axios.create({
  baseURL: "https://api.weekday.technology/adhoc",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});


