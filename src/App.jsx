import React from 'react'
import "./assets/styles/App.css";
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import HeroSection from './components/home/HeroSection'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
function App() {
  return (
<>
  <Header />
  <HeroSection />
  <Footer />
  {/* <Login /> */}
  {/* <Register /> */}
</>
  )
}

export default App