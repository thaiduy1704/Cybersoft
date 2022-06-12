import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux";
import { makeChoice } from "../features/gameLogicSlice";
const BoxChoice = ({ choice: choiceFlag }) => {
    const dispatch = useDispatch()
    const { choice } = useSelector((state) => state.gameLogic)
    return (
        <Wrapper >
            <div
                onClick={() => { dispatch(makeChoice(choiceFlag)) }}
                className={`${choice === choiceFlag ? "active" : ""}`}
            >
                <h3 >{choiceFlag === 0 ? "Tài" : "Xỉu"}</h3>
            </div>


        </Wrapper>
    )
}
const Wrapper = styled.div`
    div{
        cursor: pointer;
        background-color: blue;
        text-align: center;
        width: 7rem;
        height: 7rem;
        line-height: 6.5rem;
        border-radius: 5px;
        border: 10px solid transparent;
    }
    h3 {
    font-size: 4rem;
    color: white;
    text-align: center;
    }
    .active {
    border: 10px solid green;
    }
`;

export default BoxChoice