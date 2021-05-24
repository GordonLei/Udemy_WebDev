import React, { useState } from "react";

function App() {

  //const [fName, setFName] = useState("");
  //const [lName, setLName] = useState("");

  const [fullName, setFullName] = useState({
    fName = "",
    lName = ""
  });

  function handleChange(event){
    //const newValue = event.target.value;
    //const inputName = event.target.name;

    const {value, name} = event.target

    setFullName((prevValue) => {
      
      if(name === "fName"){
        setFullName({fName : value, lName: prevValue.lName});
      }
      else if(name === "lName"){
        setFullName({fName: prevValue.fName, lName : value});
      }
    });

    /*
    if(inputName === "fName"){
      setFullName({fName : newValue})
    }
    else if(inputName === "lName"){
      setFullName({lName : newValue})
    }
    */
  }

  function updateFName(event){
    const firstName = event.target.value; 
    setFName(firstName);
  }

  //slower method 

  /*
  function updateLName(event){
    const lastName = event.target.value 
    setFName(lastName)
  }
  */


  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName} </h1>
      <form>
        <input name="fName" 
          onChange = {handleChange} 
          placeholder="First Name" 
          value = {fullName.fName} />
        <input name="lName" 
          onChange = {handleChange} 
          placeholder="Last Name" 
          value = {fullName.lName} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
