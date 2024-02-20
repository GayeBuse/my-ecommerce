import Description from "../components/Product/Description";
import Productt from "../components/Product/Productt";
import Bestseller from "../components/Product/Bestseller";
export default function Product() {
  return (
    <>
      <div>
        <Productt />
        <Description />
        <Bestseller />
      </div>
    </>
  );
}
