import Carousel from "../components/Carousel/Carousel";
import Carousel2 from "../components/Carousel/Carousel2";
import Fluid from "../components/Fluid";
import ProductCard from "../components/ProductCard";
import ShopCard from "../components/ShopCard";
import Blog from "../components/Blog";
export default function Home() {
  return (
    <>
      <div>
        <Carousel />
        <ShopCard />
        <ProductCard />
        <Carousel2 />
        <Fluid />
        <Blog />
      </div>
    </>
  );
}
