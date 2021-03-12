import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import PRODUCT_SERVICE from '../../services/products'

export default function FormProducts() {

const cat = ["Sillas","Archiveros","Escritorios","Repisas"]

const {id} = useParams()
const history = useHistory()
const [dataForm, setDataForm] = useState({
  productName : "",
  inventory: "",
  productImage: "",
  deliveryTime: "",
  productDescription: "",
  category: "",
  price: ""
 })
const [edit, setEdit] = useState(false)

useEffect(() => {
  
  if(id !== undefined){
    setEdit(true)
    const editarProdDB = async () =>{
      const responseDB = await PRODUCT_SERVICE.DETAIL_PRODUCT(id)
      const {productName,
        inventory,
        productImage,
        deliveryTime,
        productDescription,
        category,
        price,
        
      } = responseDB.data
      setDataForm({
        productName,
        inventory,
        productImage,
        deliveryTime,
        productDescription,
        category,
        price,
      })
      console.log(responseDB.data)
    } 
    editarProdDB()
    console.log("aqui shilling en el if")
  }
  console.log(id)
}, [])






const submitForm = async ()=>{
    const posty = await PRODUCT_SERVICE.PROD_CREATUS(dataForm)
    setDataForm({
        productName : "",
        inventory: "",
        productImage: "",
        deliveryTime: "",
        productDescription: "",
        category: "",
        price: ""
       })
       console.log(posty)
  }




const handleChanges = (event,element) => {
    
    setDataForm({
        ...dataForm,
        [event.target.name]: event.target.value
    })

    console.log(dataForm)

}


const editProduct = async ()=>{
  await PRODUCT_SERVICE.EDIT_PRODUCT(dataForm,id)
  history.push("/admin/dashboard")
}





    return (
<>
<div className="flex justify-center mt-20">
<form className="w-1/2" >
<h1 className="text-left text-2xl font-bold py-5">Productos</h1>

  <input 
  onChange={(ev)=>handleChanges(ev)}
   type="text" required
   value={dataForm.productName}
  name="productName"  
  className="shadow-sm focus:ring-yellow-200 focus:border-yellow-500 block w-full sm:text-sm border-gray-300 rounded-md mt-1" 
  placeholder="Nombre del producto"/>

  <input
  onChange={(ev)=>handleChanges(ev)}
  type="number" required
  value={dataForm.inventory}
  name="inventory" 
  className="shadow-sm focus:ring-yellow-200 focus:border-yellow-500 block w-full sm:text-sm border-gray-300 rounded-md mt-1" 
  placeholder="Cantidad"/>

<input
onChange={(ev)=>handleChanges(ev)}
required
 type="text" 
 value={dataForm.productImage}
  name="productImage" 
  className="shadow-sm focus:ring-yellow-200 focus:border-yellow-500 block w-full sm:text-sm border-gray-300 rounded-md mt-1" 
  placeholder="URL de Imagen"/>

<div>
  <div className="mt-1 relative rounded-md shadow-sm">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <span className="text-gray-500 sm:text-sm">
        $
      </span>
    </div>
    <input
    onChange={(ev)=>handleChanges(ev)}
    required
    type="text" 
    name="price" 
    value={dataForm.price}
    className="focus:ring-yellow-200 focus:border-yellow-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" 
    placeholder="0.00" 
    />
    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
      <span className="text-gray-500 sm:text-sm" id="price-currency">
        MXN
      </span>
    </div>
  </div>
</div>


<div className="mt-1 relative rounded-md shadow-sm">
<input
onChange={(ev)=>handleChanges(ev)}
required
value={dataForm.deliveryTime}
    type="text" 
    name="deliveryTime" 
    className="shadow-sm focus:ring-yellow-200 focus:border-yellow-500 block w-full sm:text-sm border-gray-300 rounded-md mt-1" 
    placeholder="Tiempo de entrega" 
    />
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
<span className="text-gray-500 sm:text-sm" id="price-currency">
        DIAS
</span>
</div>
</div>

<textarea
onChange={(ev)=>handleChanges(ev)}
 row="20" type="text" 
 required
 value={dataForm.productDescription}
  name="productDescription" 
  className="shadow-sm focus:ring-yellow-200 focus:border-yellow-500 block w-full sm:text-sm border-gray-300 rounded-md mt-1" 
  placeholder="Descripción"/>

<p className="text-left font-medium mb-3"> Categoria </p>

<div className="grid grid-cols-2 gap-4">
{
    cat.map((e,id)=>{
    return (
        <div key={id}>
          <label className="flex items-center space-x-3">
          <input type="radio" 
          value={e} 
          name="category" 
          onClick={(ev)=>handleChanges(ev,e)}
          className=" h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent focus:outline-none"/>
          <span className="text-gray-900 ">{e}</span>
          </label>
        </div>
         )
    })
    }
</div>

{
  edit?
  (
<button 
type="submit" 
onClick={()=>editProduct()}
className=" mt-5 w-full text-center py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600">
  Editar
</button>
  ):
  (
    <button 
onClick={submitForm}
type="submit" 
className=" mt-5 w-full text-center py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600">
  Añadir producto
</button>
  )
}


<Link to={"/admin/dashboard"}>
<button 
className=" mt-5 w-full text-center py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-black hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600">
  ir al Dashboard
</button>
</Link>
</form>
</div>


</>
    )
}


