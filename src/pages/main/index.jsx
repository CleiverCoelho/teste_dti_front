import { useEffect } from "react"
import { MainPageContainer, Title } from "./style";
import PetshopsPage from "../components/petshops";

export default function MainPage({ data }){

    useEffect(() => {
        if(data) console.log(data);
      }, []);

    return (
        <MainPageContainer>
            <Title>
                Consulte os Petshops cadastrados no Sistema
            </Title>
            <PetshopsPage></PetshopsPage>
        </MainPageContainer>
    )
}
