
function Messages() {
  return (
    <div className="col-span-7 lg:col-span-5 border-x border-gray-300">
        <div className="flex items-center justify-between">
            <h1 className="p-5 pb-0 text-xl font-extrabold mb-5">Messages</h1>
        </div>
        
        <div className="flex flex-col space-x-3 border-y p-5 border-gray-300">
            <div className="flex space-x-3">
                <img className="h-10 w-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/10.jpg" alt="" />

                <div>
                    <div className="flex items-center space-x-1">
                        <p className="mr-1 font-bold">Username</p>
                        <p className="hidden text-sm text-gray-500 sm:inline">@username</p>
                        <p className="text-sm text-gray-500">5 min</p>
                    </div>
                    <p className="pt-1 font-medium text-sm">Message</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Messages