import { FaAngleRight } from "react-icons/fa";
import { HiViewGrid } from "react-icons/hi";
import { CiViewList, CiShoppingCart, CiSearch, CiHeart } from "react-icons/ci";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { setProductsAction } from "../store/actions/productAction/productAction";
import { useLocation } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
const navItems = [
  ["Default", ""],
  ["Price Low to High", "price:asc"],
  ["Price High to Low", "price:desc"],
  ["Rating Low to High", "rating:asc"],
  ["Rating High to Low", "rating:desc"],
];

export default function ProductList() {
  const [isLoading, setIsLoading] = useState(false);
  const [dropdownPick, setDropdownPick] = useState("Order By");
  const pageCount = useSelector((state) => state.product.pageCount);
  const { gender, category } = useParams();
  const history = useHistory();
  const limit = 24;
  const dispatch = useDispatch();
  const products = useSelector((store) => store.product.productList);
  const categories = useSelector((state) => state.global.categories);
  const { search } = useLocation();
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [categoryID, setCategoryID] = useState();

  const endOffset = offset + limit;
  const currentItems = products?.slice(offset, endOffset);

  const [filterText, setFilterText] = useState("");

  const [sort, setSort] = useState(null);

  const handleChange = (e) => {
    setFilterText(e.target.value);
  };

  const handleFilter = (e) => {
    e.preventDefault();
    updateUrl();
  };

  const cleanFilter = () => {
    setFilterText("");
  };

  const handleSort = (e) => {
    const selectedSortOption = e.target.value;
    setDropdownPick(selectedSortOption); // Dropdown menüde seçili değeri güncelle
    setSort(selectedSortOption); // Sıralama seçeneğini ayarla
    updateUrl(); // URL'yi güncelle
  };

  const handlePageClick = (e) => {
    const newOffset = e.selected * limit;
    setOffset(newOffset);
    // Yeni verileri almak için Redux mağazasını güncelle
    dispatch(setProductsAction(categoryID, filterText, sort, limit, newOffset));
  };

  useEffect(() => {
    const categoryCode = gender?.slice(0, 1) + ":" + category;
    const categoryRec = categories?.find((c) => c.code == categoryCode);
    setCategoryID(categoryRec?.id);
    setHasMore(true);
  }, [gender, category, categories]);

  const updateUrl = () => {
    const urlBase = `/shopping${gender ? `/${gender}` : ""}${
      category ? `/${category}` : ""
    }`;
    // filterText ve offset varsa, URL'e ekle
    const queryParams = [];
    if (filterText) {
      queryParams.push(`filter=${filterText}`);
    }
    if (offset) {
      queryParams.push(`offset=${offset}`);
    }
    if (sort) {
      queryParams.push(`sort=${sort}`);
    }
    const queryString =
      queryParams.length > 0 ? `?${queryParams.join("&")}` : "";
    // filterText veya offset varsa URL'i güncelle, yoksa güncelleme
    const url = `${urlBase}${queryString}`;
    console.log("Updated URL:", url);
    history.push(url);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Set loading to true when fetching data starts
        setIsLoading(true);

        setTimeout(() => {
          dispatch(
            setProductsAction(categoryID, filterText, sort, limit, offset)
          );
          updateUrl();

          // Set loading to false after fetching data
          setIsLoading(false);
        }, 500);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Set loading to false in case of an error
        setIsLoading(false);
      }
    };

    if (hasMore) {
      fetchData();
    }
  }, [filterText, sort, categoryID, offset, hasMore]);
  useEffect(() => {
    dispatch(setProductsAction());
  }, [dispatch]);

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
          <div className="flex   bg-lightGray justify-between gap-4 pb-12 px-24 sm:flex-col">
            {mostRating.slice(0, 5).map((category) => {
              return (
                <div
                  key={category.id}
                  className="border-2 border-gray-300 hover:border-blue-500 w-[20%] relative sm:w-[100%]"
                >
                  <NavLink
                    to={`/shopping/${
                      category.code.includes("e:")
                        ? `erkek/${category.code.slice(
                            2,
                            category.code.length
                          )}`
                        : `kadin/${category.code.slice(
                            2,
                            category.code.length
                          )}`
                    }${search}`}
                    key={category.id}
                  >
                    <img className="h-[100%]" src={category.img} />
                    <div className="flex flex-col gap-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lightText">
                      <h2 className="font-semibold text-xl">
                        {category.title}
                      </h2>
                      <p className="text-center font-semibold text-lg">
                        {category.rating}
                      </p>
                    </div>
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex mx-auto justify-between items-center mt-4  w-[80%] flex-wrap sm:justify-center">
          <label className="flex ">
            <p> Showing all {currentItems.length} results</p>
          </label>
          <div className="flex gap-2 justify-center items-center sm:w-1/2 ">
            <p>Views:</p>
            <HiViewGrid className="text-2xl" />
            <CiViewList className="text-2xl" />
          </div>
          <div className=" gap-52 items-center">
            <form
              onSubmit={handleFilter}
              className="flex items-center gap-6 sm:flex-col"
            >
              <div className="flex gap-[15px] justify-center items-center">
                <input
                  type="text"
                  name="filter"
                  className="border border-[#DADADA] py-2 rounded-md bg-[#F5F5F5] text-black p-2 sm:w-72"
                  placeholder="Search"
                  onChange={handleChange}
                  value={filterText}
                ></input>
                <button onClick={cleanFilter}></button>
              </div>
              <select
                value={dropdownPick} // Seçili değeri belirtin
                onChange={handleSort} // Seçili değeri güncelleyin
                className="text-sm leading-7 text-secondary rounded pl-3 py-2.5 border-1 text-gray border-[#DDDDDD]  hover:bg-gray-300 hover:text-black"
              >
                {navItems.map((item, index) => (
                  <option value={item[1]} key={index}>
                    {item[0]}
                  </option>
                ))}
              </select>

              <button
                size="lg"
                className="  mt-5 bg-blue-500 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Filter
              </button>
            </form>
          </div>
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center">
            {/* Loading message while fetching data */}
            <ClipLoader size={50} color={"#123abc"} loading={true} />
            <p>Loading...</p>
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-center gap-14 sm:flex-col sm:flex">
            {products.map((product, index) => (
              <div
                key={index}
                className=" border-2 border-gray-300 hover:border-blue-500 flex flex-col items-center gap-3 w-[25rem] shadow-xl p-5"
              >
                <Link
                  to={`/product/${product.id}/${product.name
                    .toLowerCase()
                    .replaceAll(" ", "-")} `}
                >
                  <img
                    src={product.images[0].url}
                    className=" w-[239px] h-[280px] object-cover sm:w-[400px]  "
                  />
                  <div className="flex flex-col items-center py-[30px] gap-[10px]    ">
                    <h5 className="text-[16px] font-semibold ">
                      {product.name}
                    </h5>
                    <p className="text-[14px] text-[#737373] font-bold ">
                      {product.description}
                    </p>
                    <div className="flex gap-[5px] py-[5px] px-[3px] text-[16px] font-bold">
                      <p className="text-[#BDBDBD]">$200.0</p>
                      <p className="text-[#23856D]">${product.price}</p>
                    </div>
                    <div className="flex flex-row gap-2">
                      <button className="h-5 w-5 bg-[#23A6F0] rounded-full"></button>
                      <button className="h-5 w-5 bg-[#23856D] rounded-full"></button>
                      <button className="h-5 w-5 bg-[#E77C40] rounded-full"></button>
                      <button className="h-5 w-5 bg-[#252B42] rounded-full"></button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      <ReactPaginate
        pageCount={pageCount} // Toplam sayfa sayısı
        pageRangeDisplayed={3} // Görüntülenecek sayfa düğmelerinin sayısı
        marginPagesDisplayed={2} // Başlangıç ve bitiş sayfalarından önce ve sonra gösterilecek boşluk sayısı
        onPageChange={handlePageClick} // Sayfa değiştiğinde çalışacak işlev
        containerClassName="flex justify-center items-center  my-4 gap-3" // Sayfalama bileşeninin sınıf adı
        activeClassName={"active"} // Aktif sayfa için sınıf adı
        renderOnZeroPageCount={null}
        previousLabel="< Back"
        nextLabel="Next >"
        nextClassName="mx-1 hover:bg-blue-200 cursor-pointer"
        previousClassName="mx-1 hover:bg-blue-200 cursor-pointer"
        pageClassName="mx-1 hover:bg-blue-200 cursor-pointer"
      />
    </div>
  );
}
