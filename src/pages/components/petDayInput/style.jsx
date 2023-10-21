import styled from "styled-components"
import ReactDatePicker from "react-datepicker"

export const DatePicker = styled(ReactDatePicker)`
    margin-bottom: 15px;
    border-radius: 10px;
    border: 1px solid grey;
    width: 400px;
    height: 40px;
    padding: 10px;
    font-weight: 400;
    font-size: large;
    text-align: center;

    @media (max-width: 768px) {
        width: 250px;
      }
`

export const PetDayInputContainer = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const BodyInfos = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 768px) {
        width: 250px;
      }
`

export const Input = styled.input`
    margin-bottom: 15px;
    border-radius: 10px;
    border: 1px solid grey;
    width: 90%;
    height: 40px;
    padding: 10px;
    text-align: center;
    @media (max-width: 768px) {
        width: 250px;
      }
`

export const Button = styled.button`
    width: 400px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid grey;
    @media (max-width: 768px) {
        width: 250px;
      }
`