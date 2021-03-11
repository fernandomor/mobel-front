/* eslint-disable import/no-anonymous-default-export */
import { ADD_PRODUCT,ADD_KIT,TOTEN_AUTO } from "../types";

export default (state, action) => {

    const {payload,type}= action
    switch(type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products:[payload,...state.products]
            }   
        case ADD_KIT:
            return{
                ...state,
                products:[...payload.map(e=>{
                    return e
                }),...state.products]
            } 
            case TOTEN_AUTO:
            console.log("Entra a la funcion")
            return{
                products:[],
                kits:[],
                selectedProd: null
            }        
       default:
            return state
    }

}