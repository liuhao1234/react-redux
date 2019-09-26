import { combineReducers } from 'redux';
import todolistReducer from './todolist-reducer';

const allReducersData = {
    todolist:todolistReducer
}

const allReducers = combineReducers(allReducersData);

export default allReducers;