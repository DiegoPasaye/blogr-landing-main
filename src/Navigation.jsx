import React from 'react'
import logo from "./images/logo.svg"
import arrowDown from "./images/icon-arrow-light.svg"
import "./styles.css"

export const Navigation = () => {
  return (
        <div className='navigation'>
            <nav>
                <img src={logo} alt="Logo icon" />

                <div className='links-nav'>

                    <div>
                        <p className='sections-mobile-text' onClick={() => {
                            document.querySelector(".product-subcontainer").classList.toggle("mostrarMobile")
                        }}>Product <img src={arrowDown} alt="Arrow down icon" /></p>
                        <div className='desplegables-container product-subcontainer'>
                            <p>Overview</p>
                            <p>Pricing</p>
                            <p>Marketplace</p>
                            <p>Features</p>
                            <p>Integrations</p>
                        </div>
                    </div>

                    <div>
                        <p className='sections-mobile-text' onClick={() => {
                            document.querySelector(".company-subcontainer").classList.toggle("mostrarMobile")
                        }}>Company <img src={arrowDown} alt="Arrow down icon" /></p>
                        <div className='desplegables-container company-subcontainer'>
                            <p>About</p>
                            <p>Team</p>
                            <p>Blog</p>
                            <p>Careers</p>
                        </div>
                    </div>

                    <div>
                        <p className='sections-mobile-text' onClick={() => {
                            document.querySelector(".connect-subcontainer").classList.toggle("mostrarMobile")
                        }}>Connect <img src={arrowDown} alt="Arrow down icon" /></p>
                        <div className='desplegables-container connect-subcontainer'>
                            <p>Contact</p>
                            <p>Newsletter</p>
                            <p>Linkedin</p>
                        </div>
                    </div>

                    <div className='login-mobile'>
                        <hr />
                        <p className='login-button-mobile'>Login</p>
                        <p className='sign-button-mobile'>Sign Up</p>
                    </div>

                </div>

                <div onClick={() => {
                    document.querySelector(".links-nav").classList.toggle("mostrarMobile")
                }} className='login-desktop'>

                    <p className='loginButton'>Login</p>
                    <p className='signButton'>Sign Up</p>

                </div>
            </nav>

            <h1>A modern publishing platform</h1>
            <p className='navigation-text'>Grow your audience and build your online brand</p>

            <div className='navigation-buttons'>
                <button className='start-button-nav'>Start for Free</button>
                <button className='learn-button-nav'>Learn More</button>
            </div>
        </div>
    )
}
