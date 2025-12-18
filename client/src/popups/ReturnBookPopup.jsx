import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { returnBook } from '../store/slices/borrowSlice';
import { toggleRecordBookPopup, toggleReturnBookPopup } from '../store/slices/popUpSlice';


const ReturnBookPopup = ({ bookId, email }) => {
  const dispatch = useDispatch();

  const handleReturnBook = (e) => {
    e.preventDefault();
    dispatch(returnBook(email, bookId));
    dispatch(toggleReturnBookPopup());
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 p-5 flex items-center justify-center z-50">
      <div className="w-full  bg-white rounded-lg shadow-lg  md:w-1/3">
        <div className='p-6'>
          <h3 className='text-xl font-bold mb-4'>Return Book</h3>
          <form onSubmit={handleReturnBook}>
            <div className='mb-4'>
              <label className='block text-gray-900 font-medium'>User Email</label>
              <input
                type="email"
                defaultValue={email}
                 disabled
                placeholder='Enter email'
                className='w-full px-4 py-2 border border-black rounded-md mt-2'
              />
            </div>
            <div className='flex gap-4 justify-end'>
              <button

                class="bg-gray-300  text-black font-bold px-4 py-2   hover:bg-gray-400 transition rounded-lg"
                type='button'
                onClick={() => {
                  dispatch(toggleReturnBookPopup())
                }}>
                Close
              </button>
              <button
                type="submit"
                className="bg-black text-white px-4  font-semibold py-2 rounded-lg hover:bg-gray-800 transition">
                Return
              </button>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ReturnBookPopup
