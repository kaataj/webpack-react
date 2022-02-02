import { extend } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './app.css';
import PopUp from './Popup';
import Collapse from './Collapse';
import Bulbul, {Foo} from './child';
import MyForm from './Form';


const Light = (props) => {
  return (
   <h2>light {props.toggle ? 'on': 'off'}</h2>
  );
}


class App extends React.Component{

    constructor(){
       super();
       console.log("hello shlomi constructor");
       
       this.state = {
         lights:false,
         isVisible:false,
         text:"fcuk",
         weather:"rain",
       }

       this.handleClick = this.handleClick.bind(this);
       this.handleVisibility = this.handleVisibility.bind(this);
       this.handleTest = this.handleTest.bind(this);

    }

   componentDidMount(){
      console.log("hello mount");   
    this.setState({weather:"sun"})
   }

   componentDidUpdate(){
      // update the compmnet 
      // change of this.state
      // change of props
      console.log("parent componet did update");
   }
// Constructur - render - component Did mount - render - Component did update (if we change the props./state)


   handleClick(){bnv 
      const switcher = this.state.lights ? false : true;
      console.log("katka",switcher);
      this.setState({lights:switcher});
   } 

   handleVisibility() {
      const switcher = this.state.isVisible ? false : true;
      this.setState({isVisible:switcher});
   }

   handleTest(){
      this.setState({text:'Baf'});
   }


   render(){
      
      console.log("parent componet render");
      const user = {
         name:"shlomi",
         surename:"junob=va"
      }

      const {text, weather} = this.state;

      return (
         <div>
        herllo {weather}
        <Bulbul />
        <MyForm />
       </div>
      )
   }
}


ReactDOM.render(<App />, document.getElementById('root'));