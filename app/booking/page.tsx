"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { User, Mail, Phone, Calendar, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

type SelectedArtistType = {
  id: number;
  name: string;
  price: string;
  category: string;
  imagePlaceholder: string;
};

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });
  const [selectedArtist, setSelectedArtist] = useState<
    SelectedArtistType | undefined
  >();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem("selectedArtist");
    if (data) {
      try {
        const parsedData = JSON.parse(data);
        setSelectedArtist(parsedData);
      } catch (e) {
        console.error("Failed to parse artist data from localStorage", e);
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newBooking = {
      id: Date.now(),
      artistName: selectedArtist?.name,
      artistCategory: selectedArtist?.category,
      artistPrice: selectedArtist?.price,
      artistImage: selectedArtist?.imagePlaceholder,
      userName: formData.name,
      userEmail: formData.email,
      userPhone: formData.phone,
      bookingDate: formData.date,
      bookingTime: formData.time,
    };

    const storedBookings = localStorage.getItem("userBookings");
    const bookings = storedBookings ? JSON.parse(storedBookings) : [];

    bookings.push(newBooking);

    localStorage.setItem("userBookings", JSON.stringify(bookings));

    setShowConfirmation(true);
  };

  const renderConfirmation = () => {
    return (
      <motion.div
        className="w-full max-w-2xl bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative text-center text-gray-800"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-400 mb-4">
          Booking Confirmed!
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Thank you, your session with{" "}
          <strong>**{selectedArtist?.name}**</strong> is all set.
        </p>

        <div className="bg-gray-100 rounded-xl p-6 mb-8 text-left border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">
            Booking Summary
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-black text-white text-xl font-bold border-2 border-white">
                {selectedArtist?.imagePlaceholder}
              </div>
              <div>
                <span className="font-bold text-gray-800">Artist:</span>{" "}
                {selectedArtist?.name}
                <p className="text-sm text-gray-500">
                  {selectedArtist?.category} Specialist
                </p>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <User className="text-gray-700" />
              <span className="font-bold">Name:</span> {formData.name}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="text-gray-700" />
              <span className="font-bold">Email:</span> {formData.email}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="text-gray-700" />
              <span className="font-bold">Phone:</span> {formData.phone}
            </li>
            <li className="flex items-center gap-2">
              <Calendar className="text-gray-700" />
              <span className="font-bold">Date:</span> {formData.date}
            </li>
            <li className="flex items-center gap-2">
              <Clock className="text-gray-700" />
              <span className="font-bold">Time:</span> {formData.time}
            </li>
          </ul>
          <button
            className="block py-3 px-8 bg-black text-white font-light hover:bg-gradient-to-l rounded-full transition-all duration-300 mt-6 mx-6 text-center hover:bg-white hover:text-black hover:outline-1 hover:outline-black"
            onClick={() => {
              localStorage.removeItem("selectedArtist");

              router.push("/artists");
            }}
          >
            Go Back
          </button>
        </div>
      </motion.div>
    );
  };

  const renderForm = () => {
    return (
      <div className="w-full max-w-2xl bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative text-gray-800">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#ff3479] text-center mb-4">
          Book Your Session
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Fill out the details to confirm your appointment with the artist.
        </p>

        {selectedArtist ? (
          <div className="bg-gray-100 p-4 rounded-xl mb-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-black text-white text-2xl font-bold border-2 border-white">
                {selectedArtist.imagePlaceholder}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{selectedArtist.name}</h3>
                <p className="text-gray-500 text-sm">
                  {selectedArtist.category} Specialist
                </p>
              </div>
            </div>
            <p className="text-xl font-bold text-[#2ec4b6]">
              {selectedArtist.price}
            </p>
          </div>
        ) : (
          <div className="text-center py-10">
            <h2 className="text-xl font-semibold text-red-500 mb-2">
              Artist Not Found
            </h2>
            <p className="text-gray-500">
              Please go back and select an artist from the list.
            </p>
          </div>
        )}

        {/* Booking Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700" />
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-100 text-gray-800 rounded-xl py-4 pl-12 pr-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2ec4b6]"
              required
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-100 text-gray-800 rounded-xl py-4 pl-12 pr-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2ec4b6]"
              required
            />
          </div>

          {/* Phone Input */}
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-gray-100 text-gray-800 rounded-xl py-4 pl-12 pr-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2ec4b6]"
              required
            />
          </div>

          {/* Date & Time Pickers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700" />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-gray-100 text-gray-800 rounded-xl py-4 pl-12 pr-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2ec4b6]"
                required
              />
            </div>
            <div className="relative">
              <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700" />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full bg-gray-100 text-gray-800 rounded-xl py-4 pl-12 pr-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2ec4b6]"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full text-white py-4 rounded-full font-bold transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "black",
            }}
          >
            Book Session
          </motion.button>
        </form>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex items-center justify-center p-6 font-sans">
      <AnimatePresence mode="wait">
        {showConfirmation ? renderConfirmation() : renderForm()}
      </AnimatePresence>
    </div>
  );
};

export default BookingPage;
