import React, {useEffect, useState} from "react";
import Collapse from "./Collapse";

const Popup = (props) => {
  const { message,handleClick } = props;
  const [ facts , setFacts ] = useState([]);
   //componentDidMount, componentDidUpdate, and componentWillUnmount combined.
  //Does useEffect run after every render? Yes! By default, it runs both after the first render and after every update
  
  const getUser = async () =>{
    const { data }  = await fetch("https://catfact.ninja/facts").then(r=>r.json());
    
    if(data){
      return data;
    }
  }


/**
 * useEffect is 
 * componentDidMount 
 * componentDidUpdate & 
 * ComponentWillUnmount
 * 
 * to have only dimount 
 */
  //running as componentDidMount ,[]
  useEffect( async () => {
    console.log("useEffect mount")
    //
    //const data = [{fact:"katak"}]
   const data = await getUser();
   setFacts(data);
  },[]);
//this will run as componet did update no second argumnet 
  useEffect( async () => {
    console.log("useEffect update")
  });
  // this will run only if message change
  useEffect( async () => {
    console.log("useEffect watch prop")
  },[message]);

console.log('Render Pop up ',message)
  return (
    <div id="popup">
      <h5>{message}</h5>
      <button onClick={handleClick}>Hide</button> 
      <ul>
      {facts.map((item) => { return <li key={index}>{item.fact}</li>})}
      </ul>
    </div>
  );
 }

 export default Popup;
