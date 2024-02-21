export default function Fluid() {
  return (
    <>
      <div className="flex flex-wrap gap-9 sm:flex-col-reverse  sm:gap-10">
        <div className="mx-16 sm:mx-0 sm:pl-4 ">
          <img
            src="./fluid/fluid.png"
            alt=""
            className="w-[45rem] h-[48rem] object-cover sm:w-[463px] sm:h-[403px] "
          />
        </div>

        <div className="mx-auto my-auto  flex flex-col gap-7 sm:w-2/3 sm:pt-[4rem] sm:items-center">
          <h5 className="text-base font-bold text-[#BDBDBD]">SUMMER 2020</h5>
          <h1 className="text-[2.5rem] text-[#252B42] font-bold max-w-sm">
            Part of the Neural Universe
          </h1>
          <h4 className="text-[#737373] text-xl font-normal max-w-sm">
            We know how large objects will act, but things on a small scale.
          </h4>
          <div className="flex justify-between  sm:flex-col  sm:items-center sm:gap-5 ">
            <button className="px-10 py-4 bg-[#2DC071] rounded-md text-white sm:bg-[#23A6F0] sm:w-[162px] h-[52px] sm:px-0 sm:py-0 ">
              BUY NOW
            </button>
            <button className="px-10 py-4 text-[#2DC071] border-[#2DC071] border-[1px] rounded-md font-bold sm:w-[162px] h-[52px] sm:px-0 sm:py-0 sm:border-[#23A6F0] sm:text-[#23A6F0]">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
