import './SingleProduct.scss'
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import {productType} from "./ProductsType/productsType.js";

type handleCartType ={
  (id: string) : void
} 

type singleProductTypeProps ={
    product : productType;
    handleCart: handleCartType;
}

const SingleProduct : React.FC<singleProductTypeProps> = ({product,handleCart}) => {

  const { img, name, seller, price, ratings } = product;
  return (
    <div className="border relative h-80 single-product-container rounded">
      <section className="p-2">
        <img className="rounded" src={img} alt="" />
        <h4 className="text-sm" title={name}>
          {name.slice(0, 20)}
        </h4>
        <h5 className="text-sm">Price: ${price}</h5>
      </section>
      <section className="absolute bottom-0 block">
        <div className="p-2">
          <p className="text-xs">Manufacturer : {seller}</p>
          <p className="text-xs">Rating : {ratings}</p>
        </div>
        <button
          className="p-1 flex items-center justify-center gap-2"
          onClick={() => handleCart(product)}
        >
          <p>Add to card </p>
          <ShoppingCartIcon className="h-5 w-5 text-black" />
        </button>
      </section>
    </div>
  );
};

export default SingleProduct;
