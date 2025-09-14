// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";

// const BookingConfirmationPage = () => {
//   const [bookingDetails, setBookingDetails] = useState<any>(null);
//   const router = useRouter();
//   useEffect(() => {
//     const bookingData = localStorage.getItem("selectedArtist");
//     if (bookingData) {
//       setBookingDetails(JSON.parse(bookingData));
//     } else {
//       router.push("/");
//     }
//   }, [router]);

//   if (!bookingDetails) {
//     return null;
//   }

//   return (
//     <div className="min-h-screen bg-white text-black p-6 md:p-12 font-sans">
//       <div className="container mx-auto max-w-4xl">
//         {/* Header Section */}
//         <header className="text-center mb-12">
//           <motion.h1
//             className="text-4xl md:text-5xl font-extrabold text-[#ff3479] mb-4"
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             Booking Confirmed!
//           </motion.h1>
//           <motion.p
//             className="text-lg md:text-xl text-gray-500 mb-8"
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             Thank you for booking with us. Here are the details of your
//             appointment.
//           </motion.p>
//         </header>

//         {/* Artist Info Section */}
//         <div className="bg-[#f8f8f8] p-6 rounded-xl shadow-lg mb-12">
//           <h2 className="text-2xl font-semibold text-[#333] mb-4">
//             Artist Info
//           </h2>
//           <div className="flex items-center gap-6">
//             {bookingDetails?.artistImage ? (
//               <img
//                 src={bookingDetails?.artistImage}
//                 alt={bookingDetails?.artistName}
//                 className="w-24 h-24 rounded-full object-cover border-2 border-[#ff3479]"
//               />
//             ) : (
//               <div className="w-24 h-24 rounded-full flex items-center justify-center bg-[#ff3479] text-white text-2xl font-bold">
//                 {bookingDetails?.artistInitials}
//               </div>
//             )}
//             <div>
//               <h3 className="text-xl font-semibold">
//                 {bookingDetails?.artistName}
//               </h3>
//               <p className="text-lg text-gray-500">
//                 {bookingDetails?.artistCategory}
//               </p>
//               <p className="text-lg text-gray-500">
//                 Price: {bookingDetails?.artistPrice}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* User Info Section */}
//         <div className="bg-[#f8f8f8] p-6 rounded-xl shadow-lg mb-12">
//           <h2 className="text-2xl font-semibold text-[#333] mb-4">Your Info</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label htmlFor="name" className="text-lg text-[#333]">
//                 Full Name
//               </label>
//               <p className="mt-2 text-black">{bookingDetails?.userName}</p>
//             </div>
//             <div>
//               <label htmlFor="email" className="text-lg text-[#333]">
//                 Email
//               </label>
//               <p className="mt-2 text-black">{bookingDetails?.userEmail}</p>
//             </div>
//             <div>
//               <label htmlFor="phone" className="text-lg text-[#333]">
//                 Phone
//               </label>
//               <p className="mt-2 text-black">{bookingDetails?.userPhone}</p>
//             </div>
//           </div>
//         </div>

//         {/* Booking Details Section */}
//         <div className="bg-[#f8f8f8] p-6 rounded-xl shadow-lg mb-12">
//           <h2 className="text-2xl font-semibold text-[#333] mb-4">
//             Booking Details
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label htmlFor="bookingDate" className="text-lg text-[#333]">
//                 Booking Date
//               </label>
//               <p className="mt-2 text-black">{bookingDetails?.bookingDate}</p>
//             </div>
//             <div>
//               <label htmlFor="bookingTime" className="text-lg text-[#333]">
//                 Booking Time
//               </label>
//               <p className="mt-2 text-black">{bookingDetails?.bookingTime}</p>
//             </div>
//           </div>
//         </div>

//         {/* Confirmation Message */}
//         <div className="text-center">
//           <motion.button
//             className="py-3 px-8 bg-[#ff3479] text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:bg-[#ff246d] focus:outline-none"
//             onClick={() => router.push("/")}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Back to Home
//           </motion.button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingConfirmationPage;

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Booking {
  id: number;
  artistName: string;
  artistCategory: string;
  artistPrice: string;
  artistImage?: string;
  userName: string;
  userEmail: string;
  userPhone: string;
  bookingDate: string;
  bookingTime: string;
}

const dummyBookings = [
  {
    id: 1,
    artistName: "Aryan Sharma",
    artistCategory: "Bridal",
    artistPrice: "$150 - $300",
    artistImage:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    userName: "John Doe",
    userEmail: "johndoe@example.com",
    userPhone: "+123456789",
    bookingDate: "2025-10-01",
    bookingTime: "3:00 PM",
  },
  {
    id: 2,
    artistName: "Meila Khan",
    artistCategory: "Editorial",
    artistPrice: "$180 - $300",
    artistImage:
      "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    userName: "Jane Smith",
    userEmail: "janesmith@example.com",
    userPhone: "+987654321",
    bookingDate: "2025-09-20",
    bookingTime: "11:00 AM",
  },
  // Add more bookings as needed
];

const BookingHistoryPage = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const storedBookings = localStorage.getItem("userBookings");
    if (storedBookings) {
      setBookings(JSON.parse(storedBookings));
    } else {
      setBookings(dummyBookings);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-black p-6 md:p-12 font-sans">
      <div className="container mx-auto max-w-4xl">
        {/* Header Section */}
        <header className="text-center mb-12">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-[#ff3479] mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Your Bookings
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-500 mb-8"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Here are all your completed bookings.
          </motion.p>
        </header>

        {/* Bookings List */}
        <div>
          {bookings.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl font-bold text-gray-500">
                No bookings yet.
              </p>
              <p className="text-lg text-gray-600 mt-2">
                It looks like you haven&apos;t booked any artists yet.
              </p>
            </div>
          ) : (
            bookings.map((booking) => (
              <motion.div
                key={booking.id}
                className="bg-[#f8f8f8] p-6 rounded-xl shadow-lg mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold text-[#333] mb-4">
                  Booking Details
                </h3>
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center bg-[#ff3479] text-white text-2xl font-bold">
                    {booking.artistName[0]}
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold">
                      {booking.artistName}
                    </h4>
                    <p className="text-lg text-gray-500">
                      {booking.artistCategory}
                    </p>
                    <p className="text-lg text-gray-500">
                      Price: {booking.artistPrice}
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-300 mt-4">
                  <h4 className="text-lg font-semibold text-[#333] mb-2 mt-4">
                    User Info
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-lg text-[#333]">Full Name</label>
                      <p className="mt-2">{booking.userName}</p>
                    </div>
                    <div>
                      <label className="text-lg text-[#333]">Email</label>
                      <p className="mt-2">{booking.userEmail}</p>
                    </div>
                    <div>
                      <label className="text-lg text-[#333]">Phone</label>
                      <p className="mt-2">{booking.userPhone}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 border-t border-gray-300">
                  <h4 className="text-lg font-semibold text-[#333] mb-2 mt-4">
                    Booking Details
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-lg text-[#333]">
                        Booking Date
                      </label>
                      <p className="mt-2">{booking.bookingDate}</p>
                    </div>
                    <div>
                      <label className="text-lg text-[#333]">
                        Booking Time
                      </label>
                      <p className="mt-2">{booking.bookingTime}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingHistoryPage;
