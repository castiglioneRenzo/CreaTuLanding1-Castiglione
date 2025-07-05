import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router';
import NotFound from './components/NotFound';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Welcome to our store!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Welcome to our store!" />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />        
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <ItemListContainer greeting="Welcome to our store!" /> */}
    </BrowserRouter>
  );
}

export default App