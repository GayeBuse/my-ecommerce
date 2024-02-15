import about from "../../public/about/about.png";
import video from "../../public/about/video.png";
import about1 from "../data/about1";
import { FaInstagram } from "react-icons/fa";
import Advert from "../components/Advert";
import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaCirclePlay } from "react-icons/fa6";
export default function About() {
  return (
    <>
      <div>
        <div className="flex justify-between flex-wrap ">
          <div className="flex flex-col my-auto mx-auto gap-11">
            <p className="text-[#252B42] font-bold text-base"> ABOUT COMPANY</p>
            <h1 className="text-[#252B42] font-bold text-[3.625rem] ">
              ABOUT US
            </h1>
            <p className="text-[#737373] w-[18rem]">
              We know how large objects will act, but things on a small scale
            </p>
            <button className="w-40 h-10 rounded bg-[#23A6F0] text-white">
              Get Quote Now
            </button>
          </div>
          <img src={about} />
        </div>
        <div className="flex justify-center gap-48 flex-wrap">
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
        <div className="flex justify-center gap-32 flex-wrap">
          <div>
            <p className="text-[#252B42] text-[3.625rem] font-bold">15K</p>
            <p className="text-base">Happy Customers</p>
          </div>
          <div>
            <p className="text-[#252B42] text-[3.625rem] font-bold">150K</p>
            <p className="text-base">Monthly Visitors</p>
          </div>
          <div>
            <p className="text-[#252B42] text-[3.625rem] font-bold">15</p>
            <p className="text-base">Countries Worldwide</p>
          </div>
          <div>
            <p className="text-[#252B42] text-[3.625rem] font-bold">100+</p>
            <p className="text-base">Top Partners</p>
          </div>
        </div>
        <div className="flex justify-center relative">
          <img src={video} className="rounded-[1.25rem]" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2">
            <FaCirclePlay className="  text-[#23A6F0] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute text-6xl " />
          </div>
        </div>
        <div className="flex flex-col w-[70%] mx-auto text-center gap-5 my-10">
          <p className="text-[2.5rem] text-[#252B42] font-bold">
            Meet Our Team
          </p>
          <p className="text-[#737373] font-normal w-[45%]">
            Problems trying to resolve the conflict <br />
            between the two major realms of Classical physics: Newtonian
            mechanics
          </p>
        </div>
        <div className="flex justify-between">
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
            <p className="text-[#737373] text-sm w-[50%] mx-auto pb-5">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <Advert />
        </div>
      </div>
    </>
  );
}
