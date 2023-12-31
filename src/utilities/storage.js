// use local storage to manege cart data

const addToDb = (id) => {
  let shoppingCart = {};

/* Get The Shopping Cart from local storage */
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
            shoppingCart = JSON.parse(storedCart)
    }
  /*   else{
        shoppingCart = {};
    } */

  /* ADD QUANTITY */
const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  }
};

const removeFromDb = (id) =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
            if(id in shoppingCart){
                delete shoppingCart[id];
                localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));
            }
    }
}
const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}

export {
     addToDb,
    removeFromDb,
    deleteShoppingCart
    };
