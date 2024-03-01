import {legacy_createStore as createStore} from "redux";
import actionType from "./Action"

const initialState={count:0};
const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case actionType.INCREMENT:
            return {count:state.count+1};
        case actionType.DECREMENT:    
            return {count:state.count-1};
        default:
            return state;
    }
}

const store=createStore(reducer);