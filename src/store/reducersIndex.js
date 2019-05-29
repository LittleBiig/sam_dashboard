import { combineReducers } from 'redux';

import reducerExample from './reducerExample';

const globalReducer = combineReducers({
    reducerExample : reducerExample
});

export default globalReducer;