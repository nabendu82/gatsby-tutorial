import React from 'react'
import Navbar from './Navbar';
import './layout.css';

const Layout = ({ children }) => {
    return (
        <>
          <Navbar />
          {children}
        </>
    )
}

export default Layout
