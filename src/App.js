import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component{

  state = {
    numberOne:'',
    numberTwo: '',
    operator:'',    
    result:'',

  }

  handleChange = (property) => (event) => {
    console.log(event.target.value)
    event.preventDefault();
    this.setState({
      ...this.state,
      [property]: event.target.value,
    });
  };// get first and second number value onChange

  handleClick = (property) => (event) =>{
    event.preventDefault();
    console.log(event.target.value)
    this.setState({
      ...this.state,
      [property]: event.target.value,
    });

}//get calculation value on click

  handleSubmit = (event) => {
    console.log('submit was hit, this.state:', this.state); 
    event.preventDefault();
  if( this.state.operator ==='+'){
   this.setState({
     result: Number(this.state.numberOne) + Number(this.state.numberTwo)
   }) 
    console.log('resultAdd', this.state.result)  
    
  } else if (this.state.operator === '-') {
    this.setState({
      result: Number(this.state.numberOne) - Number(this.state.numberTwo)
    }) 
    console.log('resultSub', this.state.result )
   
  } else if (this.state.operator === '*') {
    this.setState({
      result: Number(this.state.numberOne) * Number(this.state.numberTwo)
    }) 
    console.log('resultMul', this.state.result)
    
  } else if (this.state.operator === '/') {
    this.setState({
      result: Number(this.state.numberOne) / Number(this.state.numberTwo)
    }) 
    console.log('resultDiv', this.state.result )
   
    } console.log('resultTotal', this.state.result)

   this.props.dispatch({ type:'SET_CALCULATION', payload: this.state});
  
  
   this.setState ({
     numberOne: '',
     numberTwo: '',
     operator:'',
    //  result: this.state.result
   
   })
    console.log('this.state after calc:', this.state);
  }

  render(){
    console.log('{this.props}:', this.props );
    console.log('this.STATE', this.state);

    return (
      
     
        <div className="parent">
         
            <h1> Simple Calculator</h1>
          <form onSubmit={this.handleSubmit}>    
            <div>
              <input type="number" value={this.state.numberOne} onChange={this.handleChange('numberOne')} placeholder=' First Number'/>
            </div>
            <div>
            <button value="+" onClick={this.handleClick('operator')}>+</button>
            <button value="-" onClick={this.handleClick('operator')}>-</button>
            < button value = "*" onClick = { this.handleClick('operator')}>*</button>
            <button value="/" onClick={this.handleClick('operator')}>/</button>
           
              {/* <button value="7" onClick={this.handleClick}>7</button>
              <button value="8" onClick={this.handleClick}>8</button>
              <button value="9" onClick={this.handleClick}>9</button>
              <button value="+" onClick={this.handleClick}>+</button><br/>
              <button value="4" onClick={this.handleClick}>4</button>
              <button value="5" onClick={this.handleClick}>5</button>
              <button value="6" onClick={this.handleClick}>6</button>
              <button value="-" onClick={this.handleClick}>-</button><br/>
              <button value="1" onClick={this.handleClick}>1</button>
              <button value="2" onClick={this.handleClick}>2</button>
              <button value="3" onClick={this.handleClick}>3</button>
              <button value="*" onClick={this.handleClick}>*</button><br />
              <button value="0" onClick={this.handleClick}>0</button>
              <button value="." onClick={this.handleClick}>.</button> 
              <button value="=" onClick={this.handleClick}>=</button>         
              <button value="/" onClick={this.handleClick}>/</button> */}
            </div>
            <div>          
              <input type="number" value={this.state.numberTwo} onChange={this.handleChange('numberTwo')} placeholder=' Second Number' />
            </div>
            <input type="submit" value="="/> 
           </form>
              <div>
                <ul>
                  {this.state.numberOne}{this.state.operator}{this.state.numberTwo}={this.state.result}
                </ul>
              </div>
          </div>
        );
              
      }
  }
 

  // export default (App);
const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}
export default connect(mapReduxStateToProps)(App);