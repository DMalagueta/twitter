import { RefreshIcon } from '@heroicons/react/outline'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/Auth/AuthContext'
import { useApi } from '../../hooks/useApi'
import { Line } from '../../models/line'
import Post from './Post'
import TalkBox from './TalkBox'
import * as moment from 'moment';


function Main() {
  const api = useApi();
  const auth = useContext(AuthContext);
  const [allPosts, setAllPosts] = useState<Line[]>([])


  useEffect(()=>{
    const getAllPosts = async () => {
      const data = await api.getAllPosts();
      setAllPosts(data);
    }
    getAllPosts();
  },[])

  const sorted = () => {
    const sortedPosts = allPosts.sort((a,b) =>{
      return moment(b.createdAt).unix() - moment(a.createdAt).unix();
    })
    return sortedPosts;
  }


  return (
    <div className="col-span-7 lg:col-span-5 border-x border-gray-300">
        <div className="flex items-center justify-between">
            <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
            <RefreshIcon onClick={()=> { window.location.reload()}} className="h-8 w-8 cursor-pointer text-twitter mr-5 mt-5 transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
        </div>
        <div>
        </div>
        <TalkBox user={auth.user}/>
        <>
            {
              sorted().map( p =>{
                      return <Post key={p.id} line={p} remove={false} token={localStorage.getItem('authToken')} />
              })
            }
        </>
    </div>
  )
}

export default Main
