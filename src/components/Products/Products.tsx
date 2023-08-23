import { useEffect, useState } from "react";
import "./Products.scss";
import SingleProduct from "./SingleProduct";
import Cart from "../Cart/Cart";


const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart,setCart] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


  
  const handleCart = (id) =>{
    const findProduct = products.find(product=> product.id == id);
    setCart([...cart, findProduct]);
  }
  return (
    <div className="grid grid-cols-6 relative">
      <section className="col-span-4 sm:col-span-5 products-container">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {products.map((product) => (
            <SingleProduct
              key={product.id}
              product={product}
              handleCart={handleCart}
            />
          ))}
        </div>
      </section>
      <section className="col-span-2 sm:col-span-1 summary sticky top-0 p-4">
        <h1 className="text-xl sm:text-3xl text-center mb-6">Summary</h1>
        <Cart cart={cart}/>
      </section>
    </div>
  );
};

export default Products;
