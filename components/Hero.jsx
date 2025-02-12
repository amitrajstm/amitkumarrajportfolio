"use client";
import Image from "next/image";
import { RiLinkedinFill } from "react-icons/ri";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import Link from "next/link";
import bgImg from "../public/hero/bg.png";

const Hero = () => {
  const handleDownloadResume = () => {
    const resumeUrl = "/resume/Amit_Kumar_Raj_Resume.pdf";
    window.open(resumeUrl, "_blank");
  };
  return (
    <main
      className="min-h-[calc(100svh-5.03rem)] md:flex-row flex flex-col-reverse justify-center items-center gap-4"
    >
      {/* Left Section */}
      <section className=" max-w-3xl min-h-xl p-4 flex flex-col gap-3 m-4">
        <p className="lg:text-3xl text-2xl font-medium">👋 Hi, I am</p>
        <h1 className="lg:text-5xl text-4xl font-bold text-emerald-700">
          Amit Kumar Raj
        </h1>
        <h2 className="lg:text-4xl text-3xl font-medium">
          I am a Full Stack Developer
        </h2>
        <p className="lg:text-2xl text-lg text-gray-600">
          I am a skilled Full Stack Developer proficient in JavaScript, React, Node.js, Express.js, and MongoDB. With a keen eye for detail and a passion for crafting seamless user experiences, I specialize in utilizing Tailwind CSS to create visually stunning and responsive web applications. My goal is to deliver high-quality solutions that not only meet client needs but also elevate their online presence and drive growth.
        </p>

        <section className="flex flex-col gap-6">
          {/* Social Media Icons */}
          <section className="flex items-center gap-4 mt-3">
            {/* Linkedin */}
            <a
              href="https://www.linkedin.com/in/amitkumarraj1"
              target="_blank"
              rel="noreferrer"
              aria-label="Goto my linkedin profile"
            >
              <RiLinkedinFill className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-blue-500 hover:bg-blue-500 p-1.5 hover:text-white" />
            </a>
            {/* Github */}
            <a
              href="https://github.com/amitrajstm"
              target="_blank"
              rel="noreferrer"
              aria-label="Goto my github profile"
            >
              <PiGithubLogoFill className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-black  hover:bg-black p-1.5 hover:text-white" />
            </a>
            {/* X */}
            <a
              href="https://x.com/Amit_Raj_Stm
"
              target="_blank"
              rel="noreferrer"
              aria-label="Goto my x profile"
            >
              <FaXTwitter className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-black hover:bg-black p-1.5 hover:text-white" />
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/amitraj_stm"
              target="_blank"
              rel="noreferrer"
              aria-label="Goto my instagram profile"
            >
              <FaInstagram className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-pink-500 hover:bg-pink-500 p-1.5 hover:text-white" />
            </a>
          </section>
          {/* Buttons */}
          <section className="flex gap-4">
            <Link href="mailto:rajamitstm@gmail.com">
              <button className="flex items-center px-3 py-2 bg-emerald-700 hover:bg-emerald-800  rounded-md text-white outline-none focus:ring-1 shadow-lg transform active:scale-y-90 transition-transform" aria-label="Contact Button">
                <IoIosMail size={24} />
                <span className="ml-1.5 md:text-lg">Contact</span>
              </button>
            </Link>

            <button className="flex items-center px-3 py-2 bg-red-700 hover:bg-red-800 rounded-md text-white outline-none focus:ring-1 shadow-lg transform active:scale-y-90 transition-transform" onClick={handleDownloadResume} aria-label="Resume Download Button">
              <IoDocumentText size={22} />
              <span className="ml-1.5 md:text-lg">Resume</span>
            </button>
          </section>
        </section>
      </section>

      {/* Right Section */}
      <section className=" lg:max-w-lg p-4 max-lg:hidden">
        <Image
          className="max-w-xl rounded-xl"
          src={bgImg}
          alt="Amit Kumar Raj"
          priority={false}
          height={300}
          width={350}
          placeholder="blur"
          style={{
            width: "350px",
            height: "auto",
          }}
        />
      </section>
    </main>
  );
};
export default Hero;
