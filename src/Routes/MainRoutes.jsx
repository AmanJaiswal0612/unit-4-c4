import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Products from "../components/Products"
const MainRoutes = () => {
  return <>{/* Navbar and all the routes */}
    <Routes>
      <Route path={"/"} element={<Home/>} />
      <Route path={"/products"} element={<Products/>}/>
      <Route path={"/products/men"} element={<Products/>}/>
      <Route path={"/products/women"} element={<Products/>}/>
      <Route path={"/products/kids"} element={<Products/>}/>
      <React path={"/products/homedecor"} element={<Products/>}/>
    </Routes>
  
  </>;
};
export { MainRoutes };
