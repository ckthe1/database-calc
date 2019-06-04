import { takeLatest, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* postCalculation(action) {
    console.log('postCalc:action.payload:', action.payload);
    try {
        yield axios.post('/calculation/', action.payload);
        yield dispatch({ type: 'FETCH_CALCULATION' });
    } catch (error) {
        console.log('saga error with the postCALCULATION ');
    }
}

function* fetchCalculation() {
    console.log('fetchCalc was hit');
    try {
        const response = yield axios.get('/calculation');
        yield dispatch({ type: 'GET_CALCULATION', payload: response.data })
        console.log('FETCH CALC SAGAS', response.data);

    } catch (error) {
        console.log('saga error with your fetchCalculation ');
    }
}

function* calculationSaga() {
    yield takeLatest('FETCH_CALCULATION', fetchCalculation)
    yield takeLatest('ADD_CALCULATION', postCalculation);
}

export default calculationSaga;