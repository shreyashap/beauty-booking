"use client";

const Rating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex text-yellow-400 text-lg md:text-xl">
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`}>&#9733;</span>
      ))}
      {hasHalfStar && (
        <span className="relative">
          &#9733;
          <span className="absolute inset-0 w-1/2 overflow-hidden text-black">
            &#9733;
          </span>
        </span>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} className="text-gray-400">
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default Rating;
