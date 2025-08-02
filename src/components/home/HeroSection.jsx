import React from "react";
import { FaArrowRight, FaSignInAlt, FaPlay } from "react-icons/fa";
import HeaderImg from "../../../public/images/intro-art.svg";

const IntroSection = () => {
  return (
    <section
      id="intro-section"
      className=" w-full pt-16 bg-gradient-to-r from-indigo-500 to-pink-500"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row j justify-between items-center text-white">
          {/* Intro Content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 font-['Heebo']">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
              A revolutionary way to{" "}
              <span className="text-yellow-400">educate</span>
            </h1>
            <p className="text-xl sm:text-2xl font-medium mb-6 text-gray-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates dolor quibusdam sit sequi illo.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="relative inline-flex items-center rounded-full border-2 border-yellow-400 text-yellow-400 px-8 py-3 text-lg font-medium shadow-md hover:border-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300 ease-in-out"
              >
                Start course now
              </a>
              <a
                href="#"
                className="hidden sm:inline-flex items-center rounded-full bg-gradient-to-r from-gray-100 to-gray-300 text-gray-900 px-8 py-3 text-lg font-medium shadow-md hover:bg-pink-500 hover:from-transparent hover:to-transparent hover:text-white transition-all duration-300 ease-in-out"
              >
                Signup
                <FaSignInAlt className="ml-2" />
              </a>
            </div>
          </div>

          {/* Video Box */}
          <div className="hidden md:flex lg:w-1/3">
            <img src={HeaderImg} alt="" className="w-full h-auto" />
            {/* <a 
              href="#" 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <span className="relative z-10">
                <FaPlay className="text-6xl text-yellow-400" />
              </span>
              <span className="absolute top-0 left-0 w-20 h-20 border-4 border-gray-500 rounded-full animate-pulse-border opacity-100"></span>
              <span className="absolute top-0 left-0 w-20 h-20 border-4 border-gray-500 rounded-full animate-pulse-border opacity-0 animation-delay-500"></span>
            </a> */}
          </div>
        </div>
      </div>

      {/* Wave SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="w-full"
      >
        <path
          fill="#FFFFFF"
          fillOpacity="1"
          d="M0,256L48,240C96,224,192,192,288,154.7C384,117,480,75,576,96C672,117,768,203,864,197.3C960,192,1056,96,1152,69.3C1248,43,1344,85,1392,106.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes pulse-border {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
          }
        }
        .animate-pulse-border {
          animation: pulse-border 1.5s linear infinite;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
};

export default IntroSection;
