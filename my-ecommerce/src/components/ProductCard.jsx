import { useDispatch, useSelector } from "react-redux";
import { setProductsAction } from "../store/actions/productAction/productAction";
import { useEffect } from "react";

export default function Bestseller() {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.product.productList);
  const mostRating = products.sort((a, b) => {
    return b.rating - a.rating;
  });
  const bestProducts = mostRating.slice(0, 9);
  useEffect(() => {
    dispatch(setProductsAction());
  }, [dispatch]);

  return (
    <>
      <div className="bg-[#FAFAFA] w-[90%] mx-auto">
        <h1 className=" flex  text-2xl font-bold m-3 ">BESTSELLER PRODUCTS</h1>
        <div className="flex gap-[50px] flex-wrap items-center justify-center pb-[80px]">
          {bestProducts.map((product, index) => (
            <div
              className="border-2 border-gray-300 hover:border-blue-500 flex flex-col items-center gap-3 w-[25rem] shadow-xl p-5"
              key={index}
            >
              <img
                src={product.images[0].url}
                alt=""
                className="w-[239px] h-[280px] object-cover sm:w-[400px]  "
              />
              <div className="flex flex-col items-center py-[30px] gap-[10px]">
                <h2 className="text-[16px] font-semibold">{product.name}</h2>
                <p className="text-[14px] text-[#737373] font-bold">
                  {product.description}
                </p>
                <div className="flex gap-[5px] py-[5px] px-[3px] text-[16px] font-bold">
                  <p className="text-[#BDBDBD]">$1000</p>
                  <p className="text-[#23856D]"> ${product.price}</p>
                  <div className="flex flex-row gap-2">
                    <button className="h-5 w-5 bg-[#23A6F0] rounded-full"></button>
                    <button className="h-5 w-5 bg-[#23856D] rounded-full"></button>
                    <button className="h-5 w-5 bg-[#E77C40] rounded-full"></button>
                    <button className="h-5 w-5 bg-[#252B42] rounded-full"></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
