import about1 from "../data/about1";
import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import team1 from "../../public/team/team1.png";
import team2 from "../../public/team/team2.png";
import team3 from "../../public/team/team3.png";
import team4 from "../../public/team/team4.png";
import team5 from "../../public/team/team5.png";
import { FaAngleRight } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

export default function Team() {
  return (
    <div>
      <div className="">
        <div>
          <p className="flex flex-col justify-center items-center text-base font-bold text-[#737373] ">
            WHAT WE DO
          </p>
          <p className="text-[58px] mt-5 flex flex-col justify-center items-center text-base font-bold">
            Innovation tailored for you
          </p>
        </div>
        <div className="flex items-center justify-center mt-5">
          <p className="font-bold">Home </p>
          <FaAngleRight className=" text-gray-400" />
          <p>Team</p>
        </div>
        <div className="flex items-start justify-center m-[1rem]">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
              <img
                src={team3}
                alt="img"
                className="w-full h-auto mb-[.3rem] lg:mb-0"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-wrap mb-[1rem]">
              <div className="w-full lg:w-1/2 p-[.3rem]">
                <img
                  src={team2}
                  alt="img"
                  className="w-full h-auto mb-[2.2rem]"
                />
                <img
                  src={team1}
                  alt="img"
                  className="w-full h-auto mb-[2.2rem]"
                />
              </div>
              <div className="w-full lg:w-1/2 mb-[2.2rem]">
                <img
                  src={team4}
                  alt="img"
                  className="w-full h-auto mb-[1.8rem]"
                />
                <img
                  src={team5}
                  alt="img"
                  className="w-full h-auto mb-[2.2rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center font-bold text-[40px] mt-5">
        Meet Our Team
      </div>
      <div className="py-[5rem] flex flex-wrap gap-y-[5rem] gap-x-[4rem]  justify-center ">
        {about1.map((item) => (
          <div className="text-center flex flex-col gap-3" key={item.img}>
            <img src={item.img} alt="Media" />
            <p className="text-base text-[#252B42] font-bold">
              {item.username}
            </p>
            <p className="text-sm text-[#737373] font-bold">
              {item.profession}
            </p>
            <div className=" flex flex-wrap  gap-4  justify-center  text-2xl text-[#23A6F0]">
              <FaFacebook />
              <FaInstagram />
              <CiTwitter />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center flex-col gap-4">
        <p className="text-4xl font-bold leading-tight tracking-wide">
          Start your 14 days free trial
        </p>
        <p className="text-base font-normal w-[500px] text-center text-[#737373]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <button className="w-40 h-10 rounded bg-[#23A6F0] text-white">
          Try it free now
        </button>
        <div className="flex  gap-4 text-2xl ">
          <CiTwitter />
          <FaFacebook />
          <FaInstagram />
          <CiLinkedin />
        </div>
      </div>
    </div>
  );
}
