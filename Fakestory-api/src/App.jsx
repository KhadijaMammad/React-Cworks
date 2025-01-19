import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './assets/Pages/Layout/Layout';
import Home from './assets/Pages/Home/Home';
import NotPage from './assets/Pages/NotPage/NotPage';
import Product from './assets/Pages/Products/Product';
import Add from './assets/Pages/Add-product/Add';
import Details from './assets/Pages/Details/Details';
import Basket from './assets/Pages/Basket/Basket';
import WishlistPg from './assets/Pages/Wishlist/WishlistPg';

function App() {
  

  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/product' element = {<Product/>} />
          <Route path='/add' element = {<Add/>} />
          <Route path='/details' element = {<Details/>} />
          <Route path='/basket' element = {<Basket/>}/>
          <Route path='/wishlistPg' element = {<WishlistPg/>}/>
        </Route>
        <Route path='*' element={<NotPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
export default App
