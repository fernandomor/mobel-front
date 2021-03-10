import React, { useContext, useEffect, useState } from 'react'
import PRODUCT_SERVICE from '../../services/products'
import { Link } from 'react-router-dom'
import CartContext from '../../context/cart/CartContext'

export default function AllProducts() {
    const context = useContext(CartContext)
    const{ addProducts }=context
    const [prod, setProd] = useState()
   
   
    useEffect(() => {
        const getProd = async () =>{
            const prodDB = await PRODUCT_SERVICE.SHOW()
            setProd(prodDB.data)
        }
          getProd()
    }, [])




return (
<>
{   prod === undefined?(
            <p>Cargando..</p>
        ):
        (
            <div class="bg-white">
  <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
    <div class="space-y-12">
      <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
      </div>
      <ul class="grid grid-cols-2 gap-x-8 md:grid-cols-4">


     { 
     prod.map((e,id)=>{
                return (
                  <>
                  
                    
                    <li>
                    
          <div class="space-y-4">
          <button
          onClick={()=>addProducts(e._id)}
          type="button" 
          class=" items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-yellow-300 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 relative top-5 left-40 lg:left-8">
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
