// import React from 'react'
// import { useDispatch } from 'react-redux'
// import { toggleReadBookPopup } from '../store/slices/popUpSlice.js';

// const ReadBookPopup = ({ book }) => {
//   const dispatch = useDispatch();
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 p-5 flex items-center justify-center z-50">
//       <div className="w-11/12 bg-white rounded-lg shadow-lg sm:w-1/2 lg:w-1/3 2xl:w-1/3">
//         <div className='flex justify-between items-center bg-black text-white px-6 py-4 rounded-t-lg '>
//           <h2 className='text-white text-lg font-bold'

//           >
//             View Book Info
//           </h2>
//           <button
//             className='text-white text-2xl font-bold '
//             onClick={() => dispatch(toggleReadBookPopup())}>&times;</button>
//         </div>

//         <div className='p-6'>
//           <div className='mb-4'>
//             <label>
//               Book Title
//             </label>
//             <p className='border border-gray-300 rounded-lg px-4 py-2 bg-gray-100'>
//               {book.title}
//             </p>
//           </div>
//         </div>



//       </div>
//     </div>
//   )
// }

// export default ReadBookPopup
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleReadBookPopup } from '../store/slices/popUpSlice.js';

const ReadBookPopup = ({ book }) => {
  const dispatch = useDispatch();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 p-5 flex items-center justify-center z-50">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg overflow-auto">
        {/* Header */}
        <div className="flex justify-between items-center bg-black text-white px-6 py-4 rounded-t-lg">
          <h2 className="text-lg font-bold">View Book Info</h2>
          <button
            aria-label="Close popup"
            className="text-white text-2xl font-bold"
            onClick={() => dispatch(toggleReadBookPopup())}
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Book Title
            </label>
            <p className="border border-gray-300 rounded-lg px-4 py-2 bg-gray-100">
              {book.title}
            </p>
          </div>

          {/* Add more book details as needed */}
          {book.author && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Author
              </label>
              <p className="border border-gray-300 rounded-lg px-4 py-2 bg-gray-100">
                {book.author}
              </p>
            </div>
          )}
          {book.description && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <p className="border border-gray-300 rounded-lg px-4 py-2 bg-gray-100">
                {book.description}
              </p>
            </div>
          )}
        </div>
        <div className='flex justify-end px-6 py-4 bg-gray-100 rounded-b-lg'>
          <button
            onClick={() => dispatch(toggleReadBookPopup())}
            className='px-4 py-2 bg-black text-white rounded-lg font-semibold hover:bg-gray-800'>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ReadBookPopup;
