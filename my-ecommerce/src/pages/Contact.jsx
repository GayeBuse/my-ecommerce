import bg from "../../public/contact/bg.svg";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { CiTwitter, CiLinkedin } from "react-icons/ci";
import Arrow from "../../public/contact/Arrow.png";
import Vectork from "../../public/contact/Vectork.png";
import Vectort from "../../public/contact/Vectort.png";
import Vectorm from "../../public/contact/Vectorm.png";

export default function Contact() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex flex-col mx-auto gap-20">
          <div className="flex items-center justify-between gap-10 max-w-screen-2xl mx-auto sm:flex-col">
            <div className="flex flex-col gap-4 items-start justify-center sm:text-center sm:items-center sm:gap-10">
              <h5 className="text-darkText text-base font-bold leading-normal tracking-tight">
                CONTACT US
              </h5>
              <h1 className="text-darkText text-[58px] font-bold leading-[80px] tracking-tight sm:text-4xl">
                Get in touch
                <br />
                today!
              </h1>
              <h4 className=" text-lighterDark text-xl font-medium sm:w-60 sm:text-lg">
                We know how large objects will act, but
                <br className="sm:hidden" />
                things on a small scale
              </h4>
              <div className="text-darkText text-2xl font-bold sm:flex sm:flex-col sm:gap-4 sm:text-xl">
                <p>Phone: +451 215 215</p>
                <p>Fax: +451 215 215</p>
              </div>
              <div className="flex gap-5 text-2xl">
                <CiTwitter />
                <FaFacebook />
                <FaInstagram />
                <CiLinkedin />
              </div>
            </div>
            <div className="w-1/2">
              <img
                className="h-auto min-w-[70%] min-h-[70%] "
                src={bg}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="">
          <div className="font-bold py-[5em]">
            <div className="w-[45%] m-auto mb-5 flex flex-col justify-center items-center ">
              <p className="text-[1rem] ">VISIT OUR OFFICE</p>
              <p className="text-[2.5rem] text-center">
                We help small businesses with big ideas
              </p>
            </div>
            <div className="flex flex-wrap justify-center h-[403px]">
              <div className="flex flex-col items-center gap-y-[0.9375rem] py-[3.125em] px-[2.5em]">
                <img
                  className="w-auto h-auto object-cover"
                  src={Vectort}
                  alt="img"
                />
                <div className="text-[1rem]  ">
                  <p>georgia.young@example.com</p>
                  <p>georgia.young@ple.com</p>
                </div>
                <p className="">Get Support</p>
                <button className=" text-[#23A6F0] w-[189px] h-[54px] rounded-[37px] border-[#23A6F0] border-2">
                  Submit Request
                </button>
              </div>
              <div className="bg-[#252B42] text-white flex flex-col items-center gap-y-[0.9375rem] py-[3.125em] px-[2.5em] bg-bgclr-dark">
                <img
                  className="w-auto h-auto object-cover"
                  src={Vectork}
                  alt="img"
                />
                <div className=" text-[1rem] ">
                  <p>georgia.young@example.com</p>
                  <p>georgia.young@ple.com</p>
                </div>
                <p className="text-clr-light">Get Support</p>
                <button className=" text-[#23A6F0] w-[189px] h-[54px] rounded-[37px] border-[#23A6F0] border-2">
                  Submit Request
                </button>
              </div>
              <div className="flex flex-col items-center gap-y-[0.9375rem] py-[3.125em] px-[2.5em]">
                <img
                  className="w-auto h-auto object-cover "
                  src={Vectorm}
                  alt="img"
                />
                <div className=" text-[1rem]">
                  <p>georgia.young@example.com</p>
                  <p>georgia.young@ple.com</p>
                </div>
                <p className="">Get Support</p>
                <button className=" text-[#23A6F0] w-[189px] h-[54px] rounded-[37px] border-[#23A6F0] border-2">
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center sm:mt-[35rem]">
        <div className="">
          <div className="font-bold pb-[5em]">
            <img className="m-auto mb-4 " src={Arrow} alt="" />
            <h6 className="mb-[2rem]">WE Can't WAIT TO MEET YOU</h6>
            <h2 className=" mb-[1rem] text-[3.625rem]">Let's Talk</h2>
            <div className="flex items-center justify-center">
              <button className="w-40 h-10 rounded bg-[#23A6F0] text-white">
                Try it free now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
