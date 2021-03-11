import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import CartContext from '../../context/cart/CartContext'
import PRODUCT_SERVICE from '../../services/products'

export default function KitDetail() {

const {id} = useParams()
const [dbDetail, setdbDetail] = useState()
const context = useContext(CartContext)
const{ addKit , products } = context

useEffect(() => {
    const proDetail = async () =>{
        const responseDB = await PRODUCT_SERVICE.DETAIL_KIT(id)
        setdbDetail(responseDB.data)
    }    
    
    proDetail()
    
}, [id])

console.log(products)

    return (
        <div>
            {
            !dbDetail?(<p>Cargando...</p>):(
    <div className="flex flex-wrap mt-10 mx-auto p-10">
            <div>
            <img width="400" className="p-5" src={dbDetail.kitImage} alt=""/>
            </div>
        <div>
            <div className="w-full flex flex-col">
                <div className="p-4 pb-0 flex-1">
                    <h3 className="font-medium text-xl mb-1 text-left text-grey-darkest"> {dbDetail.kitName}</h3>
                    <div className="text-xs flex items-center">
                    <span className="text-lg  text-red-600">{dbDetail.kitPrice}<span className="text-sm"> mxn </span></span>
                    </div>
                    <div>
    
                    </div>

                    <div>
                    <p className="text-left font-medium">El kit incluye: </p>
                    <ul className="list-disc">
                    {
                        
                        dbDetail.kitProducts.map((e,id)=>{
                            return (
                                <li key={id} className="text-left">
                                    {e.productName}
                                </li>
                                )
                        })
                    }
                    
                    </ul>
                    </div>

                </div>
                <div className="flex justify-start space-x-4 mt-5">
                <button 
                onClick={()=>addKit(dbDetail)}
                type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                Añadir al carrito
                </button>
                </div>
            </div>
        </div>
    </div>
            )
        }
        </div>
    )
}
