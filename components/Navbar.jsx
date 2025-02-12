import { FaBriefcase } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex p-4 border-b border-gray-200 sticky top-0 bg-white z-50">
      {/* Left Section */}
      <section className="w-2/3 md:w-1/2 p-2 text-xl md:text-2xl font-semibold flex justify-start items-center uppercase">
        Amit Kumar Raj
      </section>

      {/* Center Section */}
      <section className=" hidden md:flex justify-end items-center p-2">
        <ul className="flex gap-8 max-lg:gap-4 max-lg:text-sm text-gray-700 tracking-wider uppercase font-semibold">
          <li className="cursor-pointer hover:text-gray-950 hover:scale-105 hover:transition-all">
            <a href="#" aria-label="Goto Home Section">
              Home
            </a>
          </li>
          <li className="cursor-pointer hover:text-gray-950 hover:scale-105">
            <a href="#about" aria-label="Goto About Section">
              About
            </a>
          </li>
          <li className="cursor-pointer hover:text-gray-950 hover:scale-105">
            <a href="#projects" aria-label="Goto Projects Section">
              Projects
            </a>
          </li>
          <li className="cursor-pointer hover:text-gray-950 hover:scale-105">
            <a href="#contact" aria-label="Goto Contact Section">
              Contact
            </a>
          </li>
        </ul>
      </section>

      {/* Right Section */}
      <section className="w-1/4 max-md:w-1/2 max-lg:w-1/3 flex justify-end items-center max-[375px]:hidden">
        <Link
          href="mailto:rajamitstm@gmail.com"
          className="flex items-center px-3 py-2 bg-emerald-700 hover:bg-emerald-800 rounded-md text-white outline-none focus:ring-1 shadow-lg transform active:scale-y-95 transition-transform mx-5"
          aria-label="Hire Me Button"
        >
          <FaBriefcase />
          <span className="ml-1.5">Hire Me</span>
        </Link>

        {/* <Link href="mailto:rajamitstm@gmail.com">
          <button
            className="flex items-center px-3 py-2 bg-emerald-700 hover:bg-emerald-800 rounded-md text-white outline-none focus:ring-1 shadow-lg transform active:scale-y-95 transition-transform mx-5"
            aria-label="Hire Me Button"
          >
            <FaBriefcase />
            <span className="ml-1.5">Hire Me</span>
          </button>
        </Link> */}
        
      </section>
    </nav>
  );
};
export default Navbar;
