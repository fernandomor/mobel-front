import React from 'react'
import { Link } from 'react-router-dom'


export default function HeroEnde() {
    return (
        <>
            <div class="bg-gray-50">
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
    <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      <span class="block">Arma tu espacio hoy</span>
      <span class="block text-helpy">para disfrutarlo mañana</span>
    </h2>
    <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <Link to={"/quizz"}>
      <div class="inline-flex rounded-md shadow">
        <p class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-helpy hover:bg-yellow-400">
          Haz el quizz
        </p>
      </div>
        </Link>
        <Link to={"/all"}>
      <div class="ml-3 inline-flex rounded-md shadow">
        <p class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-indigo-50">
          Yo lo armo
        </p>
      </div>
        </Link>
    </div>
  </div>
</div>
        </>
    )
}
