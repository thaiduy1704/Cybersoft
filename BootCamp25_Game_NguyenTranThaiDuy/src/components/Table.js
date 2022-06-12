import { useDispatch, useSelector } from 'react-redux'
import { startGame } from '../features/GameLogicSlice'

const Table = () => {

    const { result } = useSelector((store) => store.gameLogic)
    const { win, playTime } = result
    const dispatch = useDispatch()
    return (
        <div className="container text-center" >
            <h3 className='titleTable my-5'> I',m iron man,i love you 3000 !! </h3>
            <h3 className='contentTable my-5'> So ban thang : <span className='win'>{win}</span>  </h3>
            <h3 className='contentTable'> So ban choi :  <span className='win'>{playTime}</span></h3>
            <button className="btn btn-success" onClick={() => dispatch(startGame())}>Play game</button>
        </div>
    )
}

export default Table