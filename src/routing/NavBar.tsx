import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <Link to='/home'>Home</Link><br></br>
      <Link to='/dashboard'>Dashboard</Link><br></br>
      <Link to='/about'>About</Link>
    </>
  )
}

export default NavBar
