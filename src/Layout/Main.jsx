import React from 'react'
import Header from '../Sheare/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Sheare/Footer'

const Main = () => {
  return (
    <div>
           <Header></Header> 
           <Outlet></Outlet>
           <Footer></Footer>
    </div>
  )
}

export default Main