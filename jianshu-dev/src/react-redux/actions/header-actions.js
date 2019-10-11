import util from '../../util';
export const search_focus = "search_focus";
export const search_blur = "search_blur";
export const change_search_list = "change_search_list";

export function searchFocus(data){
    return {
        type:search_focus,
        data
    }
}

export function searchBlur(data){
    return {
        type:search_blur,
        data
    }
}

export function changeSearchList(data){
    return {
        type:change_search_list,
        data
    }
}

export function getSearchList(){
    return dispatch => {
        util.axios({
            url: '/api/blog/list',
            method: 'get'
        }).then((res)=>{
            //console.log(res)
            dispatch(changeSearchList(res))
        })
    }
}