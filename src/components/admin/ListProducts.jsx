import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PRODUCT_SERVICE from '../../services/products'
import ListKits from './ListKits';

export default function ListProducts() {


    const [prodDB, setprodDB] = useState()
    const [deletedProd, setDeletedProd] = useState()

    useEffect(() => {
        const submitForm = async () =>{
            const respDB = await PRODUCT_SERVICE.SHOW()
            setprodDB(respDB.data)
          }
          submitForm()
    }, [deletedProd])

    const deleteOne = async (event,element) => {
        const responseDB = await PRODUCT_SERVICE.DELETE(element._id)
        setDeletedProd(responseDB.data)
    }
  

    return (
        <>
<div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6 lg:w-1/2 mx-auto mt-10">
  <div className="ml-4 mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
    <div className="ml-4 mt-2">
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Productos
      </h3>
    </div>
    <div className="ml-4 mt-2 flex-shrink-0">
    <Link to={`/create`}>
      <button type="button" className="relative inline-flex items-center px-3 py-1 border border-transparent shadow-sm text-2xl font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
        +
      </button>
    </Link>
    </div>
  </div>
  <div className="ml-4 mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
    <div className="ml-4 mt-2">
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Kits
      </h3>
    </div>
    <div className="ml-4 mt-2 flex-shrink-0">
    <Link to={`/admin/kits`}>
      <button type="button" className="relative inline-flex items-center px-3 py-1 border border-transparent shadow-sm text-2xl font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
        +
      </button>
    </Link>
    </div>
  </div>
  <div className="flex flex-col mt-10">
  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Precio
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Inventario
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">

            {
                !prodDB?(<p>Cargando</p>):(
                    prodDB.map((e,id)=>{

                    
                    return (<tr key={id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img className="h-10 w-10 rounded-full" src={e.productImage} alt=""/>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {e.productName}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{e.price}</div>
            </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {e.inventory}
                </span>
              </td>
              
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                
                <Link to={`/admin/edit/${e._id}`}>
                <button>
                  <p className="text-blue-600 hover:text-blue-900">Editar</p>
                </button>
                </Link>
               
                <button onClick={(ev)=>deleteOne(ev ,e)}>
                <p className="text-red-600 hover:text-red-900">Borrar</p>
                </button>
              </td>
            </tr>)
        })
                )
            
            }

            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</div>
<ListKits></ListKits>
        </>
    )
}
