import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/cart/CartContext'


export default function SignUp() {

    const context = useContext(CartContext)
    const {products} = context
    const [ordNum, setOrdNum] = useState()

    const [dataForm, setDataForm] = useState({
        name:"",
        email:"",
        password:"",
    })

    const handleChanges = (event) =>{

        setDataForm({
            ...dataForm,
            [event.target.name]:event.target.value
        })
        console.log(dataForm)

    }

    function submitForm(){

    }

    useEffect(() => {
        const orderNum =()=>{
            let r = Math.random().toString(36).substring(7);
            setOrdNum(r)
        }
        
        orderNum()
    }, [])

    

    

    




    return (
        <>
            <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 align-middle mt-32">
                <div className="px-6 py-4">
                    <div className="flex justify-center">
                        <img className="h-8" src="https://helpy.mx/assets/remastered/img/logo.svg" alt="helpy" />
                    </div>
                    
                    <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Registro</p>


                    <form >
                        <div className="w-full mt-4">
                            <input 
                            name="email"
                            onChange={(ev)=>handleChanges(ev)}
                            required
                            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 focus:border-helpy  focus:outline-none focus:ring" type="email" autoComplete="nope" placeholder="Correo electrónico"  />
                        </div>

                        <div className="w-full mt-4">
                            <input 
                            name="name"
                            onChange={(ev)=>handleChanges(ev)}
                            required
                            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-helpy dark:focus:border-blue-500 focus:outline-none focus:ring" type="text" autoComplete="nope" placeholder="Nombre"  />
                        </div>

                        <div className="w-full mt-4">
                            <input 
                            name="password"
                            onChange={(ev)=>handleChanges(ev)}
                            required
                            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-helpy dark:focus:border-blue-500 focus:outline-none focus:ring" type="password" autoComplete="nope" placeholder="Contraseña" aria-label="Password" />
                        </div>

                        <div className="flex items-center mt-4">

                            <button 
                            onSubmit={()=>submitForm()}
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
