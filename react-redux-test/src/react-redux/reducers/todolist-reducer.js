import { change_list,change_input_value } from '../actions/todolist-actions';
const initialState = {
    inputValue:"aaa",
    listData:[111,222,333]
}
export default (state=initialState,action)=>{
    switch (action.type){
        case change_list:{
            return{
                ...state,
                inputValue:"",
                listData:action.data
            }
        }

        case change_input_value:{
            return {
                ...state,
                inputValue:action.data
            }
        }

        default:
            return state
    }
}