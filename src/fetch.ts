import axios from "axios";

export const fetcher = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    Authorization: localStorage.getItem("token"),
  },
});
