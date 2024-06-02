import { Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import NavBar from "./components/common/NavBar";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";

const App = () => {

  return (
    <>
      <CartProvider>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
          </Routes>
        </main>
      </CartProvider>
    </>
  )
};

export default App
