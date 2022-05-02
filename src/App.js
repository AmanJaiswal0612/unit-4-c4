
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Products } from "./components/Products";

function App() {
  return (
    <div className="App">
         <Navbar/>
         <Routes>
         <Route path={"/"} element={<Home/>} />
         <Route path={"/products"} element={<Products/>}/>
         <Route path={"/products/men"} element={<Products/>}/>
         <Route path={"/products/women"} element={<Products/>}/>
         <Route path={"/products/kids"} element={<Products/>}/>
         <Route path={"/products/homedecor"} element={<Products/>}/>
         </Routes>
    </div>
  );
}

export default App;
