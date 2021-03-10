import React from 'react'

export default function Hero() {
    return (
        <>
            
  <main className="lg:relative">
    <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
      <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          <span className="block xl:inline">Bienvenido a tu </span>
          <span className="block text-helpy xl:inline">Home Office </span>
          <span className="block xl:inline">ideal </span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
          Tener un espacio de trabajo a tu estilo y funcional es la nueva realidad. Descúbre tu home office ideal, contestando una pequeña encuesta.
        </p>
        <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <p className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-700 md:py-4 md:text-lg md:px-10">
              Haz el quiz
            </p>
          </div>
          
        </div>
      </div>
    </div>
    <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
      <img className="absolute inset-0 w-full h-full object-cover" src="./hero.png" alt=""/>
    </div>
  </main>


        </>
    )
}