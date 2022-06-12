import styled from "styled-components"
import { ImageData } from "../images/images";
import { useSelector } from "react-redux";
const DiceContainer = () => {
    const { randomDice } = useSelector((state) => state.gameLogic)
    const { dice1, dice2, dice3 } = randomDice
    // console.log(randomDice);
    return (
        <Wrapper className="d-flex">
            <img src={ImageData[dice1]} alt="1" />
            <img src={ImageData[dice2]} alt="2" />
            <img src={ImageData[dice3]} alt="3" />

        </Wrapper>
    )
}
const Wrapper = styled.div`
    img{
        width: 7rem;
        margin: auto 1rem;
        border-radius: 5px;
    }
`;
export default DiceContainer