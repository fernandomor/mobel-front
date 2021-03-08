import React from 'react'
import { Link } from 'react-router-dom';

export default function navbar() {
    return (
        <>
            
<nav className="bg-white shadow-lg">
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-16">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        
      </div>
      <div className="sm:justify-start">
        <div className="flex-shrink-0 flex items-center">
          
          <img className="block h-8 w-auto" src="https://helpy.mx/assets/remastered/img/logo.svg" alt="Workflow"/>
        </div>
        
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
       
        <div className="ml-3 relative">
          <div>
            <button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
              <span className="sr-only">Open user menu</span>
              <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=J4TTyWeNKF&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
            </button>
          </div>
         
        </div>
      </div>
    </div>
  </div>

</nav>

<div>
  <dl className="mt-5 grid grid-cols-3 gap-5 ">
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5">
        <dd className="mt-1 text-3xl font-semibold text-gray-900">
          <Link to={`/admin/dashboard`}><p>admin</p></Link>
        </dd>
      </div>
    </div>

    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 ">
        <dd className="mt-1 text-3xl font-semibold text-gray-900">
        <Link to={`/`}><p>home</p></Link>
        </dd>
      </div>
    </div>

    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5">
        <dd className="mt-1 text-3xl font-semibold text-gray-900">
          24.57%
        </dd>
      </div>
    </div>
  </dl>
</div>



        </>
    )
}
