/* eslint-disable import/no-anonymous-default-export */
import { ADD_PRODUCT } from "../types";

export default (state, action) => {

    const {payload,type}= action
    switch(type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products:[payload,...state.products]
            }            
       default:
            return state
    }

}