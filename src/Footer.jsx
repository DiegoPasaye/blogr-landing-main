import React from 'react'
import logo from './images/logo.svg'
import './styles.css'

export const Footer = () => {
  return (
    <footer>
        <img src={logo} alt="Logo icon" />

        <div className='footer-section'>
            <span>Product</span>
            <p>Overview</p>
            <p>Pricing</p>
            <p>Marketplace</p>
            <p>Features</p>
            <p>Integrations</p>
        </div>

        <div className='footer-section'>
            <span>Company</span>
            <p>About</p>
            <p>Team</p>
            <p>Blog</p>
            <p>Careers</p>
        </div>

        <div className='footer-section'>
            <span>Connect</span>
            <p>Contact</p>
            <p>Newsletter</p>
            <p>Linkedln</p>
        </div>
    </footer>
  )
}
