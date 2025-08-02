import React from 'react'
import "./assets/styles/App.css";
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import HeroSection from './components/home/HeroSection'
import PopularCoursesSection from './components/home/PopularCoursesSection'
import ReviewSection from './components/home/ReviewSection'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
function App() {
  return (
<>
  <Header />
  <HeroSection />
  <PopularCoursesSection />
  <ReviewSection />
  <Footer />
  {/* <Login /> */}
  {/* <Register /> */}
</>
  )
}

export default App