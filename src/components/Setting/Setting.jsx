import React from 'react'

function Setting() {
    return (
        <>
            <p className='text-2xl font-semibold mt-2 ml-10'>Setting</p>
            <div className='w-full h-36  bg-white rounded-2xl mt-4'>
                <div className='flex w-full   space-x-6 p-4 '>
                <div className='w-[50%]'>
                <label className='text-gray-400 flex font-semibold'>Transection limt</label> 
                    <input
                        type="text "
                        className='border rounded w-full py-1 text-gray-700 '
                    />
                     </div>
                     <div className='w-[50%]'>
                   <label className='text-gray-400 flex font-semibold'>Transaction per Day</label>
                    <input
                        type="text"
                        className='border rounded w-full py-1 text-gray-700 '

                    />
                    <div className='mt-3'>
                    <button
                    type='submit'
                    className='bg-red-500  hover:bg-red-700 text-white font-bold py-2
                         px-2 rounded float-end '
                  >
                    Save Changes
                  </button>
                    </div>
                    
                      </div>
                </div>
            </div>
        </>
    )
}

export default Setting
