"use client";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
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

const CategoriesCard = () => {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<Category | null>({
    id: 1,
    name: "Bridal Makeup",
    imageUrl:
      "https://images.unsplash.com/flagged/photo-1551854716-8b811be39e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJpZGFsJTIwbWFrZXVwfGVufDB8fDB8fHww",
    subcategories: [
      "Traditional Bridal",
      "Contemporary Bridal",
      "Destination Wedding Looks",
    ],
  });

  const handleExploreArtist = () => {
    router.push(`/artists`);
  };
  return (
    <main className="flex-grow container mx-auto px-6 py-12" id="categories">
      <div className="w-full max-w-7xl relative my-10 mx-auto">
        <h1 className="text-black text-4xl md:text-5xl font-extrabold text-center tracking-tight">
          Find Your Perfect Look
        </h1>
        <p className="text-center mb-16 mt-6 text-xl">
          Explore our diverse range of professional makeup services tailored to
          your specific needs.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category)}
              className={`py-4 px-6 md:py-5 md:px-8 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer ${
                activeCategory?.id === category.id
                  ? "bg-[#c099ff] text-black shadow-lg"
                  : "bg-gray-100 hover:bg-[#c099ff]"
              } `}
            >
              {category.name}
            </button>
          ))}
        </div>
        <hr className="mb-8 -mt-4" />
        <div className="bg-[#f7f7f7] p-6 md:p-12 rounded-3xl">
          <div className="flex flex-col md:justify-between md:flex-row items-center gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="pl-8 pt-2 pb-4 overflow-hidden flex flex-col items-center md:items-start"
              layout
            >
              <ul className="space-y-2 mb-4">
                {activeCategory?.subcategories.map((subcat, subIndex) => (
                  <motion.li
                    key={subIndex}
                    className="text-gray-700 text-2xl text-center md:text-left md:text-4xl tracking-widest leading-loose hover:text-black transition-colors"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: subIndex * 0.1 }}
                  >
                    {subcat}
                  </motion.li>
                ))}
              </ul>
              <button
                className="bg-gray-700 hover:bg-black text-white font-bold py-1 px-2 rounded-full transition-colors duration-200 cursor-pointer mt-5"
                onClick={handleExploreArtist}
              >
                <ArrowUpRight />
              </button>
            </motion.div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src={activeCategory?.imageUrl}
                alt={activeCategory?.name}
                className="w-[25rem] h-[25rem] object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CategoriesCard;
