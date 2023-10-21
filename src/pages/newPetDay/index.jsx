import styled from "styled-components"
import PetDayInput from "../components/petDayInput"

export default function NewPetDay() {
    return (
        <PetDayContainer>
            <h1>
                Qual é o melhor petshop?
            </h1>
            <PetDayInput>

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
`
