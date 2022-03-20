import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menubar from "./components/Menubar/Menubar";
import AllProducts from "./components/AllProducts/AllProducts";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [cart, setCart] = useState(0);
  const addToCart = () => {
    setCart(cart + 1);
  }
  return (
    <div className="App">
      <Menubar cart={cart}></Menubar>
      <h1 className="mb-5 mainTitle">All Products</h1>
      <AllProducts setCart={addToCart}></AllProducts>
    </div>
  );
}

export default App;
