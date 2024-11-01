import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import { TbDotsVertical } from "react-icons/tb";

export const Transactions = () => {
  const [modalOpen, setModalOpen] = useState(false); 

  const handleEditClick = () => {
    setModalOpen(true); 
  };

  const closeModal = () => {
    setModalOpen(false); 
  };

  return (
    <>
      <p className="text-2xl tracking-wide font-semibold mt-6 ml-4 sm:ml-10">Transactions</p>

      <div className="w-full sm:w-5/6 mx-auto">
        {Array(4).fill(null).map((_, idx) => (
          <div key={idx} className="border border-gray-200 rounded-2xl p-4 my-3 flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
            <div className="text-center sm:text-left text-neutral-500 w-full sm:w-auto flex-1">
              Name
              <div className="mt-1 text-slate-900 font-semibold">John Smith</div>
            </div>
            <div className="text-center sm:text-left text-neutral-500 w-full sm:w-auto flex-1">
              Email Address
              <div className="mt-1 text-slate-900 font-semibold">johnSmith@gmail.com</div>
            </div>
            <div className="text-center sm:text-left text-neutral-500 w-full sm:w-auto flex-1">
              Payment Method
              <div className="mt-1 text-slate-900 font-semibold">
                <span className="text-red-400">|</span> Payoneer
              </div>
            </div>
            <div className="text-center sm:text-left text-neutral-500 w-full sm:w-auto flex-1">
              Account
              <div className="mt-1 text-slate-900 font-semibold">
                <span className="text-red-400">|</span> $40.10
              </div>
            </div>
            <div className="text-center sm:text-left text-neutral-500 w-full sm:w-auto flex-1">
              USDT
              <div className="mt-1 text-slate-900 font-semibold">
                <span className="text-red-400">|</span> 27.6 USDT
              </div>
            </div>
            <button
              onClick={handleEditClick}
              className="bg-red-500 hover:bg-red-800 text-white font-medium rounded-lg px-4 py-2 focus:outline-none focus:ring-4 focus:ring-red-300 w-full sm:w-auto"
            >
              Release Fund
            </button>
            <button
              type="button"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300 text-gray-500 hover:text-gray-700"
              aria-label="More options"
            >
              {idx % 3 === 0 ? <HiDotsVertical /> : idx % 3 === 1 ? <TbDotsVertical /> : <BsThreeDotsVertical />}
            </button>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
            >
              <AiOutlineClose size={24} />
            </button>
            <h2 className="text-xl font-semibold mb-4">Edit Coin Details</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email Address
                </label>
                <input
                  type="text"
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  USDT Value
                </label>
                <input
                  type="text"
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter USDT value"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Order Limit
                </label>
                <div className="flex space-x-4">
                  <input
                    type="text"
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter Min order"
                  />
                  <input
                    type="text"
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter Max order"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Transactions;
