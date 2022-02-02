import React, {useState} from "react";
import PopUp from './Popup';

const Collapse = (props) => {
    //      variable , function 
    ///  tohold the value , function to modify
    // We use React Hook - useState to add a state to a functional component. We set the default value to true
    // and we name the state variable name isShort and the function name to set the state is setIsShort
    // To set isShort state using setIsShort(false)
    const [ isShort , setIsShort ] = useState(true);
   
    const stringLength = 20; 
    const text =  isShort ?  props.text.slice(0, stringLength) : props.text;
    const handleClick = ()=> {
      setIsShort(!isShort);
    } 

    return (
      <div id="collapse">
        <p>{text}</p>
        <button onClick={handleClick} >read more</button>
      </div>
    );
   }

export default Collapse 

