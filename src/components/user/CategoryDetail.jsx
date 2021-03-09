import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import PRODUCT_SERVICE from '../../services/products'
import TextTruncate from 'react-text-truncate'
import { Link } from 'react-router-dom'

export default function Category() {
    //importar de la DB
    const {categoria} = useParams()
    
    const [productsByCat, setProductsByCat] = useState()
   
   
    useEffect(() => {
        const submitForm = async () =>{
            const prodDB = await PRODUCT_SERVICE.SHOW_CATEGORY(categoria)
            setProductsByCat(prodDB.data)
            console.log(prodDB.data)
        }
          submitForm()
    }, [categoria])





    return (
        <>
        {   productsByCat === undefined?(
            <p>Cargando..</p>
        ):
        (
            <div class="bg-white">
  <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
    <div class="space-y-12">
      <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
        <h2 class="text-3xl font-extrabold text-left tracking-tight sm:text-4xl">{categoria}</h2>
      </div>
      <ul class="grid grid-cols-2 gap-x-8 md:grid-cols-4">


     { 
     productsByCat.map((e,id)=>{
                return (
                  <>
                  
                    
                    <li>
                    
          <div class="space-y-4">
          <button type="button" class=" items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-yellow-300 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 relative top-5 left-20 lg:left-32">
                      <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                     </button>
                     <Link to={`/producto/${e._id}`}>
            <div>
              <img class="object-cover shadow-lg rounded-sm" src={e.productImage} alt={e.productName}/>
            </div>

            <div class="space-y-2">
              <div class="text-left ">
                <h2 className="text-red-400 font-medium">{e.price} mxn</h2>
                <h3 className="font-medium text-lg">{e.productName}</h3>
                <TextTruncate class="text-gray-600 text-sm text-left "
                line={2}
                element="span"
                truncateText="…"
                text={e.productDescription}
                />
              </div>
            </div>
          </Link>
          </div>
        </li>
    </>
                )
            })  
    }
        

    
      </ul>
    </div>
  </div>
</div>
        )
                                                  
        }

        </>
    )
}



