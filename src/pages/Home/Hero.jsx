import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { animate } from "@/utils/animate";
import logo1 from "@/assets/home/logo-1.svg";
import logo2 from "@/assets/home/logo-2.svg";
import logo3 from "@/assets/home/logo-3.svg";
import hero from "@/assets/home/hero.png";

export default function Hero() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/about");
  }
  return (
    <section className="hero-wrapper w-full pb-6  md:py-0 bg-[#DCEAF5] relative">
      <div className="container-fluid mx-auto flex flex-col-reverse md:flex-row md:items-center">
        {/* hero left */}
        <div className="w-full md:w-1/2 hero-wrapper__left">
          <motion.h1
            variants={animate}
            initial="hide"
            whileInView="show"
            className="text-3xl px-4 md:px-0 md:pt-20 mb-6 font-medium text-[#1D3444] md:text-5xl"
          >
            Prosper with our bespoke solutions
          </motion.h1>
          <motion.p
            variants={animate}
            initial="hide"
            whileInView="show"
            className="px-4 md:px-0 text-[#5B5B5B] mt-4 md:max-w-lg"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique
          </motion.p>
          <div className="flex items-center gap-x-4 md:gap-x-10 px-4 md:px-0 mt-6">
            <button
              onClick={handleClick}
              className="px-4 py-2 rounded-full bg-brandOrange/90 text-white hover:bg-brandOrange"
            >
              See our services
            </button>
            <Link to="/services" className="text-[#1D3444] hover:underline">
              See all services
            </Link>
          </div>

          <h3 className="px-4 md:px-0 mt-14 text-[#666]/80 tracking-wide">
            Worked with 100+ Companies
          </h3>
          <div className="w-full flex px-4 md:px-0 md:mb-8 items-center mt-4 gap-x-6">
            <a href="#">
              <img className="object-contain w-24" src={logo1} />
            </a>
            <a href="#">
              <img className="object-contain w-24" src={logo2} />
            </a>
            <a href="#">
              <img className="object-contain w-24" src={logo3} />
            </a>
          </div>
        </div>
        {/* hero right */}
        <div className="w-full md:w-1/2 relative self-stretch md:pt-16 border-b-1 border-b-[#1D3444] md:border-none mb-4 md:mb-0 hero-wrapper_right flex items-end">
          <div className="absolute w-20 h-3/5 bg-brandOrange/50 left-1/4 rounded-tl-lg rounded-tr-lg"></div>
          <img className="object-cover h-full" src={hero} />
        </div>
      </div>
    </section>
  );
}
