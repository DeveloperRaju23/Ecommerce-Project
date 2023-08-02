import React from 'react'
import Header from '../Sheare/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Sheare/Footer'
import OurSubscribe from '../Sheare/OurSubscribe'

const Main = () => {
  return (
    <div>
           <Header></Header> 
           <Outlet></Outlet>
           <OurSubscribe></OurSubscribe>
           <Footer></Footer>
    </div>
  )
}

export default Main