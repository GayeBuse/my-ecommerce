import React from "react";
import productcardata from "../data/productcardata";
export default function ProductCard() {
  return (
    <div className="">
      <div className="text-center flex flex-col gap-2 py-[5rem] w-fit mx-auto">
        <h2 className="text-xl text-[#737373]">Featured Products</h2>
        <h1 className="text-2xl font-bold">BESTSELLER PRODUCTS</h1>
        <p className="text-sm text-[#737373]">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="flex gap-[50px] flex-wrap items-center justify-center pb-[80px] max-w-[90rem] mx-auto">
        {productcardata.map((product, index) => (
          <div className="product-card" key={index}>
            <img
              src={product.img}
              alt={product.title}
              className="w-[260px] h-[427px] object-cover"
            />
            <div className="flex flex-col items-center py-[30px] gap-[10px]">
              <h2 className="text-[16px] font-semibold">{product.title}</h2>
              <p className="text-[14px] text-[#737373] font-bold">
                {product.category}
              </p>
              <div className="flex gap-[5px] py-[5px] px-[3px] text-[16px] font-bold">
                <p className="text-[#BDBDBD]"> {product.price}</p>
                <p className="text-[#23856D]"> {product.sale}</p>
              </div>
              <div className="color-options">
                {product.colors.map((color, colorIndex) => (
                  <span
                    key={colorIndex}
                    className="inline-block w-5 h-5 rounded-2xl mr-1"
                    style={{ backgroundColor: color }}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
