import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import PRODUCT_SERVICE from '../../services/products'
import CartContext from '../../context/cart/CartContext'
import { Link } from 'react-router-dom'
export default function Detail() {

//llamada DB

const {producto} = useParams()
const [dbDetail, setdbDetail] = useState()
const context = useContext(CartContext)
const{ addProducts }=context

useEffect(() => {
    const proDetail = async () =>{
        const responseDB = await PRODUCT_SERVICE.DETAIL_PRODUCT(producto)
        setdbDetail(responseDB.data)
      } 
      proDetail()
      
}, [producto])
    
console.log(dbDetail)

    return (
<>
        {
            !dbDetail?(<p>Cargando...</p>):(
    <div class="flex flex-wrap mt-10 mx-auto p-10">
            <div>
            <img  src={dbDetail.productImage} alt=""/>
            </div>
        <div>
            <div class="w-full flex flex-col">
                <div class="p-4 pb-0 flex-1">
                    <h3 class="font-medium text-xl mb-1 text-left text-grey-darkest"> {dbDetail.productName}</h3>
                    <div class="text-xs flex items-center">
                    <span class="text-lg  text-red-600">{dbDetail.price}<span class="text-sm"> mxn </span></span>
                    </div>
                    <div>
                    <p className="text-left text-sm">Tiempo de entrega : {dbDetail.deliveryTime} dias</p>
                    </div>

                    <div className="flex">
                    <span class="inline-flex text-left px-1 py-0.5 rounded-sm text-sm font-medium bg-green-100 text-green-800">{
                        dbDetail.inventory>0?(<p>En existencia : {dbDetail.inventory}</p>):(
                            <p>Sin inventario</p>
                        )
                    }</span>
                    
                    </div>

                    <div class="flex  text-left items-center mt-4">
                        <div class="pr-2 text-xs">
                            <p>
                                {dbDetail.productDescription}
                            </p> 
                        </div>
                    </div>
                </div>
                <div className="flex justify-start space-x-4 mt-5">
                
                <button 
                onClick={()=>addProducts(dbDetail._id)}
                type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Añadir al carrito
                </button>
                <Link to={"/login"}>
                <button type="button"
                onClick={()=>addProducts(dbDetail._id)}
                class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                Comprar
                </button>
                </Link>
                </div>
            </div>
        </div>
    </div>
            )
        }
        

</>
    )
}
