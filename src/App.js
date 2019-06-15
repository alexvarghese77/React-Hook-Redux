import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import './App.css';

function App() {
  const dispatch =useDispatch();
  const counter=useSelector(state=>state.counter)

  return (
    <div className="App">
      <header className="App-header">
        <h1>counter : {counter}</h1>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>Decremant</button>
      </header>
    </div>
  );
}

export default App;
