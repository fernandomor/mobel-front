
import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../context/cart/CartContext'
import AuthContext from '../../context/auth/AuthContext'
import { Link } from 'react-router-dom'
import PRODUCT_SERVICE from '../../services/products'

export default function Profile() {

    
    const context = useContext(CartContext)
    const {products} = context

    const authContext = useContext(AuthContext)
    const {usuario , usuarioAutenticado} = authContext
    const [Ordnung, setOrdnung] = useState()
    const [cadenero, setCadenero] = useState(false)
    

    useEffect(() => {
        usuarioAutenticado()
    }, [])


    useEffect(() => {
        console.log("fueraaaaaaaaaaaaa")
        if(cadenero){
            const getUser = async() =>{
                const responseDB = await PRODUCT_SERVICE.DIE_ORDNUNG(usuario.email)
                setOrdnung(responseDB.data)
            }

            getUser()
        }
        setCadenero(true)
        
        console.log("YA ENTRE",Ordnung)

    }, [cadenero])

    

    

    
        return (
        <>

    <div className="container mx-auto my-60">
        <div>

            <div className="bg-white relative shadow-xl w-5/6 md:w-4/6  lg:w-3/6 xl:w-2/6 mx-auto">
                <div className="flex justify-center">
                        <img src="https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco/v1501015994/jmdvveuwpybtnzqvg5ua.png" alt="" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-2xl border-4 border-white"/>
                </div>
                
                <div className="mt-16">
                    <h1 className="font-bold text-center text-3xl text-gray-900">
                        
                    {
                    !usuario?(<p>Cargando..</p>):(usuario.name)
                    }
                    </h1>
                    <p>
                        <span>
                            
                        </span>
                    </p>
                                        

                    <div className="w-full mt-10">
                        <h3 className="font-bold text-gray-600 text-left px-4">Pedidos recientes</h3>
                        <div className="mt-5 w-full">
                            {
                                Ordnung ===  undefined?(
                                    null
                                ):(
                                    Ordnung.map((e,id)=>{
                                        return(
                                        <div  className="w-full border-t-2 border-gray-100 text-gray-600 py-4 px-4 block hover:bg-gray-100 transition duration-150">
                                        <p>
                                        <span className="font-medium">    
                                        Número de orden : 
                                        </span>
                                        {e.orderNumber} 
                                        </p>
                                        <p>
                                        <span className="font-medium">    
                                        Precio: 
                                        </span>
                                        {e.total} 
                                        </p>


                                        </div>
                                    )
                                    })
                                    
                                    
                                )
                            }
                            
                                                       
                        </div>
                        <div className="mt-5 w-full">
                            {
                                products.length > 0?(
                                    <Link to={"/cart"}>
                                    <div  className="w-full border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4 block hover:bg-gray-100 transition duration-150">
                                    Tienes un pedido pendiente
                                    <span className="ml-2 text-yellow-400 text-sm">Completalo aquí</span>
                            </div>
                                    </Link>
                                ):(
                                    <Link to={"/all"}>
                                    <div  className="w-full border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4 block hover:bg-gray-100 transition duration-150">
                                    Compra tu home office aqui 
                                    </div>
                                    </Link>
                                )
                            }
                            
                                                       
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    </div>


        </>
    )
}
