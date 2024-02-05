import './App.css';
import NavHeader from './customer/components/Navigation/Navigation';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Footer from './customer/components/Footer/Footer';
import Home from './screens/Home';
import AboutUs from './screens/AboutUs';
import NotFound from './screens/NotFound';
import ProductList from './customer/components/Product/ProductList';
function App() {
  return (
    <Router>
      <div className="App">
        <NavHeader />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about-us' element={<AboutUs/>} />
          <Route path="*" element={<NotFound />} />
          <Route path='/product-list' element={<ProductList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
