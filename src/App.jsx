import './App.css';
// import Header from "./components/Header/Header";
// import Landing from "./components/Landing/Landing";
import { ThemeContext } from "./Theme";

import React, { useContext, useState, useRef, useEffect } from "react";

function App() {

  const countRef = useRef(0)
  const previousCountRef = useRef(null)
  const [tempCount, setTempCount] = useState(0)

  const incrementCount = () => {
    countRef.current += 1;
    console.log(`counter:: ${countRef.current}`);
    
  }

  const updateCount = (amount) => {
    setTempCount((currentCount)=> currentCount + amount )
  }

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

  useEffect(() => {
    previousCountRef.current = tempCount;
  }, [tempCount])
 
  return (
    <div className={`App${theme}`}>
        <button onClick={incrementValue}>Increment</button>
        <button onClick={decrementValue}>Decrement</button>
        <button onClick={incrementCount}>UseRef</button>
        <button onClick={resetValue}>Reset</button>
        <p>
          Current Count: {tempCount}
        </p>
        {
          previousCountRef.current !== null && (
            <p>
              Previous Count: {previousCountRef.current}
            </p>
          )
        }
        <button onClick={() => updateCount(1)}>+1</button>
        <button onClick={() => updateCount(5)}>+5</button>
        <h1>{count}</h1>
          {/* <Header/>
          <Landing /> */}
    </div>
  );
}

export default App;
