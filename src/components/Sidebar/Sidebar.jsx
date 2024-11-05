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
  const [selectedItem, setSelectedItem] = useState(""); 
  const navigate = useNavigate();

  const toggleSidebar = () => setIsOpen(!isOpen);

  function handleNavigation(path, label) {
    setSelectedItem(label); 
    navigate(path);
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
        className={`fixed top-0 left-0 h-full bg-gray-300 p-4 w-52 transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:relative z-40 flex flex-col`}
      >
        <div className="flex justify-center mb-6">
          <img src={epay} alt="Epay" className="w-52 h-auto" />
        </div>


        <div className="flex flex-col flex-1 space-y-4">
          <span 
            onClick={() => handleNavigation("/coin", "Coin")} 
            className={`cursor-pointer p-2 rounded-lg flex items-center space-x-4 ${
              selectedItem === "Coin" ? "bg-red-500 " : "text-[#9197B3] hover:bg-white hover:text-[#9197B3]"
            }`}
          >
            <img className='text-[#9197B3]' src={icon} alt="Icon" /> <span>Coin</span>
          </span>

          <span 
            onClick={() => handleNavigation("/Transations", "Transactions")} 
            className={`cursor-pointer p-2 rounded-lg flex items-center space-x-3 ${
              selectedItem === "Transactions" ? "bg-red-500 text-white" : "text-[#9197B3] hover:bg-white hover:text-[#9197B3]"
            }`}
          >
            <img className='hover:bg-white' src={transection} alt="Transaction" /> <span>Transactions</span>
          </span>

          <span 
            onClick={() => handleNavigation("/admin", "Admin")} 
            className={`cursor-pointer p-2 rounded-lg flex items-center space-x-3 ${
              selectedItem === "Admin" ? "bg-red-500 text-white" : "text-[#9197B3] hover:bg-white hover:text-[#9197B3]"
            }`}
          >
            <img src={admin} alt="Admin" /> <span>Admin</span>
          </span>

          <span 
            onClick={() => setSelectedItem("Inbox")}
            className={`cursor-pointer p-2 rounded-lg flex items-center space-x-3 ${
              selectedItem === "Inbox" ? "bg-red-500 text-white" : "text-[#9197B3] hover:bg-white hover:text-[#9197B3]"
            }`}
          >
            <img src={inbox} alt="Inbox" /> <span>Inbox</span>
          </span>
        </div>

        
        <span 
          onClick={() => handleNavigation("/", "Logout")} 
          className={`cursor-pointer p-2 rounded-lg flex items-center space-x-3 ${
            selectedItem === "Logout" ? "bg-red-500 text-white" : "text-[#9197B3] hover:bg-white hover:text-[#9197B3]"
          }`}
        >
          <img src={logout} alt="Logout" /> <span>Logout</span>
        </span>
      </div>
    </>
  );
}

export default Sidebar;
