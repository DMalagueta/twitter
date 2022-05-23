import React, { useEffect } from 'react'

import { HeartIcon, ShareIcon } from '@heroicons/react/outline';

export default function Post(props:any) {
    const {name, nick, post, hashtag, likes} = props.data;
   

  return (
    <>      
            <div className="flex flex-col bg-white px-5 py-2 rounded-lg relative mb-5">
                <div className="w-full p-4 border-b hover:bg-lighter flex">
                    <div className="flex-none mr-4">
                        <img src={`https://randomuser.me/api/portraits/women/${props.random}.jpg`} className="h-12 w-12 rounded-full flex-none"/>
                    </div>
                        <div className="w-full relative">
                            <div className="flex items-start w-full flex-col">
                                <p className="font-semibold">{name}</p>
                                <p className="text-sm text-dark block">@{nick}</p>
                                <i className="fas fa-angle-down text-dark ml-auto"></i>
                                <p className="absolute right-0 bottom-0 text-blue-400">{hashtag}</p>
                            </div>
                        </div>
                </div>
                    <p className="p-5">{post}</p>
                    <div className="absolute right-0 bottom-0 m-5">
                        <div className="inline text-[10px]">
                            <HeartIcon className="h-5 w-5 inline mr-1"/>
                            <p className="inline align-middle">{likes}</p>
                        </div>
                        <ShareIcon className="h-5 w-5 inline ml-2"/>
                    </div>
             </div>
        </>
  )
}
