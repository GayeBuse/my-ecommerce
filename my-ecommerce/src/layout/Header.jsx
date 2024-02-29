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
import { useSelector, useDispatch } from "react-redux"; // useDispatch hook'unu ekledik
import Gravatar from "react-gravatar";
import { userLogout } from "../store/actions/userAction/userAction"; // Logout action'unu içe aktardık

export default function Header() {
  const { phone, mail, message } = data.header;
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch(); // useDispatch hook'unu ekledik
  console.log(user);
  const handleLogout = () => {
    dispatch(userLogout()); // Logout action'unu dispatch ettik
  };

  return (
    <header className="flex flex-col font-['Montserrat']">
      <div className="h-[38px] p-3 bg-[#252B42] text-white sm:hidden">
        <div className="flex justify-between flex-wrap">
          <div className="flex gap-2">
            <BsTelephone />
            <h6>{phone}</h6>
            <CiMail className="ml-5" />
            <h6>{mail}</h6>
          </div>
          <h6>{message}</h6>
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

      <div className="flex sm:flex-col justify-between py-6 px-8 flex-wrap">
        <div className="flex gap-[5rem]">
          <h1 className="font-bold text-2xl ">Bandage</h1>
          <div className="hidden sm:flex sm:gap-8 sm:mr-10">
            <CiSearch />
            <CiShoppingCart />
            <CiHeart />
          </div>
          <nav className="flex gap-5 flex-wrap items-center text-xs font-bold text-[#737373] sm:hidden">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shopping">Shop</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/team">Team</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="#">Pages</NavLink>
          </nav>
        </div>
        <div>
          <nav className="hidden sm:flex sm:flex-col sm:gap-4 sm:justify-center sm:items-center sm:pt-[2rem]">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shopping">Shop</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/team">Team</NavLink>
          </nav>
        </div>
        <div className="flex gap-2 items-center text-[#23A6F0] sm:hidden">
          <div className="flex items-center sm:hidden">
            <IoPersonOutline />
            <nav>
              {isLoggedIn ? (
                <>
                  <NavLink to="/" className="mx-2 font-bold text-xs">
                    {user.user.name}
                  </NavLink>
                  <span>/</span>
                  <button onClick={handleLogout} className="font-bold text-xs">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <NavLink to="/login" className="mx-2 font-bold text-xs">
                    Login
                  </NavLink>
                  <span>/</span>
                  <NavLink to="/signup" className="font-bold text-xs">
                    Register
                  </NavLink>
                </>
              )}
            </nav>
          </div>
          <div className="flex gap-4 text-lg">
            <CiSearch />
            <CiShoppingCart />
            <CiHeart />
          </div>
          {isLoggedIn && <Gravatar email={mail} className="rounded-full w-8" />}
        </div>
      </div>
    </header>
  );
}
