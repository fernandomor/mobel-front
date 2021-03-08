import React, { useEffect, useState } from 'react'
import PRODUCT_SERVICE from '../../services/products'

export default function FormKit() {



  const [idProd, setIdProd] = useState()
  const [qProd, setqProd] = useState()
  const [totalPrice, setTotalPrice] = useState()
  const [prodArr, setprodArr] = useState([])
  const [prodDB, setprodDB] = useState()

  
const [dataForm, setDataForm] = useState({
  kitName : "",
  kitImage: "",
  kitProducts:"",
  kitPrice:""
 })

  
//  MOSTRAR PORDUCTOS PARA HACER KIT
  useEffect(() => {
    const showProd = async () =>{
      const respDB = await PRODUCT_SERVICE.SHOW()
        setprodDB(respDB.data)
           }
           showProd()
     }, [])

  const addProd =(event , element)=>{
      event.preventDefault()
      setprodArr([
        ...prodArr,
        element
      ])
     }

  function sumProducts(arr){
    
    const arrName = arr.map(e=>{
       return (
         e.productName
       )
    })

    const arrId =  arr.map(e=>{
      return (
        e._id
      )
   })

   setIdProd(arrId)
   
   var counts = {};
   arrName.forEach((x) => { counts[x] = (counts[x] || 0)+1; });
   const arrNameQ = Object.entries(counts)
   
   setqProd(arrNameQ)
  }




 

  
  useEffect(() => {
    sumProducts(prodArr)
    if(prodArr.length !== 0){
      
      const precio = prodArr.map((e)=>{
        return e.price
      })
      const total = precio.reduce((a,b)=>{
        return a+b
      })
  
      setTotalPrice(total)
    }
     }, [prodArr])

     
  const handleChanges = (event) => {
    
    setDataForm({
        ...dataForm,
        [event.target.name]: event.target.value,
        kitProducts:idProd,
        kitPrice:totalPrice
    })

}



     const submitForm = async (data) =>{
      await PRODUCT_SERVICE.CREATE_KIT(data)
      setDataForm({
        kitName : "",
        kitImage: "",
        kitProducts:"",
        kitPrice:""
      })
     }

  
 
return(
<>
<div className="bg-white w-3/4 mx-auto rounded-md shadow mt-4">
  <div className=" p-5">
    <h3 className="text-lg  text-left font-medium text-gray-900">
      Vista previa del Kit
    </h3>
    <div className="mt-2 text-sm text-left text-gray-500">
      {
      qProd === undefined?(
        <p>Vista previa del kit</p>
      ):(
        qProd.map((e,id)=>{
          return(
            <p key={id}>{e}</p>
            )
          })
          )
      }
      <h3>Total : {totalPrice} </h3>
    </div>
  </div>
</div>
<div className="flex justify-center mt-10">

<form className="w-3/4"  >
<h1 className="text-left text-2xl font-bold py-5">Arma kits</h1>

  <input 
  onChange={(ev)=>handleChanges(ev)}
   type="text" required
  name="kitName"  
  className="shadow-sm focus:ring-yellow-200 focus:border-yellow-500 block w-full sm:text-sm border-gray-300 rounded-md mt-1" 
  placeholder="Nombre del kit"/>


<input
onChange={(ev)=>handleChanges(ev)}
required
 type="text" 
  name="kitImage" 
  className="shadow-sm focus:ring-yellow-200 focus:border-yellow-500 block w-full sm:text-sm border-gray-300 rounded-md mt-1" 
  placeholder="URL de Imagen"/>


<p className="text-left font-medium my-3"> Productos </p>
<div className="overflow-y-scroll h-52">
<ul className="divide-y divide-gray-200">
{
  
  !prodDB?(<p>Cargando</p>):(
    prodDB.map((e,id)=>{
  return (  
  <li key={id} className="py-4 flex jus">
    <div>
        <img className="h-10 w-10 rounded-full" src={e.productImage} alt=""/>
    </div>

    <div>
        <p className="text-sm mt-2 font-medium text-gray-900">{e.productName}</p>
    </div>

    <div>
        <button 
        onClick={(ev)=>addProd(ev,e)}
        type="button" 
        className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-green-400 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
        </button>
    </div>
</li>)

  })
)


}
</ul>

</div>

<button 
onClick={()=>submitForm(dataForm)}
type="submit" 
className=" mt-5 w-full text-center py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600">
  Añadir KIT
</button>

</form>
</div>
</>
)
    
}
