import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import { useState } from 'react'
import { LoginContext } from '../App'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
export default Layout