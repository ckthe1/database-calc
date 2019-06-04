import { takeLatest, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* postCalculation(action) {
    console.log('postBook-action.payload:', action.payload);
    try {
        yield axios.post('/book', action.payload);
        yield dispatch({ type: 'FETCH_BOOK' });
    } catch (error) {
        console.log('this was an error with the post-BOOK ');
    }
}

function* fetchCalculation() {
    console.log('fetchBook was hit');
    try {
        const bookResponse = yield axios.get('/book');
        yield dispatch({ type: 'GET_BOOK', payload: bookResponse.data })
        console.log('FETCH BOOK SAGAS', bookResponse.data);

    } catch (error) {
        console.log('saga Error with your fetchBook info');
    }
}

function* studentSaga() {
    yield takeLatest('FETCH_CALCULATION', fetchCalculation)
    yield takeLatest('ADD_CALCULATION', postCalculation);
}

export default calculationSaga;