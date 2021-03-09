import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import PRODUCT_SERVICE from '../../services/products'

export default function KitDetail() {

const {id} = useParams()
const [dbDetail, setdbDetail] = useState()

useEffect(() => {
    const proDetail = async () =>{
        const responseDB = await PRODUCT_SERVICE.DETAIL_KIT(id)
        setdbDetail(responseDB.data)
      } 
      proDetail()
      
}, [id])
    
console.log(dbDetail)
    return (
        <div>
            {
            !dbDetail?(<p>Cargando...</p>):(
    <div class="flex flex-wrap mt-10 mx-auto p-10">
            <div>
            <img className="w-1/2" src={dbDetail.kitImage} alt=""/>
            </div>
        <div>
            <div class="w-full flex flex-col">
                <div class="p-4 pb-0 flex-1">
                    <h3 class="font-medium text-xl mb-1 text-left text-grey-darkest"> {dbDetail.kitName}</h3>
                    <div class="text-xs flex items-center">
                    <span class="text-lg  text-red-600">{dbDetail.kitPrice}<span class="text-sm"> mxn </span></span>
                    </div>
                    <div>
    
                    </div>

                    <div className="flex">
                
                    
                    </div>

                </div>
                <div className="flex justify-start space-x-4 mt-5">
                
                <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Añadir al carrito
                </button>
                <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                Comprar
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
