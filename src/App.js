import React from 'react'
import Header from './components/Header'
import SliderSection from "./components/SliderSection" 
// import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Header />
      <SliderSection/>
      <Footer/>
      
      
    </div>
    
  )
}

export default App