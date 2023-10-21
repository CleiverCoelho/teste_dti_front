import styled from "styled-components";

export default function Petshop () {
    return (
        <PetshopContainer>
            <h1>Primeiro Petshop</h1>
            <InfoContainer>
                <Info>
                    <h2>Seg à Sex</h2>
                    <p>grande porte: R$ 20,00</p>
                    <p>grande porte: R$ 20,00</p>
                </Info>
                <Info>
                    <h2>Sab e Dom</h2>
                    <p>grande porte: R$ 20,00</p>
                    <p>grande porte: R$ 20,00</p>
                </Info>
            </InfoContainer>
        </PetshopContainer>
    )
}

const PetshopContainer = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px 10px;
    border: 1px solid grey;
    border-radius: 15px;
    box-sizing: border-box;
    margin-bottom: 40px;
    
    h1{
        font-size: 25px;
        font-weight: 600;
    }
`

const InfoContainer = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 40%;
    height: 100%;

    h2 {
        font-size: 20px;
        font-weight: 500;
    }
`