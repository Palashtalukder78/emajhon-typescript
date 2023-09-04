import { ArchiveBoxXMarkIcon } from "@heroicons/react/24/solid";
import { productsType } from "../Products/ProductsType/productsType.js";

type handleDeleteFromCartType = {
  (id: string): void;
};

type cartTypeProps = {
  handleDeleteProductFromCart: handleDeleteFromCartType;
  product: productsType;
};

const SingleOrderReview: React.FC<cartTypeProps> = ({
  product,
  handleDeleteProductFromCart,
}) => {
  const { img, id, name, price, quantity } = product;
  return (
    <div className="flex justify-between items-center gap-3 border mb-3 p-1 rounded">
      <section className="flex justify-between items-center gap-3 p-1">
        <section>
          <img src={img} alt="cart-photo-img" className="w-20 rounded" />
        </section>
        <section>
          <h6>{name}</h6>
          <h6>
            Price: <span>${price}</span>
          </h6>
          <h6>
            Quantity: <span>{quantity}</span>
          </h6>
        </section>
      </section>
      <section className="pr-4">
        <button onClick={() => handleDeleteProductFromCart(id)}>
          <ArchiveBoxXMarkIcon className="h-8 w-8 icon-color" />
        </button>
      </section>
    </div>
  );
};

export default SingleOrderReview;
