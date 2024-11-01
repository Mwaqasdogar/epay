import React from 'react'

import epay from '../../assets/epay.png'
import icon from '../../assets/icon.png'
import admin from '../../assets/admin.png'
import inbox from '../../assets/inbox.png'
import logout from '../../assets/logout.png'
import transection from '../../assets/transection.png'


function Sidebar() {
  return (
    <>
      <div className="container w-52 bg-gray-300 p-4 h-screen  ">
        
        <div><img src={ epay} alt="" /></div>
        
        <h1 className=' cursor-pointer   bg-red-500 text-white p-2 rounded-lg flex flex-row items-center space gap-4'> <img src={icon} alt="" />Coin</h1>
        <h1 className='cursor-pointer hover:bg-white hover:text-[#9197B3] text-[#9197B3] p-2 rounded-lg flex flex-row items-center space gap-x-3 '  > <img className='' src={transection} alt="" />Transection</h1>
        <h1  className='cursor-pointer hover:bg-white hover:text-[#9197B3] text-[#9197B3] p-2 rounded-lg flex flex-row items-center space gap-x-3 ' > <img src={admin} alt="" />Admin</h1>
        <h1  className=' cursor-pointer hover:bg-white hover:text-[#9197B3] text-[#9197B3] p-2 rounded-lg flex flex-row items-center space gap-x-3 '> <img src={inbox} alt="" />Inbox</h1>
        <h1 className=' cursor-pointer hover:bg-white hover:text-[#9197B3] mt-80  p-2 rounded-lg flex flex-row items-center space gap-x-3  ' > <img src={logout} alt="" />Logout</h1>
        </div>
        <div className="container">
          <div className='row bg-black text-white '>
            
          <input type="text" />
          </div>


        </div>
    </>
  )
}

export default Sidebar
