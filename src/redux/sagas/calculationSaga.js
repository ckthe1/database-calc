import { takeLatest, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* postCalculation(action) {
    console.log('postCalc:action.payload:', action.payload);
    try {
        yield axios.post('/calculation', action.payload);
        yield dispatch({ type: 'FETCH_CALCULATION' });
    } catch (error) {
        console.log('this was an error with the post-CALCULATION ');
    }
}

function* fetchCalculation() {
    console.log('fetchCalc was hit');
    try {
        const response = yield axios.get('/calculation');
        yield dispatch({ type: 'GET_CALCULATION', payload: response.data })
        console.log('FETCH CALC SAGAS', response.data);

    } catch (error) {
        console.log('saga Error with your fetchCalculation info');
    }
}

function* calculationSaga() {
    yield takeLatest('FETCH_CALCULATION', fetchCalculation)
    yield takeLatest('ADD_CALCULATION', postCalculation);
}

export default calculationSaga;