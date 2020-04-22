import * as JSON_DATA from '../../jsonData.json'
import ACTION_TYPES from './json_data.action_types';
import { ManipulateItems, Remove_Item, incrementQuantity,DecrementQuantity, deleteUser } from './data.utils';
const INTIAL_STATE={
    JSON_DATA:JSON_DATA.default
}
const jsonDataReducer = (state=INTIAL_STATE,action)=>{
    switch(action.type){
        case ACTION_TYPES.INCREMENT_QUANTITY:
            return {JSON_DATA:incrementQuantity(action.payload,state.JSON_DATA)}
        case ACTION_TYPES.DECREMENT_QUANTITY:
                return {JSON_DATA:DecrementQuantity(action.payload,state.JSON_DATA)}
        case ACTION_TYPES.UPDATE_ITEM:
                return {JSON_DATA:ManipulateItems(action.payload,state.JSON_DATA)};
        case ACTION_TYPES.REMOVE_ITEM:
                return {JSON_DATA:Remove_Item(action.payload,state.JSON_DATA)}
        // case ACTION_TYPES.INCREMENT_PAGE:
        //         return{...state,page:state.page+1}
        // case ACTION_TYPES.DECREMENT_PAGE:
        //         return{...state,page:state.page>0?state.page-1:0}
        case ACTION_TYPES.ADD_USER:
                return{...state,JSON_DATA:[...state.JSON_DATA,action.payload]}
        case ACTION_TYPES.DELETE_USER:
                return {...state,JSON_DATA:[...deleteUser(state.JSON_DATA,action.payload)]}
        default:
            return state;
    }
}
export default jsonDataReducer