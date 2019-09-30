import { some_action } from '../actions/header-actions';

const initialState = {
    data:"aaa"
}

export default (state=initialState,action)=>{
    switch (action.type){
        case some_action:{
            return {
                ...state,
                data:action.data
            }
        }

        default:
            return state
    }
}