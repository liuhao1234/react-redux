//action中负责定义actionName和actionCreator
export const change_list = "change_list";
export const change_inputValue = "change_inputValue";

export function initlist(){
    return dispatch=>{
        setTimeout(()=>{
            const list = [111,222,333,'kdjedje']
            dispatch(changelist(list))
        },1000)
    }
}

export function changelist(list){
    return{
        type:change_list,
        data:list
    }
}

export function changeInputValue(value){
    return {
        type:change_inputValue,
        data:value
    }
}