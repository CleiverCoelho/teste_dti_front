import { useState } from "react"
import { MainPageContainer, Title } from "./style";
import GraphPage from "../components/graph";
import SearchBar from "../components/searchBar";
import PetshopsPage from "../components/petshops";
import Footer from "../components/footer";

export default function MainPage(){
    const [city, setCity] = useState();
    const [forecastData, setForecastData] = useState();

    return (
        <MainPageContainer>
            <Title>
                Quer saber o melhor dia para levar seus pets? <br></br>
                Consulte a previsão do tempo
            </Title>
            <SearchBar
                setCity={setCity}
                setForecastData={setForecastData}
                city={city}
            ></SearchBar>
            <GraphPage weatherControl={forecastData} forecastData={forecastData}></GraphPage>
            <Title>
                Consulte os Petshops cadastrados no Sistema
            </Title>
            <PetshopsPage></PetshopsPage>
        </MainPageContainer>
    )
}
