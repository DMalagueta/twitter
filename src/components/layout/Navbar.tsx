import { BellIcon, HomeIcon, LoginIcon, LogoutIcon, MailIcon, UserIcon } from '@heroicons/react/outline'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext'
import NavbarRow from './NavbarRow'

function Navbar() {
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
    window.location.href = window.location.href;
  }

  return (
    <div className="flex flex-col col-span-2 items-center px-4 md:items-start">
        <p className="m-3 logo text-md md:text-3xl">TALK -</p>
        <NavbarRow Icon={HomeIcon} title="Home" to='/' />
        <NavbarRow Icon={BellIcon} title="Notifications" to='/notifications'/>
        <NavbarRow Icon={MailIcon} title="Messages" to='/messages'/>
        <NavbarRow Icon={UserIcon} title={auth.user?.username} to={`${auth.user?.username}`}/>
        <button onClick={handleLogout} className="flex max-w-fit items-center cursor-pointer space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 trasintion-all duration-200 group">
            <LogoutIcon className="h-6 w-6"/>
            <p className="hidden md:inline-flex group-hover:text-twitter text-base font-light lg:text-lg">Logout</p>
        </button>
    </div>
  )
}

export default Navbar