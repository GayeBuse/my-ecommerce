import React from "react";
import { data } from "../data/data";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

import { NavLink } from "react-router-dom";
export default function Header() {
  const { phone, mail, message } = data.header;
  return (
    <header className="flex flex-col font-['Montserrat']">
      <div className="p-5 bg-[#252B42] text-white ">
        <div className="flex justify-between flex-wrap ">
          <div className="flex gap-2">
            <BsTelephone className="" />
            <h6>{phone}</h6>
            <CiMail className="ml-5" />
            <h6>{mail}</h6>
          </div>
          <h6 className="">{message}</h6>
          <div className="flex gap-4 justify-center">
            <h6>Follow Us : </h6>
            <h6>
              <FaInstagram />
            </h6>
            <h6>
              <PiYoutubeLogoLight />
            </h6>
            <h6>
              <FaFacebook />
            </h6>
            <h6>
              <CiTwitter />
            </h6>
          </div>
        </div>
      </div>
      <div className="flex justify-between py-6 px-8 flex-wrap  ">
        <div className="flex gap-[5rem]">
          <h1 className="font-bold text-2xl ">Bandage</h1>
          <nav className="flex gap-5 flex-wrap items-center text-xs font-bold text-[#737373]">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/team">Team</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="#">Pages</NavLink>
          </nav>
        </div>

        <div className="flex gap-2 items-center text-[#23A6F0] ">
          <div className="flex items-center">
            <IoPersonOutline className="" />
            <span className="mx-2 font-bold text-xs  ">Login</span>
            <span>/</span>
            <span className=" font-bold text-xs ">Register</span>
          </div>
          <div className="flex gap-4 text-lg">
            <CiSearch />
            <CiShoppingCart />
            <CiHeart />
          </div>
        </div>
      </div>
    </header>
  );
}