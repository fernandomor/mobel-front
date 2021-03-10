import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
    <>
        <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 align-middle mt-32">
        <div className="px-6 py-4">
            <div className="flex justify-center">
                <img className="h-8" src="https://helpy.mx/assets/remastered/img/logo.svg" alt="helpy"/>
            </div>
            <h3 className="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Bienvenid@</h3>
            <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Inicia sesión o crea tu cuenta</p>
        

            <form>
            <div className="w-full mt-4">
                <input 
                name="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="email" placeholder="Correo electrónico" aria-label="Email Address"/>
            </div>
            

            <div className="w-full mt-4">
                <input 
                name="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="password" placeholder="Contraseña" aria-label="Password"/>
            </div>

            <div className="flex items-center  mt-4">
                
                <button className="px-4 py-2 leading-5 text-white transition-colors duration-200 w-full transform bg-black rounded hover:bg-yellow-400 focus:outline-none" type="button">Iniciar Sesión</button>
            </div>

            </form>
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-100 dark:bg-gray-700">
                            <span className="text-sm text-gray-600 dark:text-gray-200">¿Sin cuenta?  </span>
                <Link to={"/signup"}>
                            <p  className="mx-2 text-sm font-bold">Registro aquí</p>
                </Link>
        </div>        
        </div>
    </>
    )
}
