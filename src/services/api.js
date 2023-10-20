import axios from "axios";

const api_key = import.meta.env.VITE_API_KEY;
const forecast_api = "https://api.openweathermap.org/data/2.5";

export function getForecastInfo(city) {
    return axios.get(`${forecast_api}/forecast?q=${city}&lang=pt_BR&units=metric&appid=${api_key}`);
  };
