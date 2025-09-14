"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Search } from "lucide-react";
import { useState } from "react";
import Rating from "./Rating";
import { useRouter } from "next/navigation";
import { type Artists } from "@/types";

const artists = [
  {
    id: 1,
    name: "Aryan Sharma",
    price: "$150 - $300",
    rating: 5.0,
    category: "Bridal",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    imagePlaceholder: "AS",
  },
  {
    id: 2,
    name: "Chloe Davis",
    price: "$200 - $450",
    rating: 4.7,
    category: "Glam",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    imagePlaceholder: "CD",
  },
  {
    id: 3,
    name: "John Rossi",
    price: "$180 - $300",
    rating: 5.0,
    category: "Casual",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    imagePlaceholder: "JR",
  },
  {
    id: 4,
    name: "Meila Khan",
    price: "$180 - $300",
    rating: 4.8,
    category: "Editorial",
    imageUrl:
      "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    imagePlaceholder: "MK",
  },
  {
    id: 5,
    name: "Sofia Garcia",
    price: "$120 - $500",
    rating: 4.9,
    category: "Festive",
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    imagePlaceholder: "SG",
  },
  {
    id: 6,
    name: "Olivia Chen",
    price: "$250 - $600",
    rating: 5.0,
    category: "Specialty",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    imagePlaceholder: "OC",
  },
  {
    id: 7,
    name: "Hannah Lee",
    price: "$175 - $320",
    rating: 4.6,
    category: "Bridal",
    imageUrl: "",
    imagePlaceholder: "HL",
  },
  {
    id: 8,
    name: "Zoe Miller",
    price: "$190 - $350",
    rating: 4.9,
    category: "Glam",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    imagePlaceholder: "ZM",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const categories = [
  "All",
  "Bridal",
  "Glam",
  "Casual",
  "Editorial",
  "Festive",
  "Specialty",
];

const Artists = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const router = useRouter();

  const filteredArtists = artists.filter((artist) => {
    const matchesCategory =
      activeCategory === "All" || artist.category === activeCategory;
    const matchesSearch = artist.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 md:p-12 font-sans overflow-x-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header and Search/Filter section */}
        <header className="mb-12 md:mb-20">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-[#ff3479] text-center mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Find Your Perfect Artist
          </motion.h1>
          <motion.p
            className="text-center text-lg md:text-xl text-gray-600 mb-8"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Browse top-rated professionals for any occasion.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row items-center gap-4 mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Search Bar */}
            <div className="relative w-full md:w-1/2 lg:w-1/3">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search artists..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-100 text-gray-900 rounded-full py-4 pl-12 pr-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#ff3479] placeholder:text-gray-500"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`py-2 px-6 rounded-full font-medium text-sm transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-[#c099ff] to-[#ff3479] text-white shadow-lg"
                      : "bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </header>

        {/* Artist Grid */}
        <AnimatePresence>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredArtists.length > 0 ? (
              filteredArtists.map((artist: Artists) => (
                <motion.div
                  key={artist.id}
                  className="bg-gray-50 rounded-3xl p-6 shadow-lg flex flex-col items-center text-center transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
                    background: "#f9f9f9",
                  }}
                >
                  {/* Artist Profile Placeholder */}
                  {artist.imageUrl ? (
                    <motion.div
                      className="w-32 h-32 rounded-full overflow-hidden mb-4 flex items-center justify-center bg-gradient-to-br from-[#c099ff] to-[#ff3479] text-white text-5xl font-bold border-2 border-white"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <img
                        src={artist.imageUrl}
                        alt={artist.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      className="w-32 h-32 rounded-full overflow-hidden mb-4 flex items-center justify-center bg-gray-200 text-gray-800 text-5xl font-bold border-2 border-gray-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      {artist.imagePlaceholder}
                    </motion.div>
                  )}

                  <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                    {artist.name}
                  </h3>
                  <p className="text-gray-500 text-lg mb-2">{artist.price}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <Rating rating={artist.rating} />
                    <span className="text-gray-700 font-medium">
                      {artist.rating.toFixed(1)}
                    </span>
                  </div>

                  <button
                    className="inline-flex gap-2 py-3 px-8 bg-white text-black font-light hover:bg-gradient-to-l rounded-full transition-all duration-300 mt-4 mx-6 text-center shadow-md hover:bg-black hover:text-white cursor-pointer"
                    onClick={() => {
                      localStorage.setItem(
                        "selectedArtist",
                        JSON.stringify(artist)
                      );
                      router.push("/booking");
                    }}
                  >
                    Book Appointment{" "}
                    <span>
                      <ArrowUpRight />
                    </span>
                  </button>
                </motion.div>
              ))
            ) : (
              <motion.div
                className="col-span-1 sm:col-span-2 lg:col-span-3 text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-2xl font-bold text-gray-600">
                  No artists found.
                </p>
                <p className="text-lg text-gray-500 mt-2">
                  Try adjusting your search or filters.
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Artists;
