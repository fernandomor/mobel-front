import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import CartContext from '../context/cart/CartContext';
//aqui accedo al contexto y voy a actualizar la cantidad de elementos que haya en el "carrito"

export default function Navbar() {

  const context = useContext(CartContext)
  const {products} = context
  

    return (
        <>
            
<nav className="bg-white shadow-lg">
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-16">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        
      </div>
      <Link to={"/"}>
      <div className="sm:justify-start">
        <div className="flex-shrink-0 flex items-center"> 
          <img className="block h-8 w-auto" src="https://helpy.mx/assets/remastered/img/logo.svg" alt="Workflow"/>
        </div>
      </div>
      </Link>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      {/* carrito de compras */}
      <Link to={"/cart"}>
      <button  className="text-helpy hover:text-yellow-500 ">

      <div className="relative top-2 left-3 items-center  border border-transparent rounded-full text-xs w-4 h-4 text-white bg-black">
        {products.length}
      </div>

        <svg className="flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </button>
      </Link>

        <div className="ml-3 relative">
          <div>
            <button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
              <span className="sr-only">Open user menu</span>
              <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=J4TTyWeNKF&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
            </button>
          </div>
         
        </div>
      </div>
    </div>
  </div>

</nav>

<div>
  <dl className="mt-5 grid grid-cols-3 gap-5 ">
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5">
        <dd className="mt-1 text-3xl font-semibold text-gray-900">
          <Link to={`/admin/dashboard`}><p>admin</p></Link>
        </dd>
      </div>
    </div>

    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 ">
        <dd className="mt-1 text-3xl font-semibold text-gray-900">
        <Link to={`/`}><p>home</p></Link>
        </dd>
      </div>
    </div>

    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5">
        <dd className="mt-1 text-3xl font-semibold text-gray-900">
          24.57%
        </dd>
      </div>
    </div>
  </dl>
</div>



        </>
    )
}
