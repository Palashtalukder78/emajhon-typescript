import { useEffect, useState } from "react";
import "./Products.scss";
import SingleProduct from "./SingleProduct";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../utilities/fakedb.js";
import { productsType } from "./ProductsType/productsType.js";

type ProductType = productsType[number];

const Products: React.FC = () => {
  const [products, setProducts] = useState<ProductType>([]);
  const [cart, setCart] = useState<ProductType>([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const addedCart: ProductType[] = [];

    for (const id in storedCart) {
      const addedProducts = products.find(
        (product: ProductType) => product.id === id
      );
      if (addedProducts) {
        addedProducts.quantity = storedCart[id];
        addedCart.push(addedProducts);
      }
    }
    setCart(addedCart);
  }, [products]);

  const handleCart = (product: productsType) => {
    let newCart = [];
    const exist = cart.find((pd) => pd.id === product.id);
    console.log(exist);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exist.quantity = exist.quantity + 1;
      const remaining = cart.filter((pd: ProductType) => pd.id !== product.id);
      newCart = [...remaining, exist];
    }
    setCart(newCart);
    addToDb(product.id);
  };

  return (
    <div className="grid grid-cols-6 relative">
      <section className="col-span-4 sm:col-span-5 products-container">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {products.map((product: ProductType) => (
            <SingleProduct
              key={product.id}
              product={product}
              handleCart={handleCart}
            />
          ))}
        </div>
      </section>
      <section className="col-span-2 sm:col-span-1 ">
        <Cart cart={cart}/>
      </section>
    </div>
  );
};

export default Products;
