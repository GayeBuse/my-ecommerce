import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Carousel() {
  const items = [
    {
      src: "./icons/slide1.png",
      altText: "",
      caption: "",
      key: 1,
    },
    {
      src: "./icons/slide1.png",
      altText: "",
      caption: "",
      key: 2,
    },
  ];
  const caption = (
    <div className=" text-white absolute top-2/4 left-1/3 -translate-x-1/2 -translate-y-1/2  text-lightText flex flex-col gap-5 mt-20 sm:text-center sm:m-0  sm:items-center sm:sm:gap-3 sm:scale-[30%]">
      <h5 className="font-bold  ">SUMMER 2020</h5>
      <h1 className="font-bold text-6xl tracking-wider ">NEW COLLECTION</h1>
      <h4 className="sm:scale-125 sm:w-64 sm:mb-10 ">
        We know how large objects will act,
        <b className="" />
        but things on a small scale
      </h4>
      <button className="bg-[#2DC071] font-bold text-2xl py-3 rounded w-52">
        SHOP NOW
      </button>
    </div>
  );
  return (
    <>
      <div className="relative  h-full w-full ">
        <UncontrolledCarousel items={items} />
        {caption}
      </div>
    </>
  );
}
