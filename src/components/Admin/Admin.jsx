import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

export const Admin = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleEditClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='p-4 '>
      <div className='flex justify-between mb-4'>
        <p className='text-2xl font-semibold'>Admins</p>
        <button
          onClick={handleEditClick}
          className='text-white bg-red-400 hover:bg-red-700 rounded-lg px-4 py-2'
        >
          Add sub admin
        </button>
      </div>

      <div className='grid gap-4'>
        {[...Array(4)].map((_, index) => (
          <div key={index} className='border border-gray-400 rounded-lg p-4 grid grid-cols-2 md:grid-cols-4 items-center'>
            <div className='text-center'>
              <p className='text-gray-500'>Name</p>
              <p className='font-semibold'>John Smith</p>
            </div>
            <div className='text-center'>
              <p className='text-gray-500'>Email Address</p>
              <p className='font-semibold'>johnSmith@gmail.com</p>
            </div>
            <div className='text-center'>
              <p className='text-gray-500'>Password</p>
              <p className='font-semibold'>2218ddtbs</p>
            </div>
            <div className='text-right'>
              <button className='p-2 rounded-full bg-gray-100 hover:bg-gray-200'>
                <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M10 6C11.1 6 12 5.1 12 4C12 2.9 11.1 2 10 2C8.9 2 8 2.9 8 4C8 5.1 8.9 6 10 6ZM10 10C11.1 10 12 9.1 12 8C12 6.9 11.1 6 10 6C8.9 6 8 6.9 8 8C8 9.1 8.9 10 10 10ZM10 16C11.1 16 12 15.1 12 14C12 12.9 11.1 12 10 12C8.9 12 8 12.9 8 14C8 15.1 8.9 16 10 16Z' />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className='fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white rounded-lg p-6 relative w-11/12 md:w-1/3'>
            <button onClick={closeModal} className='absolute top-2 right-2 text-gray-600'>
              <AiOutlineClose size={24} />
            </button>
            <h2 className='text-xl font-semibold mb-4'>Add sub Admin</h2>
            <form>
              <div className='mb-4'>
                <label className='block mb-1 text-gray-700'>Name</label>
                <input type='text' className='border rounded w-full py-2 px-3' placeholder='Enter Name' />
              </div>
              <div className='mb-4'>
                <label className='block mb-1 text-gray-700'>Email Address</label>
                <input type='email' className='border rounded w-full py-2 px-3' placeholder='Enter Email' />
              </div>
              <div className='mb-4'>
                <label className='block mb-1 text-gray-700'>Password</label>
                <input type='password' className='border rounded w-full py-2 px-3' placeholder='Enter Password' />
              </div>
              <button type='submit' className='bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded'>
                Add sub Admin
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
