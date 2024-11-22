import logoUrl from "@/assets/logo-white.svg";
import { FaFacebookF } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer bg-[#063255] py-14">
      <div className="container-fluid mx-auto text-white">
        {/* External link */}
        <div className="external-link flex flex-col items-center md:flex-row md:items-start md:justify-between md:space-x-10">
          {/* 1 */}
          <div className="space-y-6 flex flex-col items-center md:block">
            <a href="#" className="block">
              <img src={logoUrl} className="w-24" />
            </a>
            <h2 className="text-3xl md:max-w-xs">Bespoke software solutions</h2>
            <div className="space-x-4 flex items-center text-md">
              <a href="#" className="hover:scale-105 duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:scale-105 duration-300">
                <AiOutlineYoutube />
              </a>
              <a href="#" className="hover:scale-105 duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="hover:scale-105 duration-300">
                <FaTwitter />
              </a>
            </div>
          </div>
          {/* 2 */}
          <div className="flex flex-col items-center md:items-start text-xs space-y-4 mt-8 md:mt-0">
            <h3 className="text-xl md:text-sm font-bold md:font-normal">
              Company
            </h3>
            <Link to={"/about"} className="hover:underline">
              About us
            </Link>
            <Link to={"/careers"} className="hover:underline">
              Careers
            </Link>
            <Link to={"/services"} className="hover:underline">
              Services
            </Link>
            <Link to={"/blog"} className="hover:underline">
              Blog
            </Link>
          </div>
          {/* 3 */}
          <div className="flex flex-col items-center md:items-start text-xs space-y-4 mt-8 md:mt-0">
            <h3 className="text-xl md:text-sm font-bold md:font-normal">
              Connect
            </h3>
            <a href="#" className="hover:underline">
              hi@finsweet.com
            </a>
            <a href="#" className="hover:underline">
              +(123) 456-7890
            </a>
          </div>
          {/* 4 */}
          <div className="flex flex-col items-center md:items-start text-xs space-y-4 mt-8 md:mt-0">
            <h3 className="text-xl md:text-sm font-bold md:font-normal">
              Join Newsietter
            </h3>
            <input
              type="email"
              className="w-72 h-10 px-4 rounded-full border-none bg-white text-gray text-xs focus:outline-none placeholder:text-gray placeholder:text-xs"
              placeholder="Type email here"
            />
            <button className="bg-brandOrange w-28 px-4 py-2 rounded-full text-sm hover:scale-105 duration-300">
              Subscribe
            </button>
          </div>
        </div>
        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-16 text-xs gap-y-2 md:gap-y-0">
          <p>© All rights reserved – Finsweet</p>
          <p className="flex flex-col items-center gap-y-1 md:gap-y-0 md:block md:space-x-6">
            <Link to={"/privacy-policy"} className="hover:underline">
              Privacy Policy
            </Link>
            <span>Terms & Conditions</span>
          </p>
        </div>
      </div>
    </div>
  );
}
