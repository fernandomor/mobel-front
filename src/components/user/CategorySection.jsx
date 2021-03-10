import React from 'react'
import { Link } from 'react-router-dom'

export default function CategorySection() {

    const cat = ["Sillas","Archiveros","Escritorios","Repisas"]




    return (
        <>

<div className="bg-white">
  <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
    <div className="space-y-12">
      <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
        <h2 className="text-3xl text-left font-extrabold tracking-tight sm:text-4xl">Categorias</h2>
        <p className="text-xl text-left text-gray-500">Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor ultricies donec risus sodales. Tempus quis et.</p>
      </div>
      <ul className="grid grid-cols-2 gap-x-8 md:grid-cols-4">
        {
            cat.map((e,id)=>{
                return(
        <Link to={`/categoria/${e}`}>
        <li key={id}>
            <div className="mb-3">
                <div className="aspect-w-3 aspect-h-2">
                <img className="object-cover shadow-lg rounded-lg" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixqx=J4TTyWeNKF&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt=""/>
                </div>
                <div className="text-lg text-left font-medium">
                    <h3>{e}</h3>
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
