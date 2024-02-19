import { FaHooli } from "react-icons/fa";
import { FaPiedPiperHat } from "react-icons/fa";
import { FaStripe } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaLyft } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";

export default function Advert() {
  return (
    <div className="text-[#737373] mb-5 mt-5 sm:hidden">
      <div className="flex object-cover justify-between flex-wrap mx-auto w-[80%]">
        <FaHooli className="text-[8rem]" />
        <FaLyft className="text-[8rem]" />
        <FaPiedPiperHat className="text-[8rem]" />
        <FaStripe className="text-[8rem]" />
        <FaAws className="text-[8rem]" />
        <FaRedditAlien className="text-[8rem]" />
      </div>
    </div>
  );
}
