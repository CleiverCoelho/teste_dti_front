import styled from "styled-components"
import Petshop from "./Petshop"

export default function PetshopsPage () {
    return (
        <PetshopsContainer>
            <Petshop></Petshop>
            <Petshop></Petshop>
            <Petshop></Petshop>
            <Petshop></Petshop>
            <Petshop></Petshop>
        </PetshopsContainer>
    )
}

const PetshopsContainer = styled.div`
    width: 700px;
    height: auto;
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`