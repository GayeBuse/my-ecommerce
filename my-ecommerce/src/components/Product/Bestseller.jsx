import productcardata from "../../data/productcardata";

export default function Bestseller() {
  return (
    <>
      <div className="bg-[#FAFAFA] w-[90%] mx-auto">
        <h1 className=" flex  text-2xl font-bold m-3 ">BESTSELLER PRODUCTS</h1>
        <div className="flex gap-[50px] flex-wrap items-center justify-center pb-[80px]">
          {productcardata.map((product, index) => (
            <div className="product-card" key={index}>
              <img
                src={product.img}
                alt={product.title}
                className="w-[239px] h-[280px] object-cover sm:w-[400px]  "
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
