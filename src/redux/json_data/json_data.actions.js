import ACTION_TYPES from "./json_data.action_types";

export const INCREMENT_QUANTITY=(item)=>({
    type:ACTION_TYPES.INCREMENT_QUANTITY,
    payload:item  
})
export const DECREMENT_QUANTITY=(item)=>({
    type:ACTION_TYPES.DECREMENT_QUANTITY,
    payload:item  
})
export const changeItem=(item)=>({
    type:ACTION_TYPES.UPDATE_ITEM,
    payload:item
})
export const  REMOVE_ITEM=(item)=>({
    type:ACTION_TYPES.REMOVE_ITEM,
    payload:item
})
export const INCREMENT_PAGE=()=>({
    type:ACTION_TYPES.INCREMENT_PAGE
})

export const DECREMENT_PAGE=()=>({
    type:ACTION_TYPES.DECREMENT_PAGE
})
export const ADD_USER=(user)=>({
    type:ACTION_TYPES.ADD_USER,
    payload:user
})
export const DELETE_USER=(user)=>({
    type:ACTION_TYPES.DELETE_USER,
    payload:user
})