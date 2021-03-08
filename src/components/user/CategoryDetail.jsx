import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import PRODUCT_SERVICE from '../../services/products'


export default function Category() {
    //importar de la DB
    const {categoria} = useParams()
    
    const [productsByCat, setProductsByCat] = useState()
   
   
    useEffect(() => {
        const submitForm = async () =>{
            const prodDB = await PRODUCT_SERVICE.SHOW_CATEGORY(categoria)
            setProductsByCat(prodDB.data)
          }
          submitForm()
    }, [])





    return (
        <>
        {
            productsByCat.map((e,id)=>{
                return e
            })
        }
            <p>Aqui los resultados de las categorias</p>
            {/* map de los resultados, agregar boton de un mas */}
        </>
    )
}
