import './App.css';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Product from './pages/Product';
import Header from './components/Header';
import AllProduct from './pages/AllProduct';
import { Route,Routes } from 'react-router-dom';
import Footer from './components/Footer';
import { useState,useEffect } from 'react';
import { getProduct } from './services/allApi';
function App() {

  const [allProduct,setAllProduct]=useState([])
  
  const handleProduct=async()=>{
    let res=await getProduct()
    console.log(res.data)
    setAllProduct(res.data)
  
  }
  useEffect(()=>{
    handleProduct()
  },[])

  return (
    <div className="App">
      <Header/>
        <Routes>
           <Route path='/' element={<Landing/>}/>
           <Route path='/home' element={<Home/>}/>
           <Route path='/product' element={<AllProduct/>}/>
           {
            allProduct.map(item=>(
              <Route path={`/product/${item.categoryName}`} element={<Product procateg={item.categoryName}/>}/>
            ))
           }
        </Routes>
      <Footer/>
     
    </div>
  );
}

export default App;
