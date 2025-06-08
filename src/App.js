
import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import { ToastContainer } from 'react-toastify';

import Home from './component/Pages/Home';
import Product from './component/Product/Product';
import BookForm from './component/Product/BookForm';
import Login from './component/Login/Login';
import Register from './component/Login/Register';
import Profile from './component/Profile/Profile';
import Post from './component/Post/Post';
import Rent from './component/Rent/Rent';
import Booked from './component/Booked/Booked';
import About from './component/About/About';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/product/:id' element={<Product/>} />
      <Route path='/bookroom/:id' element={<BookForm/>}/> 
      <Route path='/' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/post' element={<Post/>} />
      <Route path='/rent' element={<Rent/>} />
      <Route path='/booked' element={<Booked/>} />
      <Route path='/about' element={<About/>} />
      </Routes>
      <ToastContainer position='top-center' autoClose='2000'/>
      </BrowserRouter>
   
  );
}

export default App;
