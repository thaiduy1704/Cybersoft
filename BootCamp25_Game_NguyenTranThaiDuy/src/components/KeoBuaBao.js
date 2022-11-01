import { useDispatch, useSelector } from 'react-redux'

import { makeChoice } from '../features/GameLogicSlice'
import { images } from '../images/images'



const temp = [0, 1, 2]

const KeoBuaBao = () => {
    const { userChoice } = useSelector(store => store.gameLogic)
    const dispatch = useDispatch()

    return (
        <div className='row' >
            {temp.map((_, index) => {
                return (<div key={index} className='col-md-4' onClick={() => dispatch(makeChoice(index))}>
                    <img className={`item ${userChoice === index ? "active" : ""}`} src={images[index]} alt= "name"/>
                </div>)
            }
            )}
        </div>
    )
}

export default KeoBuaBao