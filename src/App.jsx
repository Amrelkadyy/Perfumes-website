import React from "react"
import {Routes,Route} from "react-router-dom"
import Home from "./pages/home";
import About from "./pages/about";
import Collection from "./pages/collection";
import Contact from "./pages/contact";
import Product from "./pages/product";
import Cart from "./pages/cart";
import PlaceOrder from "./pages/placeOrder";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Login from "./pages/login";
import Footer from "./components/Footer";



const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vvw] lg;px-[9vw]">
      <Navbar/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
