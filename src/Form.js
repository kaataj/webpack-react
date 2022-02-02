import React, {useEffect, useState} from "react";
import Collapse from "./Collapse";

function MyForm({name}){

  
  const [inputs, setInputs] = useState({});



  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => {
//      console.log(values)
      return ({...values, [name]: value})
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);

    const rawResponse = fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(inputs)
  });


 
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Address:
      <input 
        type="text" 
        name="address" 
        value={inputs.address || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}



 export default MyForm;
