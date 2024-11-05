import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

function Coin() {
  const [modalOpen, setModalOpen] = useState(false); 

  const handleEditClick = () => {
    setModalOpen(true); 
  };

  const closeModal = () => {
    setModalOpen(false); 
  };

  return (
    <>
      <div className="container mx-auto px-4 ">
      <p className="text-2xl tracking-wide font-semibold mt-6 ml-4 sm:ml-10">Coin</p>
        <div className="flex justify-center sm:justify-start">
          <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 mt-10 p-4 border border-gray-300 rounded-xl shadow-md bg-white">
            <div className="flex flex-wrap justify-between items-center text-center text-neutral-500">
              <div className="w-full sm:w-1/3 md:w-1/4 p-2">
                Coin Name 
                <div className="mt-1 text-slate-900 font-bold">Epay</div>
              </div>
              <div className="w-full sm:w-1/3 md:w-1/4 p-2">
                USDT
                <div className="mt-1 text-slate-900 font-bold">1 USDT</div>
              </div>
              <div className="w-full sm:w-1/3 md:w-1/4 p-2">
                Order Limit
                <div className="mt-1 text-slate-900 font-bold">400-10,000</div>
              </div>
              <div className="w-full sm:w-auto mt-4 sm:mt-0">
                <button
                  type="button"
                  onClick={handleEditClick}
                  className="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 sm:px-6 py-2.5"
                >
                  Edit Details
                </button>
              </div>
            </div>
          </div>
        </div>

        {modalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="relative bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-8/12 md:w-6/12 lg:w-5/12">
              
              <button
                className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
                onClick={closeModal}
              >
                <AiOutlineClose size={24} />
              </button>

              <h2 className="text-xl sm:text-2xl font-bold mb-4">Edit Coin Details</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Coin Name
                  </label>
                  <input
                    type="text"
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter coin name"
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
                  <div className="flex flex-row space-x-4">
                    <input
                      type="text"
                      className="border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Min order"
                    />
                    <input
                      type="text"
                      className="border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Max order"
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
      </div>
    </>
  );
}

export default Coin;
