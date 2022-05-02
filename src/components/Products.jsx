import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData, htolow, ltohigh } from "../Redux/actions";
import { ProductCard } from "./ProductCard";
import { Select } from "./Styled";
import { Grid } from "./Styled";

export const Products = () => {
  let dispatch= useDispatch();
  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
    dispatch(getProductsData())
  }, []);
 let data= useSelector((state)=>state.products);
 
  const handleLtoh= ()=>{
    dispatch(ltohigh())
  }
  const handleHtol= ()=>{
    dispatch(htolow())
  }
  const handleSort = (e) => {
    // dispatch sort products on change
  };
  return (
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc" onClick={handleLtoh}>Low to High</option>
        <option value="desc" onClick={handleHtol}>High to Low</option>
      </Select>
      <div style={{border:"1px solid black", display:"flex", flexWrap:"wrap"}} data-testid="products-container">
        {data.map((item)=>{
          return <ProductCard key={item.id} {...item} />
        })}
      </div>
    </>
  );
};
