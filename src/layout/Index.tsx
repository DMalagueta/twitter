import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Login from './Login'


export default function Index() {
        return (
            <>  
                <Navbar />
                <Outlet></Outlet>
            </>
          )

}
