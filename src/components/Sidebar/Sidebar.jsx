import React, { useState } from 'react';
import epay from '../../assets/epay.png';
import icon from '../../assets/icon.png';
import admin from '../../assets/admin.png';
import inbox from '../../assets/inbox.png';
import logout from '../../assets/logout.png';
import transection from '../../assets/transection.png';
import { useNavigate } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const moveon = useNavigate();

  const toggleSidebar = () => setIsOpen(!isOpen);

  function gotopage() {
    moveon("/coin");
  }

  function gototrans() {
    moveon("/Transations");
  }

  function gotologin() {
    moveon("/");
  }

  function gotoadmin() {
    moveon("/admin");
  }

  return (
    <>
      
      <button 
        onClick={toggleSidebar} 
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-red-500 text-white rounded-full"
      >
        <AiOutlineMenu size={24} />
      </button>

      
      <div
        className={`fixed top-0 left-0 h-full bg-gray-300 p-4 w-52 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:relative z-40`}
      >
        <div><img src={epay} alt="Epay" /></div>
        
        <span onClick={gotopage} className="cursor-pointer bg-red-500 text-white p-2 rounded-lg flex items-center space-x-4">
          <img src={icon} alt="Icon" /> <span>Coin</span>
        </span>
        <span onClick={gototrans} className="cursor-pointer hover:bg-white hover:text-[#9197B3] text-[#9197B3] p-2 rounded-lg flex items-center space-x-3">
          <img src={transection} alt="Transaction" /> <span>Transactions</span>
        </span>
        <span onClick={gotoadmin} className="cursor-pointer hover:bg-white hover:text-[#9197B3] text-[#9197B3] p-2 rounded-lg flex items-center space-x-3">
          <img src={admin} alt="Admin" /> <span>Admin</span>
        </span>
        <span className="cursor-pointer hover:bg-white hover:text-[#9197B3] text-[#9197B3] p-2 rounded-lg flex items-center space-x-3">
          <img src={inbox} alt="Inbox" /> <span>Inbox</span>
        </span>
        <span onClick={gotologin} className="cursor-pointer hover:bg-white hover:text-[#9197B3] text-[#9197B3] mt-auto p-2 rounded-lg flex items-center space-x-3">
          <img src={logout} alt="Logout" /> <span>Logout</span>
        </span>
      </div>
    </>
  );
}

export default Sidebar;
