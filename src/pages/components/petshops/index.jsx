import styled from "styled-components"
import Petshop from "./Petshop"
import usePetshop from "../../../hooks/api/usePetshops";

export default function PetshopsPage () {
    const { data } = usePetshop();
    console.log(data);
    return (
        <PetshopsContainer>
            {data?.map((petshop) => {
                return (
                    <Petshop
                        bigSizeWeekPrice={petshop}
                    ></Petshop>
                )
            })}
        </PetshopsContainer>
    )
}

const PetshopsContainer = styled.div`
    width: 800px;
    height: auto;
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`