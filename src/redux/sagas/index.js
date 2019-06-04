import { all } from 'redux-saga/effects';

import calculationSaga from './calculationSaga';


// rootSaga is the primary saga.

// This is imported in index.js as rootSaga

export default function* rootSaga() {
    yield all([
        calculationSaga(),
    ]);
}