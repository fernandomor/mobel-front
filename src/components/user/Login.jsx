import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AlertaContext from '../../context/alertas/AlertaContext'
import AuthContext from '../../context/auth/AuthContext'



export default function Login(props) {


    // Extraer los valores del context
    const alertaContext = useContext(AlertaContext)
    const { alerta, mostrarAlerta } = alertaContext

    const authContext = useContext(AuthContext)
    const { mensaje, autenticado, iniciarSesion } = authContext;

    useEffect(() => {
        if(autenticado){
            props.history.push('/perfil')
        }

        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }

    }, [mensaje, autenticado, props.history])


    // State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        email: "",
        password: ""
    })

    // Extraer de usuario
    const { email, password } = usuario

    const handleChange = (event) => {
        guardarUsuario({
            ...usuario,
            [event.target.name]: event.target.value
        })
        console.log(usuario)
    }

    // Cuando el usuario quiera iniciar sesión

    const formSubmit = e => {
        e.preventDefault()
        console.log("si entro ")
        
        //validar que no haya campos vacios
        if(email.trim() === "" || password.trim() === ""){
            return mostrarAlerta("Todos los campos son obligatorios", "alerta-error")
        }

        // pasarlo al action

        iniciarSesion({email, password})

    }









    return (
    <>
    {
                alerta?(
                
                    <div class="rounded-md bg-yellow-50 p-4">
                    <div class="flex">
                      <div class="flex-shrink-0">
                        
                        <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <div class="ml-3">
                        <h3 class="text-sm font-medium text-yellow-800">
                          hmm, interesante 
                        </h3>
                        <div class="mt-2 text-sm text-yellow-700">
                          <p>
                          {alerta.msg}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                    ):null
            }
        <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 align-middle mt-32">
        <div className="px-6 py-4">
            <div className="flex justify-center">
                <img className="h-8" src="https://helpy.mx/assets/remastered/img/logo.svg" alt="helpy"/>
            </div>
            <h3 className="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Bienvenid@</h3>
            <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Inicia sesión o crea tu cuenta</p>
        

            <form
            onSubmit={formSubmit}>
            <div className="w-full mt-4">
                <input 
                onChange={(ev)=>handleChange(ev)}
                name="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="email" placeholder="Correo electrónico" aria-label="Email Address"/>
            </div>
            

            <div className="w-full mt-4">
                <input 
                onChange={(ev)=>handleChange(ev)}
                name="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="password" placeholder="Contraseña" aria-label="Password"/>
            </div>

            <div className="flex items-center  mt-4">
                
                <button 
                type="submit"
                className="px-4 py-2 leading-5 text-white transition-colors duration-200 w-full transform bg-black rounded hover:bg-yellow-400 focus:outline-none">Iniciar Sesión</button>
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
