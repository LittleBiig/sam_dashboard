import { combineReducers } from 'redux';

import robotsReducer from './robots/robots-reducer';
import apartmentsReducer from './apartments/apartments-reducer';

const globalReducer = combineReducers({
    robotsReducer : robotsReducer,
    apartmentsReducer : apartmentsReducer
});

export default globalReducer;