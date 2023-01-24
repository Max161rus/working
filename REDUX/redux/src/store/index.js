import { createStore, combineReducers } from 'redux';
import { cashReducer } from './cashReduser';
import { customerReducer } from './customerReducers';
import { countReducer } from './counterReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers({
  cash: cashReducer,
  customer: customerReducer,
  countReducer
})

export const store = createStore(rootReducer, composeWithDevTools());