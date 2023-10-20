import { useState } from "react"
import { MainPageContainer, Title } from "./style";
import WeatherInfos from "../weatherPage";
import GraphPage from "../graphPage";
import SearchBar from "../searchBarPage";
import { useEffect } from "react";
import { getForecastInfo } from "../../services/api";
import dayjs from 'dayjs';

export default function MainPage(){
    const [weatherInfo, setWeatherInfo] = useState();
    const [city, setCity] = useState();
    const [forecastData, setForecastData] = useState();

    // useEffect(()=> {
    //     if(weatherInfo){
    //         getForecastInfo(weatherInfo?.name)
    //             .then((res) => {
    //                 if(res.data) {
    //                     const parsedData = res?.data.list.map(({ dt_txt, main }) => {
    //                         return {weekday: `${weekDays[(new Date(dt_txt)).getDay()]} (${dayjs(dt_txt).format("DD/MM")})`, temp: main?.temp}
    //                     })
    //                     setForecastData(parsedData);
    //                 }
    //             })
    //             .catch((err) => {
    //                 console.log(err);
    //             })
    //     }
    // }, weatherInfo)

    return (
        <MainPageContainer>
            <Title>Devo levar um casaquinho?</Title>
            <SearchBar
                setWeatherInfo={setWeatherInfo}
                setCity={setCity}
                setForecastData={setForecastData}
                city={city}
            ></SearchBar>
            <WeatherInfos weatherInfo={weatherInfo}></WeatherInfos>
            <GraphPage weatherControl={weatherInfo} forecastData={forecastData}></GraphPage>
        </MainPageContainer>
    )
}
