import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import './App.css';


let total = '';
class App extends Component {

  state = {
    numberOne: '',
    numberTwo: '',
    operator: '',
    result: '',
    equalSign: '',
  }
  
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_CALCULATION' });
  }

  handleChange = (property) => (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      [property]: event.target.value,
    });
  };// get first and second number value onChange

  handleClick = (property) => (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      [property]: event.target.value,
    });
  }//get calculation value on click

  handleSubmit = (event) => {
  event.preventDefault();
 
  if (this.state.operator === '+') {
    total = (parseInt(this.state.numberOne) + parseInt(this.state.numberTwo)).toString()
    console.log('total', total);  
    
      this.setState({
        result: total
      })
                             
      console.log('this.resultAdd', this.state.result)

    } else if (this.state.operator === '-') {
      this.setState({
        result: parseInt(this.state.numberOne) - parseInt(this.state.numberTwo)
      })
      console.log('resultSub', this.state.result)

    } else if (this.state.operator === '*') {
      this.setState({
        result: parseInt(this.state.numberOne) * parseInt(this.state.numberTwo)
      })
      console.log('resultMul', this.state.result)

    } else if (this.state.operator === '/') {
      this.setState({
        result: parseInt(this.state.numberOne) / parseInt(this.state.numberTwo)
      })
      console.log('resultDiv', this.state.result)

    } console.log('resultTotal', this.state.result)

    // let newResult = this.state.result;

    // this.setState({
    //   result:newResult
    // })

    this.props.dispatch({ type: 'ADD_CALCULATION', payload: this.state });

    // this.setState({
    //   ...this.state,
    //   // numberOne: '',
    //   // numberTwo: '',
    //   // operator: '',
    //   result: this.state.result,

    // })
    
  }

  render() {

    console.log('this is the reducer', this.props.calcReducer);
    return (
      <div className="parent">

        <h1> Simple Calculator</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="number" value={this.state.numberOne} onChange={this.handleChange('numberOne')} placeholder=' First Number' />
          </div>
          <div>
            <button value="+" onClick={this.handleClick('operator')}>+</button>
            <button value="-" onClick={this.handleClick('operator')}>-</button>
            <button value="*" onClick={this.handleClick('operator')}>*</button>
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
          <div>
            <input type="submit" value="=" size="222"
             className="equal"/>
          </div>
        </form>
        <div>
          <ul>
            {this.props.calcReducer.map((calc)=>(
                    <ul key = {calc.id}>
                      <li>{calc.numberOne} {calc.operator} {calc.numberTwo} = {calc.result}</li>
                    </ul>
                  )
                )} 
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