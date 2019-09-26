export const change_list = "change_list";
export const change_input_value = "change_input_value";

export function changeList(data){
    return {
        type:change_list,
        data
    }
}

export function changeInputValue(data){
    return {
        type:change_input_value,
        data
    }
}