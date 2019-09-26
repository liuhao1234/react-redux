import { combineReducers } from 'redux';
import todolistReducer from './todolist-reducer';

let allReducersData = {
    todolist:todolistReducer
}

let allReducers = combineReducers(allReducersData);

export default allReducers;