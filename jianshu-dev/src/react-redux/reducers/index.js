import { combineReducers } from 'redux';
import headerReducer from './header-reducer';

const allReducers = {
    headerReducer
}

const reducers = combineReducers(allReducers);

export default reducers;