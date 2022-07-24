import { CalendarIcon, EmojiHappyIcon, LocationMarkerIcon, PhotographIcon, SearchCircleIcon } from '@heroicons/react/outline'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useApi } from '../../hooks/useApi';
import { Line } from '../../models/line';

interface TalkBoxProps{

}

function TalkBox(user:any) {

    const [text, setText] = useState('');
    const api = useApi();

    const handlePost = async() => {
        api.createPost(text, user?.user.id);
    }

  return (
    <div className="flex space-x-2 p-5">
        <img className="h-14 w-14 rounded-full object-cover mt-4" src="https://links.papareact.com/gll" alt="" />

        <div className="flex flex-1 items-center pl-2">
            <form className="flex flex-1 flex-col" >
                <textarea value={text} onChange={(e)=> {setText(e.target.value)}} className="h-24 w-full text-xl outline-none placeholder:text-xl p-3 rounded resize-none" placeholder="Post your line" />
                <div className="flex items-center">
                    <div className="flex flex-1 space-x-2 text-twitter">
                        <PhotographIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150"/>
                        <SearchCircleIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150"/>
                        <EmojiHappyIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150"/>
                        <CalendarIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150"/>
                        <LocationMarkerIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150"/>
                    </div>
                    <button disabled={!text} onClick={handlePost}
                    className="bg-blue-500 px-5 py-2 font-bold text-white rounded disabled:opacity-40 mt-2">Post</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default TalkBox