import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'

function SideContent() {
  return (
    <div className="mt-2 px-2 hidden lg:inline col-span-2">
        <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-full">
            <SearchIcon className="h-5 w-5 text-gray-400"/>
            <input type="text" placeholder="Search Line" className="flex-1 outline-none bg-transparent" />
        </div>
        <div className="flex flex-col items-start space-x-2 p-3 bg-gray-100 mt-4 rounded-xl">
            <h1 className="font-bold text-lg">Top content</h1>
            <div>
              <p className="text-gray-400 mt-3 text-xs">Most Liked</p>
              <p>#weather</p>
            </div>

        </div>
    </div>
  )
}

export default SideContent