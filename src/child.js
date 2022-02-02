
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './app.css';
import Popup from './Popup';

export const Foo = ()=>{
   return null;
}

class Bulbul extends React.Component{

    constructor(){
       super();
       console.log("hello child constructor");
       
       this.state = {
         pip:false,
         day:'Saturday',
         popup:false
       }

       this.handleClick = this.handleClick.bind(this);

    }

   componentDidMount(){
      console.log("child mount");   
    //this.setState({weather:"sun"})
   }

   componentDidUpdate(){
      // update the compmnet 
      // change of this.state
      // change of props
      console.log("child componet did update");
   }
// Constructur - render - component Did mount - render - Component did update (if we change the props./state)

   handleClick () {
      this.setState({day:"Sunday", popup:true});

   } 

  


   render(){
      
      console.log("child componet render");
      const user = {
         name:"shlomi",
         surename:"junob=va"
      }

      const {pipi, day, popup} = this.state;
      

      return (
         <div>
        child {pipi}
        <button onClick={this.handleClick}>Button</button> 
<h1>{day}</h1>
 {popup ?  <Popup /> : null}
       </div>
      )
   }
}

export default Bulbul;


