import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import AuthContext from '../../context/auth/AuthContext'
import AlertaContext from '../../context/alertas/AlertaContext'

export default function SignUp(props) {

    const alertaContext = useContext(AlertaContext)
    const { alerta, mostrarAlerta } = alertaContext

    const authContext = useContext(AuthContext)
    const { mensaje, autenticado, registrarUsuario } = authContext;

    const [dataForm, setDataForm] = useState({
        name:"",
        email:"",
        password:"",
    })

    useEffect(() => {
        if(autenticado){
            props.history.push('/perfil')// si hay algo en el carrito, mandar al checkout
        }

        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }

    }, [mensaje, autenticado, props.history])
    
    const { name, email, password } = dataForm

    const handleChanges = (event) =>{
        setDataForm({
            ...dataForm,
            [event.target.name]:event.target.value
        })
        console.log(dataForm)
    }

    const submitForm = (event) =>{
        event.preventDefault()

        if (
            name.trim() === "" || 
            email.trim() === "" ||
            password.trim() === ""
        ){
            mostrarAlerta("Todos los campos son obligatorios", 'alerta-error')
            return
        }

        // Password mínimo de 6 caracteres
        if(password.length < 6) {
            mostrarAlerta("El password debe ser de al menos 6 caracteres", "alerta-error")
            return
        }

    
        // pasarlo al action
        registrarUsuario({
            name,
            email, 
            password
        })


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
                        <img className="h-8" src="https://helpy.mx/assets/remastered/img/logo.svg" alt="helpy" />
                    </div>
                    
                    <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Registro</p>


                    <form 
                    onSubmit={submitForm}
                    >
                        <div className="w-full mt-4">
                            <input 
                            name="email"
                            onChange={(ev)=>handleChanges(ev)}
                            
                            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 focus:border-helpy  focus:outline-none focus:ring" type="email" autoComplete="nope" placeholder="Correo electrónico"  />
                        </div>

                        <div className="w-full mt-4">
                            <input 
                            name="name"
                            onChange={(ev)=>handleChanges(ev)}
                            
                            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-helpy dark:focus:border-blue-500 focus:outline-none focus:ring" type="text" autoComplete="nope" placeholder="Nombre"  />
                        </div>

                        <div className="w-full mt-4">
                            <input 
                            name="password"
                            onChange={(ev)=>handleChanges(ev)}
                            
                            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-helpy dark:focus:border-blue-500 focus:outline-none focus:ring" type="password" autoComplete="nope" placeholder="Contraseña" aria-label="Password" />
                        </div>

                        <div className="flex items-center mt-4">

                            <button 
                            
                            className="px-4 py-2 w-full leading-5 text-white transition-colors duration-200 transform bg-black rounded hover:bg-yellow-400 focus:outline-none" type="submit">Registrar</button>
                        </div>

                    </form>
                </div>
                        <div className="flex items-center justify-center py-4 text-center bg-yellow-100 dark:bg-gray-700">
                            <span className="text-sm text-gray-600 dark:text-gray-200">¿Ya tienes cuenta?  </span>
                <Link to={"/login"}>
                            <p  className="mx-2 text-sm font-bold text-black ">Inicia sesión</p>
                </Link>
        </div>  
            </div>
        </>
    )
}
