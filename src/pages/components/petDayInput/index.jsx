import React, { useContext } from "react"
import styled from "styled-components"
import ReactDatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import * as petApi from "../../../services/petshopsApi"
import BestPetshopContext from "../../../contexts/bestPetshopContext";

export default function PetDayInput() {
    const [form, setForm] = React.useState({ bigSizes: "", smallSizes: "" });
    const [date, setDate] = React.useState();
    const { setBestPetshop } = useContext(BestPetshopContext);


    function handleSubmit(e){
        e.preventDefault()
        const body = {
            bigSizesCount: parseInt(form.bigSizes), 
            smallSizesCount: parseInt(form.smallSizes),
            date: dayjs(new Date(date)).format("DD/MM/YYYY")
        };

        petApi.check(body).then((res) => setBestPetshop({...res, searchInfo: body})).catch((err) => toast(err));
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
    width: 500px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Input = styled.input`
    margin-bottom: 15px;
    border-radius: 10px;
    border: 1px solid grey;
    width: 400px;
    height: 40px;
    padding: 10px;
    text-align: center;
`

const Button = styled.button`
    width: 400px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid grey;`
