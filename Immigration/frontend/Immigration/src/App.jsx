import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layouts/Layout';
import Home from './pages/HomePage/Home';

function App() {
  

  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path='/'index element={<Home/>}/>
       
         
        </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
