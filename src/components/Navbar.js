import React from 'react'
import logo from '../Media/bear.png'

const Navbar = () => {
  return (
    <div className="bg-gray-700">
      <div className="px-8 h-16 flex items-center">
        <img src={logo} className="h-8 w-8" alt="logo" />
        <p className="text-white font-bold">Flash Card</p>

      </div>

    </div>
  )
}

export default Navbar