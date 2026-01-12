import { useState } from 'react'
import { Card } from './components/index'
import hospImg from "./assets/images/cepillo.jpg";
import hospImg1 from "./assets/images/peineta.jpg";
import hospImg2 from "./assets/images/secador.jpg";
import Button from './components/Button/Button';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Search from './components/Search/Search';

import './App.css'

function App() {
  const hosts = [
    { id: 1, name:"Cepillo cabello", price: "$10,000", category: "Cuidado capilar", imageUrl: hospImg},
    { id: 2, name:"Peineta cabello", price: "$20,000", category: "Cuidado capilar", imageUrl: hospImg1},
    { id: 3, name:"Secador cabello", price: "$15,000", category: "Cuidado capilar", imageUrl: hospImg2},
  ];

  return (
    <>
      <div>
        <Navbar />
        <Banner />
        <Search/>
      </div>
      <div className="container">
        {hosts.map((host) => (
          <Card texto={host.name} price={host.price} category={host.category} key={host.id} imageUrl={host.imageUrl} /> 
        ))}
        </div>
      <div>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
