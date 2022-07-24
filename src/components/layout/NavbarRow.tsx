import React, { SVGProps } from 'react'
import { Link } from 'react-router-dom'

interface NavbarRowProps{
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title: string | undefined
    to: string
}

function NavbarRow({Icon, title, to}: NavbarRowProps) {
  return (
    <Link to={to} className="flex max-w-fit items-center cursor-pointer space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 trasintion-all duration-200 group">
        <Icon className="h-6 w-6"/>
        <p className="hidden md:inline-flex group-hover:text-twitter text-base font-light lg:text-lg">{title}</p>
    </Link>
  )
}

export default NavbarRow