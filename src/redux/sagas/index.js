import { all } from 'redux-saga/effects';

import calulationSaga from './calulationSaga';


// rootSaga is the primary saga.

// This is imported in index.js as rootSaga

export default function* rootSaga() {
    yield all([
        calulationSaga(),
    ]);
}