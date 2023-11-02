import React from 'react'
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom'
import {  CiSearch} from 'react-icons/ci';
import { HiAdjustmentsHorizontal} from "react-icons/hi2";
const Navbar = () => {
  return (
    <div className='nav-main-body'>

        <div className='nav-left-section'>
          <div className='nav-log'>
          <Link to='#' style={{ textDecoration: 'none', color:'black' }}><h2>LOGO</h2> </Link>
          </div>
         
        </div>

        <div className='nav-middle-section'>
          <div className='nav-search'><div className='search-logo'><CiSearch/></div><input type='text' placeholder='Search here...'/></div>
          <div className='filter'><div className='filter-logo'><HiAdjustmentsHorizontal/></div><div>filter</div></div>
        </div>

        <div className='nav-right-section'>
          <div className='nav-right'><Link style={{ textDecoration: 'none' , color:'black'}}>Become a Seller</Link></div>
          
        </div>
      </div>

  )
}

export default Navbar