import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./OrderReview.scss";
import { productsType } from "../Products/ProductsType/productsType.js";
import { removeFromDb, deleteShoppingCart } from "../../utilities/fakedb.js";
import SingleOrderReview from "./SingleOrderReview.js";
import { useState } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
// import Products from "../Products/Products.js";

type CartType = productsType[];

const OrderReview: React.FC = () => {
  const cart = useLoaderData() as CartType;
  const [myCart,setMyCart] = useState(cart);

  const handleDeleteProductFromCart = (id:string) =>{
    const restCart = myCart.filter((product) => product.id !== id);
    setMyCart(restCart);
    removeFromDb(id)
  }

  const handleDeleteCart = () => {
    setMyCart([]);
    deleteShoppingCart();
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
