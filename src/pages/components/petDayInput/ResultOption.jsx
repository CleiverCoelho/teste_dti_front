import React from "react";
import styled from "styled-components";

export default function ResultOption ({ petshop }) {

    return (
    <Container>
        <OptionText isthebestoption={(petshop?.id ? true : false).toString()}>Sua melhor opção é</OptionText>
        <PetshopContainer isthebestoption={(petshop?.id ? true : false).toString()}>
            <h1>{petshop.name}</h1>
            <InfoContainer>
                <Info>
                    <h2>Seg à Sex</h2>
                    <p>grande porte <br></br> R$ {petshop.weekDayBigPrice}</p>
                    <p>pequeno porte <br></br> R$ {petshop.weekDaySmallPrice}</p>
                </Info>
                <Div></Div>
                <Info>
                    <h2>Sab e Dom</h2>
                    <p>grande porte <br></br> R$ {petshop.weekEndBigPrice}</p>
                    <p>pequeno porte <br></br> R$ {petshop.weekEndSmallPrice}</p>
                </Info>
            </InfoContainer>
            <Distance>apenas {petshop.distance}m de voce</Distance>
        </PetshopContainer>
        <TotalPrice isthebestoption={(petshop?.id ? true : false).toString()}>Total R$ {petshop?.totalPrice}</TotalPrice>
    </Container>
    )
}

export const TotalPrice = styled.div`
    font-weight: 500;
    font-size: 25px;
    margin-bottom: 100px;
    display: ${(props) => `${props.isthebestoption === "true" ? 'flex' : 'none'}`};
`

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const OptionText = styled.div`
    font-size: 25px;
    font-weight: 600;
    margin-top: 30px;
    width: 390px;
    text-align: center;
    display: ${(props) => `${props.isthebestoption === "true" ? 'flex' : 'none'}`};
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        width: 280px;

        h1 {
            font-size: 18px;
        }
    }   
`

const PetshopContainer = styled.div`
    width: 390px;
    height: 360px;
    display: ${(props) => `${props.isthebestoption === "true" ? 'flex' : 'none'}`};
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0px 10px;
    border: 10px solid grey;
    border-radius: 15px;
    margin-top: 40px;
    margin-bottom: 90px;
    
    h1{
        font-size: 25px;
        font-weight: 600;
        margin-top: 20px;
    }

    @media (max-width: 768px) {
        width: 280px;

        h1 {
            width: 280px;
            font-size: 18px;
        }
    }
`

const Div = styled.div`
    width: 1px;
    margin-top: 30px;
    border: .1px solid grey;
    height: 80%;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 20px;
`

const Distance = styled.div`
    width: 80%;
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