import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  toggleCheckItemAction,
} from "../store/actions/shoppingCartAction/shoppingCartAction";

export default function ShopProductCard() {
  const cart = useSelector((store) => store.shoppingCart.cartList);
  const dispatch = useDispatch();

  function productPlus(item) {
    dispatch(addToCart(item));
  }

  function productMinus(item) {
    dispatch(addToCart(item, "decrement"));
  }

  function removeProduct(item) {
    dispatch(removeFromCart(item.id));
  }
  function toggleCheckbox(item) {
    dispatch(toggleCheckItemAction(item));
  }

  function toggleCheckbox(item) {
    dispatch(toggleCheckItemAction(item));
  }
  const checkedItems = cart.filter((item) => item.checked);
  const totalItems = checkedItems.reduce((acc, item) => acc + item.count, 0);
  const totalPrice = checkedItems.reduce(
    (acc, item) => acc + item.count * item.price,
    0
  );
  const shippingCost = 29.99; // Example shipping cost
  const discount = 29.99; // Example discount

  const grandTotal = totalPrice + shippingCost - discount;
  function applyDiscount() {
    // Example discount logic, replace with your own validation logic
    if (discountCode === "DISCOUNT10") {
      setDiscount(10);
    } else {
      setDiscount(0);
      alert("Invalid discount code");
    }
  }
  return (
<<<<<<< HEAD
    <div className="py-20 flex justify-center gap-8">
      <div className="flex-1 flex flex-col w-3/4 max-w-7xl border-2 rounded-lg">
        {cart.length > 0 ? (
          cart.map((item) => {
            if (item.count > 0) {
              return (
                <div
                  key={item.id}
                  className="flex items-center gap-8 px-10 border-b-2 py-5"
                >
                  <input
                    className="w-5 h-5 border-gray-800 rounded"
                    type="checkbox"
                    checked={item.checked}
                    onClick={() => toggleCheckbox(item)}
                  />
                  <img
                    className="w-[9rem] h-[12rem] border-2 rounded-lg"
                    src={item.images[0].url}
                    alt=""
                  />
                  <div className="flex flex-col gap-3">
                    <h1>{item.name}</h1>
                    <h2 className="text-gray-500 w-[20rem]">
                      {item.description}
                    </h2>
                    <span>Beden : 36</span>
                    <span>Adet : {item.count}</span>
                    <div className="flex items-center gap-2">
                      <p className="text-gray-600">
                        <span className="font-extrabold text-blue-300">
                          55 dk içinde
                        </span>{" "}
                        sipariş verirsen{" "}
                        <span className="font-extrabold text-blue-300">
                          en geç yarın
                        </span>{" "}
                        kargoda!
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pl-16 gap-36">
                    <div className="flex items-center">
                      <button
                        onClick={() => productMinus(item)}
                        className="px-3 py-3 border-1 bg-gray-200 "
                      >
                        -
                      </button>
                      <p className="px-3 py-3 border-t-2 border-b-2">
                        {item.count}
                      </p>
                      <button
                        onClick={() => productPlus(item)}
                        className="px-3 py-3 border-1 bg-gray-200 text-black"
                      >
                        +
                      </button>
                    </div>
                    <button onClick={() => removeProduct(item)}>
                      Ürünü Sil
                    </button>
                    <h1 className="text-xl text-blue-300">
                      {item.price * item.count}$
                    </h1>
=======
    <div className="py-20 flex flex-col">
      {cart.length > 0 ? (
        cart.map((item) => {
          if (item.count > 0) {
            return (
              <div
                key={item.id}
                className="flex items-center gap-8 px-28 border-b-2 py-5"
              >
                <input
                  className="w-5 h-5 border-gray-800 rounded"
                  type="checkbox"
                  checked={item.checked}
                  onClick={() => toggleCheckbox(item)}
                />
                <img
                  className="w-[9rem] h-[12rem] border-2 rounded-lg"
                  src={item.images[0].url}
                  alt=""
                />
                <div className="flex flex-col gap-3">
                  <h1>{item.name}</h1>
                  <h2 className="text-gray-500 w-[35rem]">
                    {item.description}
                  </h2>
                  <span>Beden : 36</span>
                  <span>Adet : {item.count}</span>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-600">
                      <span className="font-extrabold text-blue-300">
                        55 dk içinde
                      </span>{" "}
                      sipariş verirsen{" "}
                      <span className="font-extrabold text-blue-300">
                        en geç yarın
                      </span>{" "}
                      kargoda!
                    </p>
>>>>>>> main
                  </div>
                </div>
              );
            }
          })
        ) : (
          <div className="text-center text-gray-500">Sepetinizde ürün yok</div>
        )}
      </div>
      <div>
        <div className=" p-8 border-2 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Sipariş Özeti</h2>
          <p className="text-lg text-gray-500 mb-2">
            Toplam Ürün: {totalItems}
          </p>
          <p className="text-lg text-gray-500 mb-2">
            Ürünün Toplamı: ${totalPrice.toFixed(2)}
          </p>
          <p className="text-lg text-gray-500 mb-2">
            Kargo Toplamı: ${shippingCost.toFixed(2)}
          </p>
          <p className="text-lg text-gray-500 ">
            150 TL ve Üzeri Kargo <br></br> Bedava: -${discount.toFixed(2)}
          </p>

          <hr className="my-4" />
          <p className="text-xl font-bold mt-2">
            Toplam: ${grandTotal.toFixed(2)}
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
            Sepeti Onayla >
          </button>
        </div>
      </div>
    </div>
  );
}
