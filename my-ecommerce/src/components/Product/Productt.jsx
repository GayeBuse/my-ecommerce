import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";
import { FaChevronRight } from "react-icons/fa";
import { MdStarRate, MdStarOutline } from "react-icons/md";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { IoMdEye } from "react-icons/io";
import { AxiosInstance } from "../../api/axiosInstance";
import { addToCart } from "../../store/actions/shoppingCartAction/shoppingCartAction";
import { useDispatch, useSelector } from "react-redux";
const Productt = () => {
  const { productId } = useParams(); // Tıklanan ürünün ID'sini al
  const [product, setProduct] = useState(null); // Initial state null olarak tanımla
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.shoppingCart.cartList);
  useEffect(() => {
    AxiosInstance.get(`/products/${productId}`).then((res) => {
      setProduct(res.data);
    });
  }, [productId]);

  // Ürün yüklenene kadar Loading... mesajı göster
  if (!product) {
    return <div>Loading...</div>;
  }
  const addtoShoppingCart = () => {
    dispatch(addToCart(product, 1)); // addToCart eylemini doğru şekilde çağır
  };

  return (
    <div className="  bg-[#FAFAFA]">
      <nav className="pl-20 flex items-center gap-2 pb-5 ">
        <div className="text-slate-800 text-sm font-bold sm:p-4 ">Home</div>
        <FaChevronRight />
        <div className="text-slate-400 text-sm font-bold ">Shop</div>
      </nav>
      <div className="flex">
        <div className="flex pl-20 justify-between sm:flex-col sm:items-center sm:justify-center ">
          {product.images.map((img, index) => (
            <div
              key={index}
              className="w-[40rem] flex flex-col gap-8 sm:m-auto"
            >
              <Carousel
                key={index}
                className="w-[30rem] h-[40rem] sm:w-[30rem] sm:h-[30rem]"
              >
                <img className="w-full h-full" src={img.url} />
                <img className="w-full h-full" src={img.url} />
              </Carousel>

              <div className="flex gap-6 pb-10 w-28 h-32">
                <img src={img.url} />
                <img src={img.url} />
              </div>
            </div>
          ))}
        </div>

        <div className=" w-[48%] flex-col flex gap-6">
          <h2 className="text-lg  pt-4 font-semibold ">{product.name}</h2>
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
          <p className="text-secondText font-bold">
            {product.sell_count} Reviews
          </p>
          <p className="text-textColor text-2xl font-bold ">${product.price}</p>
          <div className="flex items-center">
            <p className="text-secondText text-lg font-semibold">
              Availability &nbsp;&nbsp;&nbsp;:
            </p>
            <p className="capitalize text-[] text-lg font-semibold">
              &nbsp; In Stock
            </p>
          </div>
          <p className="text-zinc">{product.description}</p>
          <div className="w-[90%] h-[2px] bg-mutedColor"></div>
          <div className="flex gap-3">
            <button className="h-5 w-5 bg-[#23A6F0] rounded-full"></button>
            <button className="h-5 w-5 bg-[#23856D] rounded-full"></button>
            <button className="h-5 w-5 bg-[#E77C40] rounded-full"></button>
            <button className="h-5 w-5 bg-[#252B42] rounded-full"></button>
          </div>

          <div className="flex items-center justify-between w-[300px]">
            <button className="bg-[#23A6F0] text-white px-4 py-2 font-normal rounded">
              Select Options
            </button>
            <CiHeart className="w-8 h-8 rounded-full border-2 border-[#E8E8E8] bg-white" />
            <CiShoppingCart
              onClick={addtoShoppingCart}
              className="w-8 h-8 rounded-full border-2 border-[#E8E8E8] bg-white"
            />
            <IoMdEye className="w-8 h-8 rounded-full border-2 border-[#E8E8E8] bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productt;
