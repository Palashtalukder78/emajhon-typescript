import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./OrderReview.scss";
import { productsType } from "../Products/ProductsType/productsType.js";

import { ArchiveBoxXMarkIcon } from "@heroicons/react/24/solid";

type CartType = productsType[];

const OrderReview: React.FC = () => {
  const cart = useLoaderData() as CartType;

  return cart.length < 1 ? (
    <h1 className="text-center mt-60 text-6xl">Your Cart Is Empty</h1>
  ) : (
    <div className="order-review-components flex justify-evenly pt-16">
      <section>
        {cart.map((product: productsType) => (
          <div
            key={product.id}
            className="flex justify-between items-center gap-5 border mb-3 p-2"
          >
            <section className="flex justify-between items-center gap-3 p-1">
              <section>
                <img src={product.img} alt="cart-photo-img" className="w-20" />
              </section>
              <section>
                <h6>{product.name}</h6>
                <h6>
                  Price: <span>${product.price}</span>
                </h6>
                <h6>
                  Quantity: <span>{product.quantity}</span>
                </h6>
              </section>
            </section>
            <section>
              <ArchiveBoxXMarkIcon className="h-8 w-8 icon-color" />
            </section>
          </div>
        ))}
      </section>
      <section>
        <Cart cart={cart} />
      </section>
    </div>
  );
};

export default OrderReview;
