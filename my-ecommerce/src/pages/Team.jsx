import about1 from "../data/about1";
export default function Team() {
  return (
    <div className="flex justify-between">
      {about1.map((item) => (
        <div className="text-center flex flex-col gap-3" key={item.img}>
          <img src={item.img} alt="Media" />
          <p className="text-base text-[#252B42] font-bold">{item.username}</p>
          <p className="text-sm text-[#737373] font-bold">{item.profession}</p>
        </div>
      ))}
    </div>
  );
}
