import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { childsort, getProductsData, homesort, mensort, wfilter, womensort } from "../Redux/actions";

export const Navbar = () => {
  let dispatch=useDispatch();
  let navigate=useNavigate();
  const handleMen= ()=>{
    dispatch(mensort())
    navigate("/products/men")
  }
  const handleproduct= ()=>{
    dispatch(getProductsData());
    navigate("/products")
  }
  const handleWomen=()=>{
    
    dispatch(womensort());
    navigate("/products/women")
  }
 const handlekid=()=>{
   dispatch(childsort());
   navigate("/products/kids")
 }
 const handleHome=()=>{
   dispatch(homesort());
   navigate("/products/homedecor")
 }
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: 20,display:"flex", justifyContent:"space-around"  }}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}
     <h1> <Link to="/">Home</Link></h1>
      <h1><Link to="/about">About</Link></h1>
      <h1 onClick={handleproduct}>Products</h1>
      <h1 onClick={handleMen}>Mens</h1>

      <h1 onClick={handleWomen}>Womens</h1>
      <h1 onClick={handlekid}>Kids</h1>
      <h1 onClick={handleHome}>Home decors</h1>
    </nav>
  );
};
