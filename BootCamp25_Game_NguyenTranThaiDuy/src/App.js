import Player from "./components/Player";
import PlayerComputer from "./components/PlayerComputer";
import Table from "./components/Table";

function App() {
  return (
    <div className="app">
      <div className="d-flex jutify-content-around container align-items-center">

        <Player />
        <Table />
        <PlayerComputer />
      </div>

    </div>
  )
}
export default App;
