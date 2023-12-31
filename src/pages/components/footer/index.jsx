import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <FooterContainer>
            {/* New Feature to come */}
            {/* <Option to="newpetshop">Novo Petshop</Option> */}
            <Option to="/">Home</Option>
            <Option to="/newpetday">Novo PetDay</Option>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    margin-top: 80px;
    background-color: black;
    width: 100%;
    height: 65px;
    position: fixed;
    bottom: 0px;
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 49px;
    color: white;
    left: 0px;
    z-index: 2;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const Option = styled(Link)`
    width: 150px;
    height: 50px;
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 49px;
    color: white;
    z-index: 2;
    text-decoration: none;
`

