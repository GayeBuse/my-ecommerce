import React, { useState } from "react";
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
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; // useDispatch hook'unu ekledik
import Gravatar from "react-gravatar";
import { userLogout } from "../store/actions/userAction/userAction"; // Logout action'unu içe aktardık
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";

export default function Header() {
  const cart = useSelector((store) => store.shoppingCart.cartList);
  const { phone, mail, message } = data.header;
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch(); // useDispatch hook'unu ekledik
  const { search } = useLocation();
  const history = useHistory(); // useHistory hook'unu ekledik
  const categories = useSelector((state) => state.global.categories);
  const womanCategories = categories.filter((category) =>
    category.code.includes("k:")
  );
  const manCategories = categories.filter((category) =>
    category.code.includes("e:")
  );
  const [dropDown, setDropDown] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // Dropdown durumunu saklayacak durum değişkeni
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

            <div className="relative ">
              <div className="flex ">
                <button className="py-2 px-4 text-gray-700 font-semibold flex items-center">
                  <NavLink to="/shopping" className="flex items-center">
                    Shop
                  </NavLink>
                </button>
                <div>
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="mt-2"
                  >
                    &#9660;
                  </button>
                </div>
              </div>
              {/* Eğer dropdown gösteriliyorsa kategorileri göster */}
              {showDropdown && (
                <div className=" flex absolute right-0 mt-2 py-2 w-48 bg-white border rounded-lg shadow-xl z-10">
                  <div className="flex flex-col ">
                    <p className="font-bold text-black  p-2">Woman</p>
                    {womanCategories.map((category) => (
                      <NavLink
                        to={`/shopping/${
                          category.code.includes("k:")
                            ? `kadin/${category.code.slice(
                                2,
                                category.code.length
                              )}`
                            : `erkek/${category.code.slice(
                                2,
                                category.code.length
                              )}`
                        }`}
                        className="text-gray-700 block px-4 py-2 hover:bg-gray-200 cursor-pointer "
                        key={category.id}
                      >
                        {category.title}
                      </NavLink>
                    ))}
                  </div>
                  <div className="py-1" role="none">
                    <p className="font-bold text-black  p-2">Men</p>
                    {manCategories.map((category) => (
                      <NavLink
                        to={`/shopping/${
                          category.code.includes("e:")
                            ? `erkek/${category.code.slice(
                                2,
                                category.code.length
                              )}`
                            : `kadin/${category.code.slice(
                                2,
                                category.code.length
                              )}`
                        }`}
                        className="text-gray-700 hover:bg-gray-200 cursor-pointer block px-4 py-2 "
                        key={category.id}
                      >
                        {category.title}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
            <div className="flex items-center gap-2">
              <Dropdown toggle={() => setDropDown(!dropDown)}>
                <DropdownToggle data-toggle="dropdown" tag="span">
                  <div className="flex gap-1 items-center">
                    <CiShoppingCart />
                    <span className="font-thin bg-blue-300 rounded-full px-2 text-white">
                      {cart.length}
                    </span>
                  </div>
                </DropdownToggle>
                {dropDown && (
                  <DropdownMenu className=" flex  absolute  bg-white border rounded-lg shadow-xl z-10 right-0">
                    <div className="flex flex-col gap-3 px-4 py-2  ">
                      <div className="flex items-center font-extrabold gap-1">
                        <h1>Sepetim</h1>
                        <span>({cart.length} Ürün)</span>
                      </div>
                      {cart.map((item) => {
                        const totalPrice = item.price * item.count;
                        return (
                          <div className="flex gap-6 items-center border-b-2 py-2">
                            <img
                              className="w-24 h-32 border-3 rounded-lg"
                              src={item.images[0].url}
                              alt=""
                            />
                            <div className="flex flex-col gap-3">
                              <h1>{item.name}</h1>
                              <div className="flex gap-2 text-gray-500 text-sm">
                                <span>Beden:38</span>
                                <span>Adet:{item.count}</span>
                              </div>
                              <span className="text-blue-300">
                                {totalPrice} $
                              </span>
                            </div>
                          </div>
                        );
                      })}
                      <div className="flex gap-3 ">
                        <button
                          onClick={() => history.push("/my-cart")}
                          className="border-1 py-2 px-7 rounded-md bg-gray-100 hover:bg-gray-700"
                        >
                          Sepete Git
                        </button>
                        <button className="border-1 py-2 px-3 rounded-md bg-blue-300 text-white hover:bg-orange-900">
                          Siparişi Tamamla
                        </button>
                      </div>
                    </div>
                  </DropdownMenu>
                )}
              </Dropdown>
            </div>

            <CiHeart />
          </div>
          {isLoggedIn && <Gravatar email={mail} className="rounded-full w-8" />}
        </div>
      </div>
    </header>
  );
}
