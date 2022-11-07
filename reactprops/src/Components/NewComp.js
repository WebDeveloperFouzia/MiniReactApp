import React from 'react';
import bellicon from './bell-icon.jpg';
import crossbell from './cross-bell.jpg';

class NewComp extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            message:"Subcribe to simplilearn",
            sub: "Subcribe",
            imageURL: crossbell
        };
    }
    styles = {
        fontStyle: "italic",
        color: "purple",
      };
      Buttonchange=()=>{
          this.setState({
            message:"Hit the bell icon to never miss an update ",
            sub:"Subcribed"
          });
      }
      imageChange=()=>{
        this.setState({
          imageURL:bellicon,
          message:"Thank You! Happy Learning and keep fighting!"
        });
      }
  render(){
    return(
      <div className='App'>
          <h3 style={this.styles}>{this.state.message}</h3>
          <button onClick={this.Buttonchange}>{this.state.sub}</button>
          <p/>
          <img style={{width:"45px",height:"45px"}}
          src={this.state.imageURL} onClick={this.imageChange} alt=""/>
      </div>
    );
  }
}

export default NewComp;