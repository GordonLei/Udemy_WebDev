import React from "react";
import Login from "./Login";

var isLoggedIn = false;

const currTime = new Date().getHours();
/*
function renderConditionally(){
  if (isLoggedIn === true){
    return <h1>Hello</h1>;
  } else{
    
  }
}
*/

function App() {
  return (
    <div className="container">

    
    {/*
    
      isLoggedIn ? 
      <h1> Hello </h1> : <Login />
    */
   //currTime > 12 ? <h1> Why are you still working?</h1> : null
      //render the RHS if the LHS is true
   currTime > 12 && <h1> Why are you still working?</h1>
    }

    
    
    </div>
  );
}

export default App;
