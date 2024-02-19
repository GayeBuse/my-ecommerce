import blogdata from "../data/blogdata";
import { LuAlarmClock } from "react-icons/lu";
import { FaChartArea } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
export default function Blog() {
  return (
    <>
      <div className="text-center flex flex-col gap-3 justift-center items-center mt-[4%] mb-[4%]">
        <h6 className="text-[#23A6F0] text-sm font-bold"> Practice Advice </h6>
        <h3 className="text-[#252B42] text-[40px] font-bold">Featured Posts</h3>
        <p className="text-neutral-500 text-sm font-normal w-[40%]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>
      <div className="flex justify-between gap-10 items-center flex-wrap">
        {blogdata.map((blog, index) => (
          <div className="max-w-sm mx-auto " key={index}>
            <div className="relative">
              <img
                src={blog.img}
                alt={blog.title}
                className="object-cover w-[100%]"
              />
            </div>
            <div className="flex flex-col px-[1.5625rem] pt-[1.5625rem] pb-[2.1875rem] ">
              <div className="text-[0.75rem] flex gap-4">
                <p className="text-[#8EC2F2]">Google</p>
                <p>Trending</p>
                <p>New</p>
              </div>
              <h4 className="text-[1.25rem] text-clr-dark font-bold">
                {blog.title}
              </h4>
              <p className="text-[0.875rem] max-w-[75%] font-normal text-[#737373] mb-3">
                {blog.post}
              </p>
              <div className="flex justify-between ">
                <div className="flex justify-center items-center gap-1">
                  <LuAlarmClock className="text-blue-500" />
                  <p className="text-xs font-normal text-[#737373] ">
                    {blog.date}
                  </p>
                </div>
                <div className="flex justify-between">
                  <div className="flex">
                    <FaChartArea className="text-[#23856D]" />
                    <p className="text-xs font-normal text-[#737373]">
                      10 comments
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-center cursor-pointer">
                <p className="text-lighterDark text-sm font-bold mt-2  text-[#737373]">
                  Learn More
                </p>
                <FaChevronRight className="text-[#23A6F0] mt-2" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
