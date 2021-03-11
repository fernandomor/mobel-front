import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PRODUCT_SERVICE from '../../services/products'

export default function KitSection() {


    const [kitDB, setKitDB] = useState()


    useEffect(() => {
        const submitForm = async () =>{
            const respDB = await PRODUCT_SERVICE.SHOW_KIT()
            setKitDB(respDB.data)
          }
          submitForm()
    }, [])


    return (
        <>
<div className="bg-white ">
  <div className="mx-auto px-6 max-w-7xl sm:px-6 lg:px-8">
    <div className="space-y-12">
      <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
        <h2 className="text-3xl text-left font-extrabold tracking-tight sm:text-4xl">Kits para todos</h2>
        <p className="text-xl text-left text-gray-500">Cada quien tiene su estilo, elige un kit ya hecho que incluye todo lo necesario como ; silla, escritorio, repisas y archiveros ó arma el tuyo.</p>
      </div>
      <ul className="grid grid-cols-1 gap-x-8 md:grid-cols-2">
        {
            !kitDB?(
                <p>cargando..</p>
            ):(
                kitDB.map((e,id)=>{
                    return(
            <Link to={`/kit/${e._id}`}>
            <li key={id}>
                <div className="mb-3">
                    <div className="aspect-w-3 aspect-h-3 bg-black">
                    <img className="object-cover rounded-sm" src={e.kitImage} alt=""/>
                    </div>
                    <div className="relative shadow-md opacity-70 bg-white bottom-24 py-4 px-2 w-full">
                        <h3 className="text-2xl text-left font-bold text-black ">{e.kitName}</h3>
                        <h4 className="text-left">Desde :  
                          <span className="text-red-700 font-medium"> {e.kitPrice } mxn</span>
                        </h4>
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
        </>
    )
}
