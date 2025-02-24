import React from 'react'

const Header: React.FC = () => {
  return (
    <header className='fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50'>
      <nav className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>DV8 Water</h1>
        <ul className='flex space-x-6'>
          <li>
            <a href='#home' className='hover:text-blue-400 transition'>
              Home
            </a>
          </li>
          <li>
            <a href='#solutions' className='hover:text-blue-400 transition'>
              Solutions
            </a>
          </li>
          <li>
            <a href='#contact' className='hover:text-blue-400 transition'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
