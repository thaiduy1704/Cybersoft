import { images } from "../images/images"
import KeoBuaBao from "./KeoBuaBao"
import { useSelector } from "react-redux"

const PlayerComputer = () => {
    const { computerChoice } = useSelector((store) => store.gameLogic)

    return (
        <div >

            <img className="showItem speech-bubble speech-bubble-2" src={images[computerChoice]} alt="" />

            <img className="player mx-auto" src={images[4]} alt="Computer" />

            <div style={{ opacity: 0 }}>
                <KeoBuaBao />
            </div>
        </div>


    )
}

export default PlayerComputer