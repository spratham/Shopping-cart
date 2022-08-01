import { createContext, React, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import cartReducer from "./Reducer";

export const Cart = createContext();
const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.fashion(),
    inStock: faker.random.numeric({ min: 0, max: 7 }),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.numeric({ min: 0, max: 5 }),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
