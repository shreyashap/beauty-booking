import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-12" id="contact">
      <div className="border-gray-400 mb-10"></div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Section */}
        <div className="rounded-lg">
          <h3 className="text-white text-xl font-semibold mb-5">LOGO</h3>
          <p className="text-sm leading-relaxed text-gray-400">
            We provide a luxurious and seamless booking experience for all your
            beauty needs, from hair and nails to skincare and massage.
          </p>
        </div>

        {/* Quick Links */}
        <div className="rounded-lg">
          <h3 className="text-white text-xl font-semibold mb-5">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="#home"
                className="text-sm hover:text-[#ff3479] transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#categories"
                className="text-sm hover:text-[#ff3479] transition-colors duration-200"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-sm hover:text-[#ff3479] transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-sm hover:text-[#ff3479] transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="rounded-lg">
          <h3 className="text-white text-xl font-semibold mb-5">
            Connect with Us
          </h3>
          <div className="flex space-x-5">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <svg
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.873v-6.985h-2.54v-2.897h2.54V9.75c0-2.505 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.77l-.443 2.897h-2.327v6.985C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <svg
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.286 2.766 7.91 6.64 9.136.486.09.664-.211.664-.469v-1.64c-2.686.58-3.255-1.29-3.255-1.29-.44-.925-1.07-1.17-1.07-1.17-.872-.596.066-.584.066-.584.966.069 1.474 1.05 1.474 1.05.858 1.472 2.246 1.047 2.793.799.088-.62.336-1.047.61-1.288-2.138-.243-4.382-1.07-4.382-4.755 0-1.05.378-1.91.998-2.585-.1-.24-.434-1.22.096-2.54.912-.27 2.996 1.06 2.996 1.06 1.05-.29 2.16-.434 3.25-.434 1.09 0 2.2.144 3.25.434 0 0 2.084-1.33 2.996-1.06.53 1.32.196 2.3.096 2.54.62.675.998 1.535.998 2.585 0 3.693-2.244 4.512-4.382 4.755.344.298.65.882.65 1.776v2.637c0 .258.178.559.664.469C19.234 19.91 22 16.286 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="rounded-lg">
          <h3 className="text-white text-xl font-semibold mb-5">
            Contact Info
          </h3>
          <p className="text-sm text-gray-400">
            456 Glow Street, Beautyville, State 54321
          </p>
          <p className="text-sm mt-2 text-gray-400">Email: hello@beauty.com</p>
          <p className="text-sm mt-2 text-gray-400">Phone: (987) 654-3210</p>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-400 pt-6 text-center">
        <p className="text-sm text-gray-500">
          &copy; 2025 Beauty. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
