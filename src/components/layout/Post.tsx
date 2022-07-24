import React, { useContext, useEffect, useState } from 'react'
import { TrashIcon, HeartIcon } from '@heroicons/react/outline'
import * as moment from 'moment';
import { useApi } from '../../hooks/useApi';


const api = useApi();

export default function Post( { line , remove, token } : any) {

  const [likes, setLikes] = useState('');
  const [alert, setAlert] = useState(false);

  const handleDelete = async () => {
    await api.deletePost(line.id);
    window.location.reload();
    return console.log('deleted');

  }

  const handleLike = async () => {
    await api.likePost(token, line.id) 
    window.location.reload()
  }

  return (
    <div className="flex flex-col space-x-3 border-y p-5 border-gray-300">
        <div className="flex space-x-3">
            <img className="h-10 w-10 rounded-full object-cover" src="https://links.papareact.com/gll" alt="" />
            <div>
               <div className="flex items-center space-x-1">
                    <p className="mr-1 font-bold capitalize">{line.author.username}</p>
                    <p className="hidden text-sm text-gray-500 sm:inline font-semibold">@{line.author.username}</p> 
                    <p className="text-sm font-light text-gray-500">{moment(line.createdAt).format("llll")}</p>

                </div>
                <p className="pt-1">{line.text}</p>
                
            </div>
            
        </div>
        
      <div className="pt-2">
          <p className="text-sm inline mr-2">{line.likeCount}</p>
          <button onClick={()=> {handleLike()}}><HeartIcon className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150 inline mr-5'></HeartIcon></button>
          {remove ? <button onClick={() => handleDelete()}><TrashIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150 inline"/></button> : null}
      </div>

        
        
    </div>
  )
}
