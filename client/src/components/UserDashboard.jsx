import React, { useEffect, useState } from "react";
import logo_with_title from "../assets/logo-with-title-black.png";
import returnIcon from "../assets/redo.png";
import browseIcon from "../assets/pointing.png";
import bookIcon from "../assets/book-square.png";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement,
} from "chart.js";
import logo from "../assets/black-logo.png";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement
);
import { useDispatch, useSelector } from "react-redux"
import Header from "../layout/Header";
const UserDashboard = () => {
  const dispatch = useDispatch();
  const { settingPopup } = useSelector(state => state.popup);
  const { userBorrowedBooks } = useSelector(state => state.borrow);

  const [totalBorrowedBooks, setTotalBorrowedBooks] = useState(0);
  const [totalReturnedBooks, setTotalReturnedBooks] = useState(0);


  useEffect(() => {
    let numberofTotalBorrowedBooks = userBorrowedBooks.filter(
      (book) => book.returned === false
    );
    let numberofTotalreturnedBooks = userBorrowedBooks.filter(
      (book) => book.returned === true
    );
    setTotalBorrowedBooks(numberofTotalBorrowedBooks.length);
    setTotalReturnedBooks(numberofTotalreturnedBooks.length);
  }, [userBorrowedBooks]);

  const data = {
    labels: ["Total Borrowed Books", "Total Returned Books"],
    datasets: [
      {
        data: [totalBorrowedBooks, totalReturnedBooks],
        backgroundColor: ["#3D3E3E", "#151619"],
        hoverOffset: 4,
      },
    ],
  };

  return <>
    <main className="relative flex-1 p-6 pt-28 bg-gray-50 min-h-screen">
      <Header />

      <div className="flex flex-col xl:flex-row gap-8">
        {/* Left Side */}
        <div className="flex-1 flex flex-col gap-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              { icon: bookIcon, text: "Your Borrowed Book List" },
              { icon: returnIcon, text: "Your Returned Book List" },
              { icon: browseIcon, text: "Browse Books Inventory" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-white p-5 rounded-lg shadow hover:shadow-lg transition"
              >
                <div className="bg-gray-300 rounded-lg p-3 flex items-center justify-center">
                  <img className="w-8 h-8" src={item.icon} alt="icon" />
                </div>
                <p className="text-lg font-semibold">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-2xl shadow text-center text-lg font-semibold">
            <h4 className="text-xl sm:text-2xl lg:text-3xl leading-relaxed">
              "BookWorm Library offers thousands of books across genres. Easily browse, borrow, and enjoy reading anytime, anywhere."
            </h4>
            <p className="mt-4 text-gray-600 text-sm">~ BookWorm Team</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center gap-10">
          <div className="bg-white p-6 rounded-2xl shadow w-full max-w-md">
            <Pie data={data} options={{ cutout: "70%" }} />
          </div>

          <div className="bg-white p-6 rounded-lg shadow flex items-center gap-6">
            <img className="w-16 h-auto" src={logo} alt="logo" />
            <div>
              <p className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#3D3E3E]" /> Total Borrowed
              </p>
              <p className="flex items-center gap-3 mt-2">
                <span className="w-3 h-3 rounded-full bg-[#151619]" /> Total Returned
              </p>
            </div>
          </div>

          <img
            className="hidden lg:block w-48"
            src={logo_with_title}
            alt="BookWorm Logo"
          />
        </div>
      </div>
    </main>


  </>;
};

export default UserDashboard;







// import React, { useEffect, useState } from "react";
// import logo_with_title from "../assets/logo-with-title-black.png";
// import returnIcon from "../assets/redo.png";
// import browseIcon from "../assets/pointing.png";
// import bookIcon from "../assets/book-square.png";
// import { Pie } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   LineElement,
//   PointElement,
//   ArcElement,
// } from "chart.js";
// import logo from "../assets/black-logo.png";
// import { useSelector } from "react-redux";
// import Header from "../layout/Header";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   LineElement,
//   PointElement,
//   ArcElement
// );

// const UserDashboard = () => {
//   const { userBorrowedBooks } = useSelector((state) => state.borrow);

//   const [totalBorrowedBooks, setTotalBorrowedBooks] = useState(0);
//   const [totalReturnedBooks, setTotalReturnedBooks] = useState(0);

//   useEffect(() => {
//     setTotalBorrowedBooks(userBorrowedBooks.filter((b) => !b.returned).length);
//     setTotalReturnedBooks(userBorrowedBooks.filter((b) => b.returned).length);
//   }, [userBorrowedBooks]);

//   const data = {
//     labels: ["Borrowed", "Returned"],
//     datasets: [
//       {
//         data: [totalBorrowedBooks, totalReturnedBooks],
//         backgroundColor: ["#3D3E3E", "#151619"],
//         hoverOffset: 6,
//       },
//     ],
//   };

//   return (
//     <main className="relative flex-1 p-6 pt-28 bg-gray-50 min-h-screen">
//       <Header />

//       <div className="flex flex-col xl:flex-row gap-8">
//         {/* Left Side */}
//         <div className="flex-1 flex flex-col gap-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {[
//               { icon: bookIcon, text: "Your Borrowed Book List" },
//               { icon: returnIcon, text: "Your Returned Book List" },
//               { icon: browseIcon, text: "Browse Books Inventory" },
//             ].map((item, idx) => (
//               <div
//                 key={idx}
//                 className="flex items-center gap-4 bg-white p-5 rounded-lg shadow hover:shadow-lg transition"
//               >
//                 <div className="bg-gray-300 rounded-lg p-3 flex items-center justify-center">
//                   <img className="w-8 h-8" src={item.icon} alt="icon" />
//                 </div>
//                 <p className="text-lg font-semibold">{item.text}</p>
//               </div>
//             ))}
//           </div>

//           <div className="bg-white p-6 rounded-2xl shadow text-center text-lg font-semibold">
//             <h4 className="text-xl sm:text-2xl lg:text-3xl leading-relaxed">
//               "BookWorm Library offers thousands of books across genres. Easily browse, borrow, and enjoy reading anytime, anywhere."
//             </h4>
//             <p className="mt-4 text-gray-600 text-sm">~ BookWorm Team</p>
//           </div>
//         </div>

//         {/* Right Side */}
//         <div className="flex flex-col items-center gap-10">
//           <div className="bg-white p-6 rounded-2xl shadow w-full max-w-md">
//             <Pie data={data} options={{ cutout: "70%" }} />
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow flex items-center gap-6">
//             <img className="w-16 h-auto" src={logo} alt="logo" />
//             <div>
//               <p className="flex items-center gap-3">
//                 <span className="w-3 h-3 rounded-full bg-[#3D3E3E]" /> Total Borrowed
//               </p>
//               <p className="flex items-center gap-3 mt-2">
//                 <span className="w-3 h-3 rounded-full bg-[#151619]" /> Total Returned
//               </p>
//             </div>
//           </div>

//           <img
//             className="hidden lg:block w-48"
//             src={logo_with_title}
//             alt="BookWorm Logo"
//           />
//         </div>
//       </div>
//     </main>
//   );
// };

// export default UserDashboard;
