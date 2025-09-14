"use client";

const Button = ({ className }: { className?: string }) => {
  return (
    <button
      className={`${className} block py-3 px-8 bg-gradient-to-r from-[#c099ff] to-[#ff3479] text-black font-light hover:bg-gradient-to-l rounded-full transition-all duration-300 mt-4 mx-6 text-center`}
    >
      Book Appointment
    </button>
  );
};

export default Button;
