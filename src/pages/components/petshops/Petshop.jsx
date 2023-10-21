import styled from "styled-components";

export default function Petshop () {
    return (
        <PetshopContainer>
            <h1>Primeiro Petshop</h1>
            <InfoContainer>
                <Info>
                    <h2>Seg à Sex</h2>
                    <p>grande porte R$ 20,00</p>
                    <p>pequeno porte R$ 20,00</p>
                </Info>
                <Div></Div>
                <Info>
                    <h2>Sab e Dom</h2>
                    <p>grande porte R$ 20,00</p>
                    <p>pequeno porte R$ 20,00</p>
                </Info>
            </InfoContainer>
            <Distance>apenas 2000m de voce</Distance>
        </PetshopContainer>
    )
}

const PetshopContainer = styled.div`
    width: 360px;
    height: 360px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0px 10px;
    border: 1px solid grey;
    border-radius: 15px;
    margin-bottom: 40px;
    
    h1{
        font-size: 25px;
        font-weight: 600;
        margin-top: 20px;
    }
`

const Div = styled.div`
    width: 1px;
    margin-top: 30px;
    border: .1px solid grey;
    height: 80%;
`

const Distance = styled.div`
    width: 90%;
    height: 20px;
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 10px;
`

const InfoContainer = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding: 0px 10px;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 45%;
    height: 100%;

    h2 {
        font-size: 20px;
        font-weight: 500;
        margin-bottom: -10px;
    }

    p {
        width: 90%;
    }
`