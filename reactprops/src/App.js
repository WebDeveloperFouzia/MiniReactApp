import React from 'react';
import "./App.css";
import NewComp from './Components/NewComp';
// import  Classprops  from './Classprops';
// import Functionprops from './Functionprops';

// class App extends React.Component {
//   render(){
//     return(
//       <div>
//            <Classprops name= "Leraner 1" place="place x"/> {/* classprops define in render method */ }
//            <Classprops name= "Leraner 2" place="place y"> <p>She is Fighter</p> <button>Click me</button> </Classprops>
//            <Classprops name= "Leraner 3"place="place z"/>
//            <Functionprops name="Learner 4" place ="place A"/>{" "} 
//       </div>
//     )
//   }
// }

//coding and see working of state

class App extends React.Component{
  styles = {
    fontStyle: "bold",
    color: "teal",
  };
  render(){
    return(
      <div className='App'>
          <h1 style={this.styles}>Welcome</h1>
          <NewComp/>
      </div>
    );
  }
}

export default App;
