import { FaAngleRight } from "react-icons/fa6";
import { HiViewGrid } from "react-icons/hi";
import { CiViewList } from "react-icons/ci";
import productlist from "../data/productList";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setProductsAction } from "../store/actions/productAction/productAction";
export default function ProductList() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.global.categories);
  const products = useSelector((store) => store.product.productList);
  const [filters, setFilters] = useState({
    category: "",
    filterText: "",
    sortBy: "",
  });
  const handleCategoryChange = (event) => {
    setFilters({
      ...filters,
      category: event.target.value,
    });
  };
  const handleFilterTextChange = (event) => {
    setFilters({
      ...filters,
      filter: event.target.value,
    });
  };
  const handleSortByChange = (event) => {
    setFilters({
      ...filters,
      sortBy: event.target.value,
    });
  };
  const handleFilterClick = () => {
    dispatch(fetchProducts(fil));
  };
  useEffect(() => {
    dispatch(setProductsAction());
  }, []);

  const mostRating = categories.sort((a, b) => {
    return b.rating - a.rating;
  });
  return (
    <div className="font-['Montserrat']">
      <nav className="hidden sm:flex sm:flex-col sm:items-center text-[#23A6F0]">
        <NavLink to="/" className="mx-2 text-2xl">
          Login
        </NavLink>
        <span className="mx-2">/</span>
        <NavLink to="/signup" className="mx-2 text-2xl">
          Register
        </NavLink>
      </nav>
      <div className=" hidden sm:flex flex-col gap-4 text-3xl justify-center items-center text-[#23A6F0]  ">
        <CiSearch />
        <CiShoppingCart />
        <CiHeart />
      </div>
      <div>
        <div className="bg-[#FAFAFA] py-12">
          <div className="flex justify-between w-[80%] mx-auto sm:flex-col sm:justify-center sm:items-center sm:gap-8">
            <h2 className="text-2xl font-bold text-[#252B42]">SHOP</h2>
            <div className="flex justify-center items-center gap-3 ">
              <a href="#">Home</a>
              <FaAngleRight className=" text-gray-400" />
              <h6>Shop</h6>
            </div>
          </div>
          <div className="flex bg-lightGray justify-between gap-4 pb-12 px-24 sm:flex-col">
            {mostRating.slice(0, 5).map((category) => (
              <div key={category.id} className="w-[20%] relative sm:w-[100%]">
                <NavLink
                  to={`/shopping/${
                    category.code.includes("k:")
                      ? `kadin/${category.code.slice(2)}`
                      : `erkek/${category.code.slice(2)}`
                  }`}
                  key={category.id}
                >
                  <img className="h-[100%]" src={category.img} />
                  <div className="flex flex-col gap-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lightText">
                    <h2 className="font-semibold text-xl">{category.title}</h2>
                    <p className="text-center font-semibold text-lg">
                      {category.rating}
                    </p>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
        <div className="flex mx-auto justify-between items-center mt-4  w-[80%] flex-wrap sm:justify-center">
          <label className="flex ">
            <p>Showing all 12 results</p>
          </label>
          <div className="flex gap-2 justify-center items-center sm:w-1/2 ">
            <p>Views:</p>
            <HiViewGrid className="text-2xl" />
            <CiViewList className="text-2xl" />
          </div>

          <div className="flex gap-2  ">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-lg p-2
              "
            ></input>
            <form>
              <label htmlFor="sort"></label>
              <select name="sort" id="sort" className="border  rounded-lg p-2">
                <option value="price:asc">Price lowest</option>
                <option value="price:desc">Price highest</option>
                <option value="rating:asc">Rating lowest </option>
                <option value="rating:desc">Rating highest </option>
              </select>
            </form>
            <button className="bg-[#23A6F0] text-white  border  rounded-lg p-2 font-normal ">
              FILTER
            </button>
          </div>
        </div>

        <div className="flex gap-[50px] flex-wrap items-center justify-center pb-[80px] w-[90%] mx-auto mt-12">
          {productlist.map((product, index) => (
            <div key={index}>
              <Link to={`/shopping/${product.id}`}>
                <img src={product.img} className="sm:w-[400px]" />

                <div className="flex flex-col items-center py-[30px] gap-[10px]">
                  <h5 className="text-[16px] font-semibold ">
                    {product.title}
                  </h5>
                  <p className="text-[14px] text-[#737373] font-bold">
                    {product.category}
                  </p>
                  <div className="flex gap-[5px] py-[5px] px-[3px] text-[16px] font-bold">
                    <p className="text-[#BDBDBD]"> {product.price}</p>
                    <p className="text-[#23856D]"> {product.sale}</p>
                  </div>
                  <div className="">
                    {product.colors.map((color, colorIndex) => (
                      <span
                        key={colorIndex}
                        className="inline-block w-5 h-5 rounded-2xl mr-1"
                        style={{ backgroundColor: color }}
                      ></span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
