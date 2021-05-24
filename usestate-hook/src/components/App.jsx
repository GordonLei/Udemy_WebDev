import React, {useState} from "react";



function App() {
  const [count, setCount] = useState(0);



  function increase(){
    setCount(count + 1);
  }
  function decrease(){
    setCount(count - 1);
  }
  return(
  <div className="container">
    <h1>{state[0]}</h1>
    <button onClick={decrease}>-</button>
    <button onClick={increase}>+</button>
    
  </div>,
  document.getElementById("root")
);
}

export default App;
