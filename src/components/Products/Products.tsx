import { useEffect, useState } from "react"
import "./Products.scss";
import SingleProduct from "./SingleProduct";



const Products = () => {
const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('./products.json')
        .then(res=> res.json())
        .then(data=>setProducts(data))
    },[])
  return (
    <div className="grid grid-cols-6 relative">
      <section className="col-span-4 sm:col-span-5 products-container">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {products.map((product) => (
            <SingleProduct key={product.id} product={product} />
          ))}
        </div>
      </section>
      <section className="col-span-2 sm:col-span-1 summary sticky top-0">
        fdgdfg
      </section>
    </div>
  );
}

export default Products