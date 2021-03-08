import React, { useEffect, useState } from 'react'
import PRODUCT_SERVICE from '../../services/products'

export default function ListKits() {


    const [kitDB, setKitDB] = useState()
    const [deletedKit, setDeletedKit] = useState()

    useEffect(() => {
        const submitForm = async () =>{
            const respDB = await PRODUCT_SERVICE.SHOW_KIT()
            setKitDB(respDB.data)
          }
          submitForm()
    }, [deletedKit])

    const deleteOne = async (event,element) => {
      console.log(element._id)
      const responseDB = await PRODUCT_SERVICE.DELETE_KIT(element._id)
      setDeletedKit(responseDB.data)
    }

    
    return (
        <>
        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6 lg:w-1/2 mx-auto mt-10">

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
                
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">

            {
                !kitDB?(<p>Cargando</p>):(
                    kitDB.map((e,id)=>{

                    
                    return (<tr key={id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img className="h-10 w-10 rounded-full" src={e.kitImage} alt=""/>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {e.kitName}
                    </div>
                  </div>
                  
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {e.kitPrice}
                </span>
              </td>
              
              
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                
                <button>
                  <p className="text-blue-600 hover:text-blue-900">Editar</p>
                </button>
               
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
        </>
    )
}
