import "./App.css";
import Header from "./containers/Header";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/"  element={<ProductListing />} exact />
          <Route path="/product/:productId" element={<ProductDetail />} />
          
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
