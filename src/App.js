
import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import { ToastContainer } from 'react-toastify';

import Home from './component/Pages/Home';
import Product from './component/Product/Product';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/product/:id' element={<Product/>} />
      </Routes>
      <ToastContainer position='top-center' autoClose='2000'/>
      </BrowserRouter>
   
  );
}

export default App;
