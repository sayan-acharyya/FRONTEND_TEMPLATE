import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addBook, fetchAllBooks } from "../store/slices/bookSlice.js";
import { toggleAddBookPopup } from "../store/slices/popUpSlice.js";

const AddBookPopup = () => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const handleAddBook = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("author", author);
    formdata.append("price", price);
    formdata.append("quantity", quantity);
    formdata.append("description", description);

    dispatch(addBook(formdata));
    dispatch(fetchAllBooks());

  }

  return <>
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">Add New Book</h2>
        <form onSubmit={handleAddBook} className="space-y-4">

          <div>
            <label className="block mb-1 font-medium">Title</label>
            <input
              type="text"
              placeholder="Enter book title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded"
              //required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Author</label>
            <input
              type="text"
              placeholder="Enter author name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full p-2 border rounded"
              //required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Price for Borrowing</label>
            <input
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-2 border rounded"
            //  required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Quantity</label>
            <input
              type="number"
              placeholder="Enter quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full p-2 border rounded"
              //required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              placeholder="Enter book description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border rounded"
              //required
            ></textarea>
          </div>

          <div className="flex justify-end mt-6 space-x-4">
            <button
              type="button"
              onClick={()=>dispatch(toggleAddBookPopup())}
              className="text-black bg-gray-200 border border-gray-300 hover:bg-gray-300 px-4 py-2 rounded-lg   transition"
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Record
            </button>
          </div>

        </form>
      </div>
    </div>

  </>;
};

export default AddBookPopup;
