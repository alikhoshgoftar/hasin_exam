import {FETCH_POSTS,NEW_POST,INC} from "./../actions/types";

const initialState={
    items:[],
    item:{},
    inc:0
}

export default function(state=initialState,action){
    switch(action.type){
        case FETCH_POSTS:
        return{
            ...state,
            items:action.payload
        }
        
        case INC:
        return{
            ...state,
            inc:state.inc+1
        }

        case NEW_POST:
        return{
            ...state,
            item:action.payload
        }
        default:
        return state;
    }
}