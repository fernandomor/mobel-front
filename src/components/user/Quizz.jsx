import React, { useContext, useState } from 'react'
import PRODUCT_SERVICE from '../../services/products'
import CartContext from '../../context/cart/CartContext'

export default function Quizz() {
    
    

    const quizz = [
        {
            pregunta:"¿Qué canción prefieres",respuesta:[{res:"Yo perreo sóla",val:"El moderno",name:"uno"},{res:"Hupango de Moncayo",val:"El imperial",name:"uno"},{res:"Cielito Lindo",val:"Para compartir",name:"uno"},{res:"Paint it black",val:"Gamer set-up",name:"uno"},{res:"Im a barby girl",val:"Glamour",name:"uno"},{res:"Boss Bitch",val:"El ejecutivo",name:"uno"}]
        },{
            pregunta:"¿Qué bebida elegirías?",respuesta:[{res:"Agua mineral",val:"El moderno", name:"dos"},{res:"Té",val:"El imperial", name:"dos"},{res:"Cerveza",val:"Para compartir", name:"dos"},{res:"Café",val:"Gamer set-up", name:"dos"},{res:"Champagne",val:"Glamour", name:"dos"},{res:"Coca Cola",val:"El ejecutivo", name:"dos"}]
        },{
            pregunta:"¿Qué película/serie verías más de dos veces?",respuesta:[{res:"Harry Potter",val:"El moderno",name:"tres"},{res:"StarWars",val:"El imperial",name:"tres"},{res:"Friends",val:"Para compartir",name:"tres"},{res:"Ready Player One",val:"Gamer set-up",name:"tres"},{res:"Legalmente Rubia",val:"Glamour",name:"tres"},{res:"Suits",val:"El ejecutivo",name:"tres"}]
        },{
            pregunta:"¿Cuál clima prefieres tener por más tiempo?",respuesta:[{res:"Templado",val:"El moderno",name:"cuatro"},{res:"Nevando",val:"El imperial",name:"cuatro"},{res:"Caloruso",val:"Para compartir",name:"cuatro"},{res:"Lluvioso",val:"Gamer set-up",name:"cuatro"},{res:"Nublado",val:"Glamour",name:"cuatro"},{res:"Granizando",val:"El ejecutivo",name:"cuatro"}]
        },{
            pregunta:"¿Elige una comida?",respuesta:[{res:"Sushi",val:"El moderno",name:"cinco"},{res:"Paella",val:"El imperial",name:"cinco"},{res:"Tacos",val:"Para compartir",name:"cinco"},{res:"Pizza",val:"Gamer set-up",name:"cinco"},{res:"Ensalada",val:"Glamour",name:"cinco"},{res:"Thai Food",val:"El ejecutivo",name:"cinco"}]
        },{
            pregunta:"Tu color favs",respuesta:[{res:"Amarillo",val:"El moderno",name:"seis"},{res:"Rojo",val:"El imperial",name:"seis"},{res:"Verde",val:"Para compartir",name:"seis"},{res:"Azul",val:"Gamer set-up",name:"seis"},{res:"Dorado",val:"Glamour",name:"seis"},{res:"Negro",val:"El ejecutivo",name:"seis"}]
        },{
            pregunta:"Ciudad que admiras",respuesta:[{res:"Dubai",val:"El moderno",name:"siete"},{res:"Roma",val:"El imperial",name:"siete"},{res:"Amsterdam",val:"Para compartir",name:"siete"},{res:"Tokio",val:"Gamer set-up",name:"siete"},{res:"Londres",val:"Glamour",name:"siete"},{res:"New York",val:"El ejecutivo",name:"siete"}]
        }
    ]
    const [dataForm, setdataForm] = useState()
    const [done, setDone] = useState(null)
    const [dbInfo, setdbInfo] = useState()
    const context = useContext(CartContext)
    const{ addKit } = context

    function handleChanges(ev) {
        setdataForm({
            ...dataForm,
            [ev.target.name]: ev.target.value
        })
    }

    const quizzForm = async (ev) =>{

        ev.preventDefault()
        console.log(dataForm)
        const newArr = Object.values(dataForm)
        console.log(newArr)

        const mode = (myArray) =>
        myArray.reduce(
        (a,b,i,arr)=>
        (arr.filter(v=>v===a).length>=arr.filter(v=>v===b).length?a:b),
         null)

         
        setDone(mode(newArr))

        const respDB = await PRODUCT_SERVICE.EL_KITTY(mode(newArr))
        setdbInfo(respDB)

    }


    console.log("la infor",dbInfo)








    return (
        <>
            {
                done?(
                <div>
            <div className="mx-auto py-12 px-4 max-w-xl sm:px-6 lg:px-8 lg:py-24">
            
            {dbInfo === undefined?(<p>Cargando ..</p>):(
                
                
                <div class="space-y-4">
                    {/* <button
                onClick={()=>addKit(dbInfo.data[0].kitProducts)}
                type="button" 
                class=" items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-yellow-300 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 relative top-5 left-40 lg:left-8">
                            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                </button> */}
                <div class="aspect-w-3 aspect-h-2">
                  <img class="object-cover shadow-lg rounded-lg" src={dbInfo.data[0].kitImage} alt=""/>
                </div>
                <div class="text-lg leading-6 font-medium space-y-1">
                <div class="text-lg">
                  <p class="text-gray-500">Wow, te tocó el kit : " {done} " , creo que es la mejor elección para ti.</p>
                </div>
                  <h3>{done}</h3>
                  <p class="text-red-600">{dbInfo.data[0].kitPrice} mxn</p>
                </div>
                
              </div>  
            )}
                  
    </div>
                    
<div class="bg-white">
  <div class="max-w-7xl mx-auto px-4 py-1 sm:px-6 lg:py-16 lg:px-8">
    <div class="py-10 px-6 bg-yellow-200 rounded-3xl sm:py-16 sm:px-12 lg:p-20 lg:flex lg:items-center">
      <div class="lg:w-0 lg:flex-1">
        <h2 class="text-3xl font-extrabold tracking-tight text-black">
          Consigue GRATIS tu home office
        </h2>
        <p class="mt-4 max-w-3xl text-lg text-yellow-800">
          Enviaremos un correo a tu jefe, padre, ó alguien que crees que pueda apoyarte en tener tu home office y si no lo consigues gratis, esperamos que consigas una ayuda.
        </p>
      </div>
      <div class="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
        <form class="sm:flex">
          <label for="emailAddress" class="sr-only">Email address</label>
          <input id="emailAddress" name="emailAddress" type="email" autocomplete="email" required class="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-700 focus:ring-white rounded-md" placeholder="Ingresa su correo"/>
          <button type="submit" class="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0">
            Enviar
          </button>
        </form>
        <p class="mt-3 text-sm text-yellow-800">
          Vale la pena intentarlo  
        </p>
      </div>
    </div>
  </div>
</div>        
                    
                </div>
            ):
            
            (
                <div class="mt-10 sm:mt-0">
                <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="mt-5 md:mt-0 md:col-span-2">
                        <h1>Elige la respuesta que más se asemeje a ti </h1>
                        <form >
                                    


                            <div class="shadow overflow-hidden sm:rounded-md">
                                            {
                                                quizz.map((ele,id)=>{
                                                    return (
                                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                    
                                        <div>
                                            <legend class="text-base font-medium text-gray-900">{ele.pregunta}</legend>
                                        </div>

                                        <div class="mt-4 space-y-4">
                                            {ele.respuesta.map((e,id)=>{
                                                return(
                                                <div class="flex items-center">
                                                <input id="push_everything" 
                                                onChange={(e)=>handleChanges(e)}
                                                name={e.name} 
                                                value={e.val}
                                                type="radio" 
                                                class="focus:ring-yellow-500 h-4 w-4 
                                                text-yellow-600
                                                 border-gray-300" />
                                                <label for="push_everything" class="ml-3 block text-sm font-medium text-gray-700">
                                                    {e.res}
                                                </label>
                                    
                                            </div>
                                                )
                                            })}
                                            
                                        </div>

                                    
                                        </div>
                                                    )
                                                })
                                            }
                                    
                                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button 
                                    onClick={(ev)=>quizzForm(ev)}
                                    type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                                        Enviar
            </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            )
                                        }
        </>
    )
}
