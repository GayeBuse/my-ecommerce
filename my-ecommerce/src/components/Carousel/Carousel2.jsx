import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Carousel() {
  const items = [
    {
      src: "./icons/slide2.png",
      altText: "",
      caption: "",
      key: 1,
    },
    {
      src: "./icons/slide2.png",
      altText: "",
      caption: "",
      key: 2,
    },
  ];
  const caption = (
    <div className=" text-white absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-lightText flex flex-col gap-5 ml-20">
      <h5 className="font-bold ">SUMMER 2020</h5>
      <h1 className="font-bold text-6xl tracking-wider">
        Vita Classic <br />
        Product
      </h1>
      <h4 className="">
        We know how large objects will act,
        <br />
        We know how are objects will act,
        <br />
        We know
      </h4>
      <div className="flex flex-row gap-5">
        <h5 className="mt-3 text-2xl">$16.48</h5>

        <button className="bg-[#2DC071] font-bold text-2xl py-3 rounded leading-8 w-52">
          ADD TO CART
        </button>
      </div>
    </div>
  );
  return (
    <>
      <div className="relative">
        <UncontrolledCarousel items={items} />
        {caption}
      </div>
    </>
  );
}
