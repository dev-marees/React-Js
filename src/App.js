import './App.css';
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import { ThemeContext } from "./Theme";

import React, { useContext, useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  const incrementValue = () => {
    setCount(count+1)
  }

  const decrementValue = () => {
    if (count <= 0) {
      return
    }
    setCount(count-1)
  }

  const resetValue = () => {
    setCount(0)
  }

  const {theme} = useContext(ThemeContext)
 
  return (
    <div className={`App${theme}`}>
      {/* <button onClick={incrementValue}>Increment</button>
      <button onClick={decrementValue}>Decrement</button>
      <button onClick={resetValue}>Reset</button> */}
      {/* <h1>{count}</h1> */}
        <Header/>
        <Landing />
    </div>
  );
}

export default App;
