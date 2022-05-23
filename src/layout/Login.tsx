
export default function login() {
  return (
    <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 shadow-2xl ">
                <div className="relative sm:max-w-sm w-full">
                    <div className="card bg-gray-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                    <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                    <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                        <label htmlFor="" className="block mt-3text-gray-700 text-center font-semibold text-xl">
                            Sign In
                        </label>
                        <form method="#" action="#" className="mt-10">
                                           
                            <div>
                                <input type="email" placeholder="Email" className="mt-1 block border-2 w-full bg-gray-100 h-11 rounded-xl shadow-md hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-5" />
                            </div>
                
                            <div className="mt-7">                
                                <input type="password" placeholder="Password" className="mt-1 block border-2 w-full bg-gray-100 h-11 rounded-xl shadow-md hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-5" />                           
                            </div>
                
                            <div className="mt-7">
                                <button className="bg-gray-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                    Login
                                </button>
                            </div>
                             <div className="mt-7">
                                <div className="flex justify-center items-center">
                                    <a href="#" className=" text-gray-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                        Create Account
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
  )
}
