import React from "react"
import styled from "styled-components"
import ReactDatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

export default function PetDayInput() {
    const [form, setForm] = React.useState({ date: "", bigSizes: "", smallSizes: "" })
    const [date, setDate] = React.useState(new Date())

    function handleSubmit(e){
        e.preventDefault()
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
`

const Button = styled.button`
    width: 400px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid grey;`
