import { change_list,change_inputValue } from '../actions/todolist-action';

const initialState = {
    inputValue:"",
    listData:[]
}
// reducer可以接收state，但是不能修改state
// 纯函数，给出固定的输入，会得到固定的输出，并且无副作用
export default function(state=initialState,action){
    switch (action.type){
        case change_list:{
            return {
                ...state,
                inputValue:"",
                listData:action.data
            }
        }

        case change_inputValue:{
            return {
                ...state,
                inputValue:action.data
            }
        }
        
        default:
            return state;
    }
}