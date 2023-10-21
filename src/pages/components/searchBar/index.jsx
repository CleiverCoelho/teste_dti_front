// import { getForecastInfo } from "../../../services/api";
// import { BarContainer, Button, Search } from "./style";
// import dayjs from 'dayjs';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function SearchBar({ setCity, city, setForecastData }){
//     const weekDays = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];

//     function handleSubmit(e){
//         e.preventDefault();
        
//         getForecastInfo(city)
//             .then((res) => {
//                 if(res.data) {
//                     const parsedData = res?.data.list.map(({ dt_txt, main }) => {
//                         return {weekday: `${weekDays[(new Date(dt_txt)).getDay()]} (${dayjs(dt_txt).format("DD/MM")})`, temp: main?.temp}
//                     })
//                     setForecastData(parsedData);
//                 }
//             })
//             .catch((err) => {
//                 toast("Não foi possível localizar cidade ", city);
//             })
//     }

//     return (
//         <BarContainer onSubmit={handleSubmit}>
//             <ToastContainer></ToastContainer>
//             <Search
//                 placeholder="Pesquise aqui sua cidade"   
//                 onChange={(e) => setCity(e.target.value)}
//                 value={city}
//             >
//             </Search>
//             <Button type="submit">Buscar</Button>
//         </BarContainer>
//     )
// }
