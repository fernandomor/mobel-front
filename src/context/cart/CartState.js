//definicion del estado y las funciones que alteran el estado

//el reducer es la funciones que se van a ejecutar dependiendo que le pases - osea ahi estan las funcones a ejecutar y el dispatch decide que funcion de todas ejecutar
import React, { useReducer } from 'react'
import CartContext from './CartContext'
import CartReducer from "./CartReducer"
import PRODUCT_SERVICE from '../../services/products'


export default function CartState(props) {
    const initialState ={
        products:[],
        kits:[],
        selectedProd: null
    }

    const [state, dispatch] = useReducer(CartReducer, initialState)

    const addProducts = async (id) =>{
        const responseDB = await PRODUCT_SERVICE.DETAIL_PRODUCT(id)
        dispatch({
            type:"ADD_PRODUCT",
            payload: responseDB.data
        })
    }

    const addKit = async (array)=>{
        dispatch({
            type: "ADD_KIT",
            payload: array.kitProducts
        })
    }

    const anfangAuto = async ()=>{
        dispatch({
            type: "TOTEN_AUTO"
        })
    }

    
    return (
        <>
            <CartContext.Provider value={{
                products: state.products,
                selectedProd: state.selectedProd,
                kits:state.kits,
                addProducts,
                addKit,
                anfangAuto
            }}>
                {props.children}
            </CartContext.Provider>
        </>
    )
}
