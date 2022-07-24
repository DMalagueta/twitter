import { appendFile } from 'fs';
import React, { ChangeEvent, useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useApi } from '../../hooks/useApi';

export default function SignUp() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const api = useApi();

    const [user, setUser] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
    }

    const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) =>{
        setPassword(e.target.value);
    }

    const handleNameInput = (e: ChangeEvent<HTMLInputElement>) =>{
        setName(e.target.value);
    }

    const handleSignUp = async(e:any) => {
        e.preventDefault()
        if(user && password){
           await api.createUser(user, password)
           navigate('/')
        }
    }


  return (
        <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-200 shadow-2xl "> 
                    <div className="relative sm:max-w-sm w-full">
                        <div className="card bg-gray-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                        <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                        <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                            <label htmlFor="" className="block mt-3 text-gray-700 text-center">
                                <p className="logo text-md md:text-3xl">TALK -</p> 
                            </label>
                            <form method="post" className="mt-10" action='/users'>
                                <div>
                                    <input type="text" value={user} placeholder="Username" onChange={handleEmailInput}className="mt-1 block border-2 w-full bg-gray-100 h-11 rounded-xl shadow-md hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-5" />
                                </div>
                                <div className="mt-4">
                                    <input type="text" value={name} placeholder="Name" onChange={handleNameInput}className="mt-1 block border-2 w-full bg-gray-100 h-11 rounded-xl shadow-md hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-5" />
                                </div>
    
                                
                    
                                <div className="mt-4">                
                                    <input type="password" value={password} placeholder="Password" onChange={handlePasswordInput} className="mt-1 block border-2 w-full bg-gray-100 h-11 rounded-xl shadow-md hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-5" />                           
                                </div>
                    
                                <div className="mt-7">
                                    <button onClick={handleSignUp} className="bg-gray-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                        Create Account
                                    </button>
                                </div>
                                 <div className="mt-7">
                                    <div className="flex justify-center items-center">
                                        <Link to='/' className=" text-gray-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105" >
                                            Login
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
  )
}
