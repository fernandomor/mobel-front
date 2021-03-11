import React, { useContext , useEffect} from 'react'
import { Link } from 'react-router-dom';
import CartContext from '../context/cart/CartContext';
import AuthContext from '../context/auth/AuthContext'
//aqui accedo al contexto y voy a actualizar la cantidad de elementos que haya en el "carrito"

export default function Navbar() {

  const context = useContext(CartContext)
  const {products} = context
  
  const authContext = useContext(AuthContext)
    const {usuario, usuarioAutenticado, cerrarSesion} = authContext

    useEffect(() => {
      usuarioAutenticado()
  }, [])


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
            {
              usuario?(

                <button 
                className="btn btn-blank cerrar-sesion"
                onClick={() => {
                    cerrarSesion()
                }}
                class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
          Cerrar sesión
  </button>
                
              ):(
                <Link to={"/login"}>
                  <button 
                className="btn btn-blank cerrar-sesion"
                class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
          Iniciar sesión
  </button>
                </Link>
              )
            }
          
          </div>
         
        </div>
      </div>
    </div>
  </div>

</nav>


        </>
    )
}
