import axios from "axios";

const back_end_api = import.meta.env.VITE_API_KEY;
const forecast_api = "https://api.openweathermap.org/data/2.5/forecast?appid=41572bccc2fb33c44671c9f8dc868874";

export function getForecastInfo(city) {
    return axios.get(`${forecast_api}&q=${city}&lang=pt_BR&units=metric`);
  };
