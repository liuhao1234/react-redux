import { search_focus,search_blur,change_search_list } from '../actions/header-actions';
import { fromJS } from 'immutable';

const initialState = fromJS({
    focused:false,
    searchlist:[]
})

export default (state=initialState,action)=>{
    switch (action.type){
        case search_focus:{
            return state.set("focused",true)
        }

        case search_blur:{
            return state.set("focused",false)
        }

        case change_search_list:{
            return state.set("searchlist",action.data)
        }

        default:
            return state
    }
}