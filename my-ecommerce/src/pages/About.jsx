import about from "../../public/about/about.png";
import video from "../../public/about/video.png";
import about1 from "../data/about1";
import { FaInstagram } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaCirclePlay } from "react-icons/fa6";
import aboutp from "../../public/about/aboutp.png";
export default function About() {
  return (
    <>
      <div>
        <div className="flex justify-between flex-wrap ">
          <div className="flex flex-col my-auto mx-auto gap-11  sm:justify-center sm:items-center ">
            <p className="text-[#252B42] font-bold text-base sm:hidden">
              ABOUT COMPANY
            </p>
            <h1 className="text-[#252B42] font-bold text-[3.625rem] sm:text-[40px] sm:mt-40 ">
              ABOUT US
            </h1>
            <p className="text-[#737373] w-[18rem]">
              We know how large objects will act, but things on a small scale
            </p>
            <button className="w-40 h-10 rounded bg-[#23A6F0] text-white">
              Get Quote Now
            </button>
          </div>
          <img src={about} className="sm:mt-40" />
        </div>
        <div className="flex justify-center items-center gap-48 flex-wrap sm:mt-10 sm:text-center sm:px-10 sm:gap-0">
          <div className="w-[25rem]">
            <p className="text-[#E74040] text-sm font-normal">
              Problems trying
            </p>
            <p className="text-[#252B42] text-2xl font-bold mt-5">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </p>
          </div>
          <div className="w-[30rem] ">
            <p className="text-[#737373] text-sm font-normal pt-10">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-32 flex-wrap mt-[8%]">
          <div>
            <p className="text-[#252B42] text-[3.625rem] font-bold">15K</p>
            <p className="text-base">Happy Customers</p>
          </div>
          <div>
            <p className="text-[#252B42] text-[3.625rem] font-bold">150K</p>
            <p className="text-base">Monthly Visitors</p>
          </div>
          <div>
            <p className="text-[#252B42] text-[3.625rem] font-bold flex justify-center">
              15
            </p>
            <p className="text-base">Countries Worldwide</p>
          </div>
          <div>
            <p className="text-[#252B42] text-[3.625rem] font-bold">100+</p>
            <p className="text-base">Top Partners</p>
          </div>
        </div>
        <div className="flex justify-center relative mt-[8%]">
          <img src={video} className="rounded-[1.25rem]" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2">
            <FaCirclePlay className="  text-[#23A6F0] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute text-6xl " />
          </div>
        </div>
        <div className="flex flex-col w-[70%] mx-auto text-center gap-5 my-10 mt-[20%] justify-center items-center">
          <p className="text-[2.5rem] text-[#252B42] font-bold ">
            Meet Our Team
          </p>
          <p className="text-[#737373] font-normal w-[60%]">
            Problems trying to resolve the conflict <br />
            between the two major realms of Classical physics: Newtonian
            mechanics
          </p>
        </div>
        <div className="flex justify-between  mt-[8%]  flex-wrap sm:justify-center">
          {about1.slice(0, 3).map((item) => (
            <div className="text-center flex flex-col gap-3" key={item.img}>
              <img src={item.img} alt="Media" />
              <p className="text-base text-[#252B42] font-bold">
                {item.username}
              </p>
              <p className="text-sm text-[#737373] font-bold">
                {item.profession}
              </p>
              <div className="gap-[20px] flex justify-center items-center text-2xl text-[#23A6F0]">
                <FaFacebook />
                <FaInstagram />
                <CiTwitter />
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#FAFAFA] text-center py-10">
          <div className="w-[50%] mx-auto flex flex-col gap-10 ">
            <p className="text-[#252B42] text-[2.5rem] font-bold">
              Big Companies Are Here
            </p>
            <p className="text-[#737373] text-sm w-[50%] mx-auto pb-5 sm:w-[120%] sm:justify-center sm:items-center ">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>

          <div className=" mx-auto flex justify-center items-center h-[636px] bg-blue-500 sm:w-[414px] sm:h-[520px] sm:bg-[#2A7CC7] ">
            <div className="flex justify-between w-full">
              <div className="w-1/2 text-white px-8 py-4 flex flex-col items-center justify-center">
                <div className="text-left w-[500px] sm:text-center sm:w-auto sm:pl-[9rem]">
                  <p className="text-[16px] font-bold mb-5">WORK WITH US</p>
                  <p className="text-[40px] font-bold mb-2 sm:w-64  ">
                    Now Let’s grow Yours
                  </p>
                  <p className="sm:w-64">
                    The gradual accumulation of information about atomic and
                    small-scale behavior during the first quarter of the 20th
                  </p>
                  <button className="mt-3 w-[130px] h-[52px] rounded-[5px] border-1 border-[#FAFAFA]">
                    Button
                  </button>
                </div>
              </div>

              <div className=" ">
                <img
                  src={aboutp}
                  alt="Resim"
                  className=" object-cover sm:hidden "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
