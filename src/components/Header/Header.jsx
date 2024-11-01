import React from 'react';
import { IoSearch } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import Sidebar from '../Sidebar/Sidebar';
import Ellipse from "../../assets/Ellipse.png";
import Group from '../../assets/Group.png';

function Header() {
  return (
    <>
      <div className='w-full h-20 flex items-center px-4 md:px-8'>
        <div className='w-full flex flex-col md:flex-row items-center'>
          
          <div className="relative w-full max-w-xs md:mx-8 my-2 md:my-6 font-[sans-serif] text-gray-500">
            <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          
          <div className='flex flex-row items-center mt-2 md:mt-0 md:ml-auto gap-x-4 md:gap-x-6'>
            
            <div className='flex items-center space-x-2'>
              <img src={Ellipse} alt="User Icon" className='w-8 h-8 md:w-10 md:h-10' />
              <img src={Group} alt="Group Icon" className='w-8 h-8 md:w-10 md:h-10' />
            </div>

            
            <CiSettings className='w-6 h-6 md:w-8 md:h-8 text-gray-600 cursor-pointer' />
            <GoBell className='w-6 h-6 md:w-8 md:h-8 text-gray-600 cursor-pointer' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
