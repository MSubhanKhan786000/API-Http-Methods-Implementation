import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

const getProducts = () => api.get("/products");

export { getProducts };
