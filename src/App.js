import './App.css';
import {Route,Routes,Navigate} from 'react-router-dom';

//components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';

//context
import ProductContext from './context/ProductContext';
import CartContext from './context/CartContext';
import Navbar from './shired/Navbar';
import ShopCart from './components/ShopCart';



function App() {
  return (
    <ProductContext>
       <CartContext>
        <Navbar />
          <Routes>
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/products" element={<Store />} />
              <Route path="/cart" element={<ShopCart />} />
              <Route path='/*' element={<Navigate to="/products" />} />
          </Routes>
       </CartContext>
    </ProductContext>
  );
}

export default App;
