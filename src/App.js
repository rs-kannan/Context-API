import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarPage from "./Components/navbar";
import ShopCart from "./Pages/shop/shop";
import Cart from "./Pages/Cart/cart";
import "./App.css";
import ShopContextProvider from "./Context/shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <NavbarPage />
          <Routes>
            <Route path="/" element={<ShopCart />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
