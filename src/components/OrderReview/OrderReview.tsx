import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./OrderReview.scss";
import { productsType } from "../Products/ProductsType/productsType.js";
import { removeFromDb, deleteShoppingCart } from "../../utilities/fakedb.js";
import SingleOrderReview from "./SingleOrderReview.js";
import { useState } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
// import Products from "../Products/Products.js";
import toast from "react-hot-toast";
type CartType = productsType[];

const OrderReview: React.FC = () => {
  const cart = useLoaderData() as CartType;
  const [myCart,setMyCart] = useState(cart);

  const handleDeleteProductFromCart = (id:string) =>{
    const restCart = myCart.filter((product) => product.id !== id);
    setMyCart(restCart);
    removeFromDb(id)
    const deletedItem = myCart.find((product: CartType) => product.id === id);
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img className="h-10 w-10 rounded-full" src={deletedItem.img} />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                {deletedItem.name}
              </p>
              <p className="mt-1 text-sm text-gray-500">Price : ${deletedItem.price}</p>
              <p>Deleted Successfully </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    ));
  }

  const handleDeleteCart = () => {
    setMyCart([]);
    deleteShoppingCart();
    toast.success("Successfully deleted all products from Cart!");
  };

  return cart.length < 1 ? (
    <h1 className="text-center mt-60 text-6xl">Your Cart Is Empty</h1>
  ) : (
    <div className="order-review-components flex justify-evenly pt-16">
      <section>
        {myCart.map((product: productsType) => (
          <SingleOrderReview
            key={product.id}
            product={product}
            handleDeleteProductFromCart={handleDeleteProductFromCart}
          ></SingleOrderReview>
        ))}
      </section>
      <section>
        <Cart cart={myCart} handleDeleteCart={handleDeleteCart}>
          <Link to="/checkout">
            <button className="checkout-button text-sm sm:text-md flex items-center justify-center">
              <p>Proceed CheckOut</p>
              <ShoppingBagIcon className="h-5 w-5  ml-3" />
            </button>
          </Link>
        </Cart>
      </section>
    </div>
  );
};

export default OrderReview;
