
import { images } from "../images/images"
import KeoBuaBao from "./KeoBuaBao"
import { useDispatch, useSelector } from "react-redux"
const Player = () => {
    const { userChoice } = useSelector((store) => store.gameLogic)

    return (
        <div className="">

            <img className="showItem speech-bubble  speech-bubble-1" src={images[userChoice]} alt="" />


            <img className="player mx-auto my-5" src={images[3]} alt="user" />
            <KeoBuaBao />
        </div>


    )
}

export default Player