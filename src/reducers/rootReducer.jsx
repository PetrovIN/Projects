import { combineReducers } from 'redux';
import getQuestions  from './questions';

const rootReducer = combineReducers({ getQuestions });

export default rootReducer;