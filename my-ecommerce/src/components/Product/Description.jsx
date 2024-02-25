import { NavLink } from "react-router-dom";
import product from "../../../public/productdata/product.png";
import { FaChevronRight } from "react-icons/fa6";
export default function Description() {
  return (
    <>
      <div className="text-[#737373] font-bold flex justify-center items-center p-4 sm:justify-between  ">
        <nav className="gap-2 flex justify-between sm:text-[14px]   ">
          <NavLink className="" to="#">
            Description
          </NavLink>
          <NavLink to="#">Additional Information</NavLink>
          <NavLink to="#">
            Reviews<span className="text-[#23856D]">(0)</span>
          </NavLink>
        </nav>
      </div>
      <div className="">
        <div className="flex  w-[90%] mx-auto gap-[4rem] flex-wrap ">
          <div className="">
            <img src={product} className="sm:pl-[2.5rem]" />
          </div>

          <div className="flex basis-1/4 flex-col sm:basis-auto">
            <div className="font-bold text-[24px] pb-[1.5rem]  ">
              the quick fox jumps over
            </div>
            <p className="text-sm text-[#737373] font-normal pb-[1.5rem]  ">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="text-sm text-[#737373] font-normal pb-[1.5rem]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="text-sm text-[#737373] font-normal">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          <div className="flex flex-col text-sm text-[#737373] font-bold ">
            <div className="font-bold text-[24px] pt-3 pb-[1.5rem] text-black">
              the quick fox jumps over
            </div>
            <FaChevronRight />

            <p className="flex justify-center">
              the quick fox jumps over the lazy dog
            </p>
            <FaChevronRight />
            <p className="flex justify-center">
              the quick fox jumps over the lazy dog
            </p>
            <FaChevronRight />
            <p className="flex justify-center">
              the quick fox jumps over the lazy dog
            </p>
            <FaChevronRight />
            <p className="flex justify-center">
              the quick fox jumps over the lazy dog
            </p>
            <div className="font-bold text-[24px] pt-4 pb-[1.5rem] text-black">
              the quick fox jumps over
            </div>
            <FaChevronRight />
            <p className="flex justify-center">
              the quick fox jumps over the lazy dog
            </p>
            <FaChevronRight />
            <p className="flex justify-center ">
              the quick fox jumps over the lazy dog
            </p>
            <FaChevronRight />
            <p className="flex justify-center ">
              the quick fox jumps over the lazy dog
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
