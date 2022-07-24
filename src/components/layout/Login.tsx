import { ChangeEvent, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export default function login() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate()

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
    }

    const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) =>{
        setPassword(e.target.value);
    }

    const handleLogin = async(e:any) => {
        e.preventDefault()
        if(user && password){
            const isLogged = await auth.signin(user, password);
            if(isLogged){
                navigate('/');
            } else {
                alert('Wrong');
            }
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
                        <form method="#" className="mt-10">
                            <div>
                                <input type="text" value={user} placeholder="Username" onChange={handleEmailInput}className="mt-1 block border-2 w-full bg-gray-100 h-11 rounded-xl shadow-md hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-5" />
                            </div>
                
                            <div className="mt-7">                
                                <input type="password" value={password} placeholder="password" onChange={handlePasswordInput} className="mt-1 block border-2 w-full bg-gray-100 h-11 rounded-xl shadow-md hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-5" />                           
                            </div>
                
                            <div className="mt-7">
                                <button onClick={handleLogin} className="bg-gray-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                    Login
                                </button>
                            </div>
                             <div className="mt-7">
                                <div className="flex justify-center items-center">
                                    <Link to='/signup' className=" text-gray-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105" >
                                        Create Account
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
  )
}
