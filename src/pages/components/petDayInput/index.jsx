import React, { useContext, useEffect } from "react"
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import * as petApi from "../../../services/petshopsApi"
import BestPetshopContext from "../../../contexts/bestPetshopContext";
import ResultOption from "./ResultOption";
import { ToastContainer, toast } from "react-toastify";
import { BodyInfos, Button, DatePicker, Input, PetDayInputContainer } from "./style";
import 'react-toastify/dist/ReactToastify.css';

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
        .catch((err) => toast(err.response.data.error));
    }

    function handleChangeForm (event){
        setForm({ ...form, [event.target.name]: event.target.value})
    }
    return (
        <PetDayInputContainer>
            <ToastContainer></ToastContainer>
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
                        type="number"
                        name="bigSizes"
                        value={form.bigSizes}
                        onChange={event => handleChangeForm(event)}
                        required
                    ></Input>
                    <Input
                        placeholder="Quantos Pets de pequeno porte?"
                        type="number"
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
