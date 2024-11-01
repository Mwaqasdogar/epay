import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'

const Layout = ({children}) => {
  return (
    <div className='bg-blue-100 font-sans antialiased w-full h-screen flex'>
      <Sidebar/>
      <div className='flex-1 p-6'>
       <Header/>
       {children}
      </div>
    </div>
  );
};

export default Layout
