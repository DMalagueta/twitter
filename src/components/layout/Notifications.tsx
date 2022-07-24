import { BellIcon } from '@heroicons/react/outline'
import React from 'react'

function Notifications() {
  return (
    <div className="col-span-7 lg:col-span-5 border-x border-gray-300">
        <div className="flex items-center p-5">
            <BellIcon className="h-5 w-5 mr-2"/>
            <h1 className=" text-xl font-extrabold">Notifications</h1>
        </div>
        
        <div>
        </div>

    </div>
  )
}

export default Notifications