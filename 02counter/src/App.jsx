import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  //let counter = 15
  let [counter, setCounter] = useState(0);
  const addvalue = () =>{
    if (counter == 20){
    setCounter(counter = 20)
  }
  else{
    setCounter(counter+1)
  }
   // counter = counter+1;
   // setCounter(counter);
        
  }
  const removevalue = () =>{
    if (counter == 0){
    setCounter(counter = 0)
  }
  else{
    setCounter(counter-1)
  }
  }

  return (
    <>
    <h1>Nikhil dubey </h1>
    <h2>Counter Value: {counter}</h2>
    <button
    onClick={addvalue}>add Value_{counter}</button>
    <br />  
    <button 
    onClick={removevalue}>Remove Value {counter} </button>
    <h1>fotter {counter }</h1>
    </>
  )
}

export default App
