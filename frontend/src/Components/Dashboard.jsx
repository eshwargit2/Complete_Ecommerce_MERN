import React from 'react'
import Navbar from './Navbar'
import {Routes, Route, Link, Outlet} from 'react-router-dom'
import DashHome from './DashHome'

const Dashboard = () => {
  return (
    <div>    
        <Navbar/>     
        <Outlet/>
    </div>
  )
}

export default Dashboard