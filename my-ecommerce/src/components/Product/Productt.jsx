import React from "react";
import { useParams } from "react-router-dom";
import productList from "../../data/productList";
import { FaChevronRight } from "react-icons/fa6";
import { MdStarRate } from "react-icons/md";
import { MdStarOutline } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdEye } from "react-icons/io";
const Productt = () => {
  const { productId } = useParams(); // Tıklanan ürünün ID'sini al

  // ID'ye göre ürünü bul
  const Product = productList.find((product) => product.id === productId);

  // Eğer ürün bulunamazsa
  if (!Product) {
    return <div>Ürün bulunamadı.</div>;
  }

  // Ürünü ekrana yazdır
  return (
    <div className="bg-[#FAFAFA]">
      <nav className=" pl-36 flex items-center gap-2 px- ">
        <div className=" text-slate-800 text-sm font-bold sm:p-4 ">Home</div>
        <FaChevronRight />
        <div className="text-slate-400 text-sm font-bold ">Shop</div>
      </nav>
      <div className="flex  w-[80%] mx-auto flex-wrap ">
        <div className="flex  justify-between">
          <img
            className="w-[506px] h-[450px] object-cover "
            src={Product.img}
          />
        </div>
        <div className="mx-auto my-auto basis-2/5 flex flex-col gap-5">
          <div className="">
            <h1 className="text-xl font-normal">Floating Phone</h1>

            <div className="text-[#F3CD03] flex gap-1 text-2xl">
              <MdStarRate />
              <MdStarRate />
              <MdStarRate />
              <MdStarRate />
              <MdStarOutline />
              <div>
                <p className="text-[#737373] text-sm">10 Reviews</p>
              </div>
            </div>
            <p>{Product.title}</p>
            <p> {Product.category}</p>
            <div className="flex gap-[5px] py-[5px] px-[3px] text-[16px] font-bold">
              <p className="text-[#BDBDBD]"> {Product.price}</p>
              <p className="text-[#23856D]">{Product.sale}</p>
            </div>

            <p className=" mb-4 text-sm text-[#858585]">{Product.details}</p>
            <p className="border-b-2 border-[#BDBDBD] mb-4 "></p>
            <ul>
              {Product.colors.map((color, index) => (
                <li
                  key={index}
                  className="inline-block w-5 h-5 rounded-2xl mr-1"
                  style={{ backgroundColor: color }}
                ></li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-between w-[300px]">
            <button className="bg-[#23A6F0] text-white  px-4 py-2 font-normal rounded">
              Select Options
            </button>
            <CiHeart className="w-8 h-8 rounded-full border-2 border-[#E8E8E8] bg-white  " />
            <CiShoppingCart className="w-8 h-8 rounded-full border-2 border-[#E8E8E8] bg-white" />
            <IoMdEye className="w-8 h-8 rounded-full border-2 border-[#E8E8E8] bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productt;
