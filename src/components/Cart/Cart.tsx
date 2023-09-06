import './Cart.scss';
import {productType} from "../Products/ProductsType/productsType.js";
import { ArchiveBoxXMarkIcon } from '@heroicons/react/24/solid';

type cartType = productType[number]
type handleDeleteCartType = {
  handleDeleteCart: void;
};

const Cart: React.FC<cartType> = ({
  cart,
  handleDeleteCart,
  children,
}: {
  cart: cartType;
  children: React.ReactNode;
  handleDeleteCart: handleDeleteCartType;
}) => {
  let total = 0;
  let tax = 0;
  let shippingCost = 0;
  let grandTotal = 0;
  let quantity = 0;
  for (const product of cart) {
    total = total + product.price * product.quantity;

    quantity = quantity + product.quantity;
  }
  tax = (5 * total) / 100;
  shippingCost = (1 * total) / 100;
  grandTotal = total + tax + shippingCost;
  return (
    <div className="cart-container sticky top-0 p-4">
      <section>
        <h1 className="text-xl sm:text-3xl text-center mb-6">Summary</h1>
        <h4 className="text-sm sm:text-md">Number of Product: {quantity}</h4>
        <h5 className="text-sm sm:text-md">Price : ${total.toFixed(2)}</h5>
        <h5 className="text-sm sm:text-md">Tax: ${tax.toFixed(2)}</h5>
        <h5 className="text-sm sm:text-md">
          Shipping Cost: ${shippingCost.toFixed(2)}
        </h5>
        <h1 className="text-md sm:text-lg mt-4 mb-10">
          Grand Total: ${grandTotal.toFixed(2)}
        </h1>
      </section>
      <section className="buttonContainer">
        <button
          className="cart-button text-sm sm:text-md flex items-center justify-center"
          onClick={handleDeleteCart}
        >
          <p> Clear cart</p>
          <ArchiveBoxXMarkIcon className="h-5 w-5  ml-3" />
        </button>
        {children}
      </section>
    </div>
  );
};

export default Cart;
