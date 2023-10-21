import styled from "styled-components"
import Petshop from "./Petshop"
import usePetshop from "../../../hooks/api/usePetshops";
import { useEffect } from "react";

export default function PetshopsPage () {
    const { data } = usePetshop();

    useEffect(() => {}, [data]);

    return (
        <PetshopsContainer>
            {data?.map((petshop) => {
                return (
                    <Petshop
                        key={petshop.id}
                        petshop={petshop}
                    ></Petshop>
                )
            })}
        </PetshopsContainer>
    )
}

const PetshopsContainer = styled.div`
    width: 900px;
    height: auto;
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        width: 400px;
      }
`