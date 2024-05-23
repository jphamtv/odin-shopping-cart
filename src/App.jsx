import { Route, Routes } from 'react-router-dom';
import NavBar from "./components/common/NavBar";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";

const App = () => {

  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
      </main>
    </>
  )
};

export default App
