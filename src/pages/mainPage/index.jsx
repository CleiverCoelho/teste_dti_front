import { useState } from "react"
import { MainPageContainer, Title } from "./style";
import GraphPage from "../graphPage";
import SearchBar from "../searchBarPage";

export default function MainPage(){
    const [city, setCity] = useState();
    const [forecastData, setForecastData] = useState();

    return (
        <MainPageContainer>
            <Title>Devo levar um casaquinho?</Title>
            <SearchBar
                setCity={setCity}
                setForecastData={setForecastData}
                city={city}
            ></SearchBar>
            <GraphPage weatherControl={forecastData} forecastData={forecastData}></GraphPage>
        </MainPageContainer>
    )
}
