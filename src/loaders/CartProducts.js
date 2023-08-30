import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader = async() =>{
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();
    const addedCart = [];
    const storedCart = getShoppingCart();

    for(const id in storedCart){
        const addedProducts = products.find(product => product.id === id)
        if(addedProducts){
            addedProducts.quantity = storedCart[id];
            addedCart.push(addedProducts)
        }
    }

    return addedCart;
}
export default cartProductLoader;
