import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_KEY

export async function check(body) {
  const response = await axios.post(`${BASE_URL}/petshop/check`, body)
  
  return response.data;
};


export async function getPetshops() {
  const response = await axios.get(`${BASE_URL}/petshop`)
  console.log(BASE_URL);
  
  return response.data;
};

// export async function createPetshop() {
//     const response = await api.get('/petshop', body)
  
//     return response.data;
// }