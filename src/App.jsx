import { useState } from 'react'
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ProductList from './screens/ProductList/ProductList';
import "./App.css"

function App() {
  return (
    <>
      <div> 
        <Navbar />
        <Banner />
        <div className=""><ProductList/></div>
        <Footer/>      
      </div>  
    </>
  )
}

export default App
