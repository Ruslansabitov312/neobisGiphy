import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { setCount } from './reducers/searchGiphyReducer'

function App() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.searchGiphyReducer.count)

  function onCountClick() {
    dispatch(setCount(5))
  }

  return (
    <div className='App'>
      <button onClick={() => onCountClick()}>Count</button>
      <div>{count}</div>
    </div>
  )
}

export default App
