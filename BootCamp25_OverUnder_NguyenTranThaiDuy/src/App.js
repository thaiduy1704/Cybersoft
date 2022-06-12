import styled from "styled-components"
import backgroundImage from "./images/bgGame.png"


import BoxChoice from "./components/BoxChoice";
import DiceContainer from "./components/DiceContainer";
import InfoTable from "./components/InfoTable";

function App() {
  return (
    <Wrapper className="container-fluid">
      <div className="">
        <h1 className="title">Game Đổ xúc xắc</h1>
        <div className="container-center">
          <BoxChoice choice={0} />
          <DiceContainer />
          <BoxChoice choice={1} />
        </div>
        <InfoTable />
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.div`
  width : 100vw;
  height : 100vh;
  background: url(${backgroundImage});
  text-align: center;
  padding : 2rem;

  .container-center {
    display: flex;
    justify-content: space-around;
  }

`;
export default App;
