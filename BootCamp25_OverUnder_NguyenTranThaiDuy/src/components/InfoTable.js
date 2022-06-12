import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { startgameHandler } from "../features/gameLogicSlice";

const InfoTable = () => {
  const dispatch = useDispatch();
  const { choice, playTime, result } = useSelector((state) => state.gameLogic)
  return (
    <Wrapper>
      <h1>Bạn chọn:{choice === 0 ? "Tài" : "Xỉu"}</h1>
      <h3>Số Bàn Thắng : {result} </h3>
      <h4>Tổng số bàn chơi : {playTime}</h4>
      <button onClick={() => { dispatch(startgameHandler()) }} className="btn btn-success">Play Game</button>
    </Wrapper>
  )
}
const Wrapper = styled.div`
 text-align: center;
  margin: 2rem auto;
  h1 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2.5rem;
  }

  h4 {
    font-size: 2rem;
  }

  button {
    background-color: #4caf50; /* Green */
    border: none;
    color: white;
    padding: 1.5rem 2rem;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 2rem;
  }
`

export default InfoTable