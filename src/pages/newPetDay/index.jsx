import styled from "styled-components"
import PetDayInput from "../components/petDayInput"

export default function NewPetDay({ setBestPetshop }) {
    return (
        <PetDayContainer>
            <h1>
                Qual é o melhor petshop?
            </h1>
            <PetDayInput setBestPetshop={setBestPetshop}>

            </PetDayInput>
        </PetDayContainer>
    )
}

const PetDayContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        width: 280px;
        font-size: 30px;
        font-weight: 600;
        margin: 30px 0px;
    }
`
