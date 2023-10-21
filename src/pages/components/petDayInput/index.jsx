import React, { useContext, useEffect } from "react"
import styled from "styled-components"
import ReactDatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import * as petApi from "../../../services/petshopsApi"
import BestPetshopContext from "../../../contexts/bestPetshopContext";
import ResultOption from "./ResultOption";
import { toast } from "react-toastify";

export default function PetDayInput() {
    const [form, setForm] = React.useState({ bigSizes: "", smallSizes: "" });
    const [date, setDate] = React.useState();
    const [petshopResult, setPetshopResult] = React.useState({});
    const { bestPetshop, setBestPetshop } = useContext(BestPetshopContext);

    useEffect(() => {}, [bestPetshop]);

    function handleSubmit(e){
        e.preventDefault()
        const body = {
            bigSizesCount: parseInt(form.bigSizes), 
            smallSizesCount: parseInt(form.smallSizes),
            date: dayjs(new Date(date)).format("DD/MM/YYYY")
        };

        petApi.check(body).then((res) => {
            setBestPetshop({...res, searchInfo: body});
            setPetshopResult(...res);
        })
        .catch((err) => toast(err));
    }

    function handleChangeForm (event){
        setForm({ ...form, [event.target.name]: event.target.value})
    }
    return (
        <PetDayInputContainer>
            <div>
                <BodyInfos onSubmit={handleSubmit}>
                    <DatePicker 
                        placeholderText="Selecione uma data"
                        selected={date}
                        onChange={(date) => setDate(date)}
                        required
                    />                    
                    <Input
                        placeholder="Quantos Pets de grande porte?"
                        type="text"
                        name="bigSizes"
                        value={form.bigSizes}
                        onChange={event => handleChangeForm(event)}
                        required
                    ></Input>
                    <Input
                        placeholder="Quantos Pets de pequeno porte?"
                        type="text"
                        name="smallSizes"
                        value={form.smallSizes}
                        onChange={event => handleChangeForm(event)}
                        required
                    ></Input>
                    <Button>Buscar melhor opção</Button>
                </BodyInfos>
            </div>
            <ResultOption petshop={bestPetshop}></ResultOption>
        </PetDayInputContainer>
    )
}

const DatePicker = styled(ReactDatePicker)`
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

const PetDayInputContainer = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const BodyInfos = styled.form`
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

const Input = styled.input`
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

const Button = styled.button`
    width: 400px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid grey;
    @media (max-width: 768px) {
        width: 250px;
      }
`
