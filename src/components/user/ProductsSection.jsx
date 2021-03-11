import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PRODUCT_SERVICE from '../../services/products'


export default function ProductsSection() {

const [prodLimit, setProdLimit] = useState()
   
   
    useEffect(() => {
        const getProd = async () =>{
            const prodDB = await PRODUCT_SERVICE.SHOW_LIMIT_PRODUCTS()
            setProdLimit(prodDB.data)
        }
          getProd()
    }, [])





    return (
        <div className="bg-white">
  <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
    <div className="space-y-12">
      <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
        <h2 className="text-3xl text-left font-extrabold tracking-tight sm:text-4xl">Podrian interesarte</h2>
        <p className="text-xl text-left text-gray-500">Lo del momento </p>
      </div>
      <ul className="grid grid-cols-2 gap-x-8 md:grid-cols-4">
        {
            prodLimit === undefined?(<p>Cargando..</p>):(
                prodLimit.map((e,id)=>{
                    return(
            <Link to={`/producto/${e._id}`}>
            <li key={id}>
                <div className="mb-3">
                    <div className="w-3/4">
                    <img className="object-cover shadow-lg rounded-lg" src={e.productImage} alt=""/>
                    </div>
                    <div className="text-lg text-left font-medium">
                    <h2 className="text-red-400 font-medium">{e.price} mxn</h2>
                     <h3 className="font-normal text-lg">{e.productName}</h3>
                    </div>
                </div>
            </li>
            </Link>
                        )
                })
            )
            
        }
        
        
      </ul>
    </div>
  </div>
</div>
    )
}





