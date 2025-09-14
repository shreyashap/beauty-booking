"use client";

import React, { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { type Category } from "@/types";

const categories: Category[] = [
  {
    id: 1,
    name: "Bridal Makeup",
    imageUrl:
      "https://images.unsplash.com/flagged/photo-1551854716-8b811be39e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJpZGFsJTIwbWFrZXVwfGVufDB8fDB8fHww",
    subcategories: [
      "Traditional Bridal",
      "Contemporary Bridal",
      "Destination Wedding Looks",
    ],
  },
  {
    id: 2,
    name: "Party & Glam Makeup",
    imageUrl:
      "https://images.unsplash.com/photo-1582576192532-06353147fcbf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJyaWRhbCUyMG1ha2V1cHxlbnwwfHwwfHx8MA%3D%3D",
    subcategories: ["Cocktail Party", "Red Carpet Glam", "Evening Party Looks"],
  },
  {
    id: 3,
    name: "Casual / Everyday Makeup",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661326352695-6cbe1ff74ee9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJpZGFsJTIwbWFrZXVwfGVufDB8fDB8fHww",
    subcategories: ["Office Look", "Minimal/Natural", "Day Out/Brunch"],
  },
  {
    id: 4,
    name: "Fashion & Editorial Makeup",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1675253183563-7c5efc9f99af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvdG9zaG9vdCUyMG1ha2V1cHxlbnwwfHwwfHx8MA%3D%3D",
    subcategories: ["Runway ", "Photoshoot Makeup", "Creative/High Fashion"],
  },
  {
    id: 5,
    name: "Festive / Cultural Makeup",
    imageUrl:
      "https://images.unsplash.com/photo-1593960408762-f303eeef0e93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRpd2FsaSUyMG1ha2V1cHxlbnwwfHwwfHx8MA%3D%3D",
    subcategories: [
      "Diwali/Eid/Christmas Looks ",
      "Navratri/Garba",
      "Regional Styles",
    ],
  },
  {
    id: 6,
    name: "Specialty Makeup",
    imageUrl:
      "https://images.unsplash.com/photo-1614006659838-d4ca51cbd117?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGhvdG9zaG9vdCUyMG1ha2V1cHxlbnwwfHwwfHx8MA%3D%3D",
    subcategories: ["HD/Camera Ready", "Airbrush Makeup", "Theatrical/Stage"],
  },
];

const MakeupCategories = () => {
  const router = useRouter();

  const [hoveredCategory, setHoveredCategory] = useState<Category | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const handleMouseEnter = (category: Category) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  const handleCategoryClick = (categoryId: number) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const handleExploreArtist = (id: number) => {
    router.push(`/artist/${id}`);
  };

  return (
    <main className="bg-white text-black min-h-screen flex items-center justify-center font-sans relative p-4 overflow-hidden my-20">
      <div className="w-full max-w-7xl relative mb-10">
        <h1 className="text-black text-4xl md:text-5xl font-extrabold text-center tracking-tight">
          Find Your Perfect Look
        </h1>
        <p className="text-center mb-16 mt-6 text-xl">
          Explore our diverse range of professional makeup services tailored to
          your specific needs.
        </p>
        <div className="bg-[#f7f7f7] flex flex-col md:flex-row justify-between items-start md:items-center p-10 md:p-20 rounded-4xl">
          <div className="flex-1 space-y-4 w-full md:w-auto">
            {categories.map((category) => (
              <div
                key={category.id}
                className="w-full border-t border-b border-gray-600 cursor-pointer transition-colors duration-300 first:mt-0 mt-2 hover:text-[#c099ff]"
                onMouseEnter={() => handleMouseEnter(category)}
                onMouseLeave={handleMouseLeave}
              >
                <motion.div
                  className="p-4 md:p-6 rounded-lg flex justify-between items-center"
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <div className="text-xl md:text-4xl font-semibold tracking-wide">
                    {category.id}. {category.name}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 flex items-center">
                    Expand{" "}
                    <motion.span
                      animate={{
                        rotate: expandedCategory === category.id ? -180 : 0,
                      }}
                      className="ml-2 inline-block"
                    >
                      &#x25BC;
                    </motion.span>
                  </div>
                </motion.div>

                <AnimatePresence>
                  {expandedCategory === category.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="pl-8 pt-2 pb-4 overflow-hidden"
                      layout
                    >
                      <ul className="space-y-2 mb-4">
                        {category.subcategories.map((subcat, subIndex) => (
                          <motion.li
                            key={subIndex}
                            className="text-gray-600 text-md md:text-base hover:text-gray-400 transition-colors"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: subIndex * 0.1 }}
                          >
                            {subcat}
                          </motion.li>
                        ))}
                      </ul>
                      <button
                        className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-1 px-2 rounded-full transition-colors duration-200 cursor-pointer"
                        onClick={() => handleExploreArtist(category.id)}
                      >
                        <ArrowUpRight />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <AnimatePresence>
            {hoveredCategory && (
              <motion.div
                key={hoveredCategory.id}
                className="pointer-events-none fixed z-50 rounded-lg overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  top: "50%",
                  left: "50%",
                  x: "-50%",
                  y: "-50%",
                  transition: {
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                  },
                }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
              >
                <img
                  src={hoveredCategory.imageUrl}
                  alt={hoveredCategory.name}
                  className="w-48 h-36 object-cover md:w-64 md:h-48"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
};

export default MakeupCategories;
