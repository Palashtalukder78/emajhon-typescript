import './Cart.scss';

type cartType = {
  id: string;
  category: string;
  name: string;
  seller: string;
  price: number;
  stock: number;
  ratings: number;
  ratingsCount: number;
  img: string;
  shipping: number;
  quantity: number;
}[];
const Cart = ({ cart }: { cart: cartType }) => {
  console.log(cart);
  let total = 0;
  let tax = 0;
  let shippingCost = 0;
  let grandTotal = 0;
  for (const product of cart) {
    total = total + product.price;
    tax = (5 * total) / 100;
    shippingCost = (1 * total) / 100;
    grandTotal = total + tax + shippingCost;
  }
  return (
    <div>
      <section>
        <h4 className="text-sm sm:text-md">Number of Product: {cart.length}</h4>
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
        <button className="cart-button text-sm sm:text-lg">Add to Cart</button>
        <button className="checkout-button text-sm sm:text-lg">CheckOut</button>
      </section>
    </div>
  );
};

export default Cart;
