import axios from "axios";

const api = import.meta.env.VITE_API_KEY;

export function searchBestPetshop() {
  return axios.post(`${api}`);
};

