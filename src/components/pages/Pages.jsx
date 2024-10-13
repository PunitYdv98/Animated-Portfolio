import React from 'react'
import  Header  from '../common/Header'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from '../home/Home'
import About from './About'
import Services from './Services'
import Portfolio from './Portfolio'
import Testimonials from './Testimonials'
import Blog from './Blog'
import Contact from './Contact'
import Footer from '../common/Footer'

const Pages = () => {
  return (
    <>
   <BrowserRouter>
   <Header/>
      
    <Routes>
      
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/services" element={<Services/>}></Route>
    <Route path="/portfolio" element={<Portfolio/>}></Route>
    <Route path="/testimonials" element={<Testimonials/>}></Route>
    <Route path='/blog' element={<Blog/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>

    



    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
    
  )
}

export default Pages
