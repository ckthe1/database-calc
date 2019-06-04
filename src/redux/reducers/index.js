import { combineReducers } from 'redux';
import calcReducer from './calcReducer';



// This is imported in index.js as rootSaga
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({

    calcReducer,// value of numberOne, numberTwo, operator, result

});

export default rootReducer;