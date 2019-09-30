export const some_action = "some_action";

export function someAction(data){
    return {
        type:some_action,
        data
    }
}