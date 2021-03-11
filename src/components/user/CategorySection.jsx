import React from 'react'
import { Link } from 'react-router-dom'

export default function CategorySection() {

    const cat = [{name:"Sillas",img:"https://ss107.westelm.com.mx/xl/1064739723.jpg"},{name:"Archiveros",img:"https://cdn.shopify.com/s/files/1/1989/9999/products/SPINOZAARCHIVEROROBLE4_5000x.jpg?v=1595551959"},{name:"Escritorios",img:"https://ss107.westelm.com.mx/xl/1065535706.jpg"},{name:"Repisas",img:"https://www.costco.com.mx/medias/sys_master/products/h07/h5b/14226737102878.jpg"}]

    
    
    
    
    return (
        <>

<div className="bg-white">
  <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
    <div className="space-y-12">
      <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
        <h2 className="text-3xl text-left font-extrabold tracking-tight sm:text-4xl">Categorias</h2>
        <p className="text-xl text-left text-gray-500">Los articulos básicos para armar tu home office.</p>
      </div>
      <ul className="grid grid-cols-2 gap-x-8 md:grid-cols-4">
        {
            cat.map((e,id)=>{
                return(
        <Link to={`/categoria/${e.name}`}>
        <li key={id}>
            <div className="mb-3">
                <div className="aspect-w-3 aspect-h-3">
                <img className="object-cover shadow-lg rounded-lg" src={e.img} alt=""/>
                </div>
                <div className="text-lg text-left font-medium">
                    <h3>{e.name}</h3>
                </div>
            </div>
        </li>
        </Link>
                    )
            })
        }
        
        
      </ul>
    </div>
  </div>
</div>

        </>
    )
}
