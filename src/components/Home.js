import React from "react";
import { CartState } from "../context/Context";
const Home = () => {
  const {
    state: { products },
  } = CartState();
  console.log(products);
  return(
  <div className="home">
  <div className="producConatainer">{products.map((prod)=>{
   return  <span>{prod.name}</span>; </div>
  }}}
   </div>


export default Home;
