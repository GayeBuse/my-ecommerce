import Vector from "../../public/vector/Vector.png";
import Vector1 from "../../public/vector/Vector1.png";
import Vector2 from "../../public/vector/Vector2.png";
import Vector3 from "../../public/vector/Vector3.png";
import Vector4 from "../../public/vector/Vector4.png";
import Vector5 from "../../public/vector/Vector5.png";

export default function Advert() {
  return (
    <div className=" mb-5">
      <div className="flex object-cover justify-between flex-wrap mx-auto w-[80%]">
        <img src={Vector} alt="" className="" />
        <img src={Vector1} alt="" className="" />
        <img src={Vector2} alt="" className="" />
        <img src={Vector3} alt="" className="" />
        <img src={Vector4} alt="" className="" />
        <img src={Vector5} alt="" className="" />
      </div>
    </div>
  );
}
