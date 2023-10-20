import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import styled from "styled-components";

export default function GraphPage({ weatherControl, forecastData }) {

    return (
        <GraphContainer display={!weatherControl}>
            <LineChart width={800} height={400} data={forecastData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="temp" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey={"weekday"} />
                <YAxis dataKey={"temp"}/>
                <Tooltip />
            </LineChart>
        </GraphContainer>
    )
}

const GraphContainer = styled.div`
    width: 890px;
    height: 800px;
    display: ${( props ) => !props.display ? "flex" : "none"};
    margin-top: 40px;
`
