import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../context/cart/CartContext'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/auth/AuthContext'
import PRODUCT_SERVICE from '../../services/products'


export default function Cartshop() {

    
    const authContext = useContext(AuthContext)
    const {usuario , usuarioAutenticado} = authContext

    useEffect(() => {
        usuarioAutenticado()
    }, [])

    const context = useContext(CartContext)
    const { products,anfangAuto } = context
    const [suma, setSuma] = useState(0)
   

    useEffect(() => {
        if (products.length > 0) {
            const sumatoria = products.reduce((a, b) => {
                return a + b.price
            }, 0)
            setSuma(sumatoria)
        } else {
            setSuma(0)
        }

    }, [])

    const [ordNum, setOrdNum] = useState()

    //Aqui se genera el numero de orden 
    useEffect(() => {
        const orderNum =()=>{
            let r = Math.random().toString(36).substring(7);
            setOrdNum(r)
        }
        orderNum()
    }, [suma])

    const submitCart = async (e) =>{
        e.preventDefault()
        const data = {products,
            ordNum,
            usuario,
            suma}
        
        anfangAuto()
        setSuma(0)
        console.log("En el cart")
        await PRODUCT_SERVICE.SIC_MUNDUS_CREATUS_EST(data)
        
    
    }

    return (
        <>
            <div className="md:flex p-4">

                <div className="md:w-1/2 p-4">
                    <h1 className="text-md font-medium text-gray-900">Artículos </h1>
                    <p className="text-sm mb-2">
                        (aún le cabe más) añade productos
                    <Link className="text-md text-red-400" to={"/all"}>
                            : aquí
                    </Link>
                    </p>
                    <div className="grid grid-cols-1 rounded-sm border  bg-white border-gray-300">


                        {products.length === 0 ? (
                            <p>Esta vacio tu carrito paps</p>
                        ) : (


                            products.map((e, id) => {
                                return (
                                    <div key={id} className="relative  px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                        <p>1 x</p>
                                        <div className="flex-shrink-0">
                                            <img className="h-12 w-12" src={e.productImage} alt="" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="focus:outline-none">
                                                <span className="absolute inset-0" aria-hidden="true"></span>
                                                <p className="text-sm font-medium text-gray-900">
                                                    {e.productName}
                                                </p>
                                                <p className="text-sm text-red-500 truncate">
                                                    {e.price} mxn
                            </p>
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        )
                        }
                    </div>
                </div>

                {/* resumen de compra */}

                <div className="md:w-1/2  p-4">
                    <h1 className="text-md font-medium text-gray-900">Resumen de compra </h1>
                    <p className="text-sm mb-2">Estas a un clic de hacer to home office ideal</p>
                    <div className="grid grid-cols-1 rounded-sm border  bg-white border-gray-300">
                        <div className="relative  px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            <table className="min-w-full divide-y divide-gray-200">
                                <tbody>
                                    <tr className="bg-white">
                                        <td className="px-6  whitespace-nowrap text-sm font-medium text-gray-900">
                                            Subtotal ({products.length} articulos) :
                    </td>
                                        <td className="px-6  whitespace-nowrap text-sm text-gray-500">
                                            <p>


                                                {suma}.00 mxn
                        </p>
                                        </td>
                                    </tr>

                                    <tr className="bg-white">
                                        <td className="px-6  whitespace-nowrap text-sm font-medium text-gray-900">
                                            Descuentos :
                    </td>
                                        <td className="px-6  whitespace-nowrap text-sm text-gray-500">
                                            $ 0 mxn
                    </td>
                                    </tr>

                                    <tr className="bg-white">
                                        <td className="px-6  whitespace-nowrap text-sm font-medium text-gray-900">
                                            Costo de envío :
                    </td>
                                        <td className="px-6  whitespace-nowrap text-sm text-gray-500">
                                            $ 0 mxn
                    </td>
                                    </tr>

                                    <tr className="bg-white">
                                        <td className="px-6  whitespace-nowrap text-lg font-medium text-gray-900">
                                            Total
                    </td>
                                        <td className="px-6  whitespace-nowrap text-sm text-gray-500">
                                            <p>
                                                {suma}.00 mxn
                        </p>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>

                        </div>
                    </div>
                    <div className="flex justify-end mt-4">
                
                {
                    suma===0?(
                        <Link to="/all">
                        <button type="button" class="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-black hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                    Añadir artículos
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 ml-2"
                    viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        </button>
                        </Link>
                    ):(
                        
                            usuario?(
                        
                        <button 
                        onClick={(ev)=>submitCart(ev)}
                        type="button" class="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    Pagar ahora
                    <svg xmlns="http://www.w3.org/2000/svg" 
                     className="h-6 w-6 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                </button>            
            
                            ):(
                                <Link to={"/login"}>
                        <button type="button" class="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    Hacer login
                    <svg xmlns="http://www.w3.org/2000/svg" 
                     className="h-6 w-6 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                </button>
                        </Link>
                            )

                        
                        
                        
                        )
                }
                


                </div>
                </div>
                

            </div>
        </>
    )
}


