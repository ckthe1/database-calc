import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import * as math from "mathjs";



class App extends Component {

  state = {
    input:'',
    result: '',
    equalSign: '',
  }
  
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_CALCULATION' });
  }

  handleClick = (val) => {
    this.setState({ input: this.state.input + val.target.value });
    console.log('input:',this.state.input);
    console.log('event.target.value', val.target.value);
    
  };
  handleEvaluate = (event) =>{
   
    this.setState({ 
      result: math.evaluate(this.state.input),
      equalSign: event.target.value
    }, () => {
      this.SagaPost()
    })  
  }// calculation is done here , then send to database


  SagaPost = () =>{
    this.props.dispatch({ type: 'ADD_CALCULATION', payload: this.state });
  }//post to sagas

handleClear = () => {
 this.setState({ input: '', result: '', equalSign:'' })
}// clear inputs


  render() {

    let CalcList = null;
    CalcList = this.props.calcReducer.map((data, i) => {
      return (
        <div>
          <li key={i} > {data.input} = {data.result}</li>
          <br />
        </div>
      )
    })

    console.log('calc.Reducer:', this.props.calcReducer);
    return (
      <div className="parent">

        <h1> Simple Calculator</h1>
        <div>
          {this.state.input} {this.state.equalSign} {this.state.result}
        </div>
        <div className="calcDisplay">
    
            <button value="7" onClick={this.handleClick}>7</button>
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
            <button value="=" onClick={this.handleEvaluate}>=</button>         
            <button value="/" onClick={this.handleClick}>/</button> 
          </div>
          <div >
          <button className="clearButton" onClick={this.handleClear}>  Clear  </button>
          </div>
    
        <div>
          <ul>

            {CalcList}
            {/* {this.props.calcReducer.map((calc)=>(
                    <ul key = {calc.id}>
                      <li>{calc.input} = {calc.result}</li>
                    </ul>
                  )
                )}  */}
          </ul>
        </div>
      </div>
    );
  } 
}

const mapReduxStateToProps = reduxState => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(App);