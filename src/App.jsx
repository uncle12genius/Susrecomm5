import React from 'react'
import "./index.css"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Story from './pages/Story'
import Team from './pages/Team'
import Footer from './components/Footer'





const App = () => {
  return (
    <div className='w-full overflow-hidden' >
      <Navbar/>
      <Home/>
      <About/>
      <Story/>
      <Team/>
      <Footer/>

      
      
    </div>
  )
}

export default App


