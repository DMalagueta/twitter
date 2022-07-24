import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useApi } from '../../hooks/useApi';
import { Line } from '../../models/line';
import Post from './Post';

function Profile() {
  const api = useApi();
  const auth = useContext(AuthContext);
  
  const [allPosts, setAllPosts] = useState<Line[]>([])
 

  useEffect(()=>{
    const getAllPosts = async () => {
      const data = await api.getPostsFromUser(auth.user?.id);
      console.log(data);
      setAllPosts(data);
    }
    getAllPosts();
  },[]);

  const sorted = () => {

    const sortedPosts = allPosts.sort((a,b) =>{
      return moment(b.createdAt).unix() - moment(a.createdAt).unix();
    })
    return sortedPosts;
  }

  return (
    <div className="col-span-7 lg:col-span-5 border-x border-gray-300">
        <div className="flex items-center justify-between">
            <h1 className="p-3 text-xl font-bold capitalize">{auth.user?.username}</h1>
        </div>
        <div className="">
            <div className="container lg:w-full xl:w-full sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out">
                <div className=" h-32 overflow-hidden" >
                    <img className="w-full" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
                </div>
                <div className="flex justify-center px-5  -mt-12">
                    <img className="h-32 w-32 bg-white p-2 rounded-full   " src="https://links.papareact.com/gll" alt="" />

                </div>
                <div className=" ">
                    <div className="text-center px-14">
                        <h2 className="text-gray-800 text-3xl font-bold capitalize">{auth.user?.username}</h2>
                        <p className="text-gray-400 mt-2">@{auth.user?.username}</p>
                        <p className="mt-2 font-light text-gray-600">Write a descrition here</p>
                    </div>
                    <hr className="mt-6" />
                    <div className="flex  bg-gray-50 ">
                        <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                            <p><span className="font-semibold">{auth.user?.followerCount} </span> Followers</p>
                        </div>
                        <div className="border"></div>
                        <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                            <p> <span className="font-semibold">{auth.user?.followeeCount}</span> Following</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div>
            <h1 className="font-semibold p-5">Lines Posted</h1>
            <>
            {
              sorted().map( p =>{
                      return <Post key={p.id} line={p} remove={true} />
              })
            }
        </>
        </div>
    </div>
  )
}

export default Profile