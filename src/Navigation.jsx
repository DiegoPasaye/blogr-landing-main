import React from 'react'
import logo from "./images/logo.svg"
import arrowDown from "./images/icon-arrow-light.svg"
import "./styles.css"

export const Navigation = () => {
    const fullMobile = document.querySelector(".secondMobileNav");

    const product = document.querySelector(".dropdown-subcontainer1");
    const company = document.querySelector(".dropdown-subcontainer2");
    const connect = document.querySelector(".dropdown-subcontainer3");
    const showContainer1 = () => {product.classList.toggle("mostrar");}
    const showContainer2 = () => {company.classList.toggle("mostrar");}
    const showContainer3 = () => {connect.classList.toggle("mostrar");}
    const productMobile = document.querySelector(".dropdown-subcontainer-mobile1");
    const companyMobile = document.querySelector(".dropdown-subcontainer-mobile2");
    const connectMobile = document.querySelector(".dropdown-subcontainer-mobile3");
    const showContainerMobile1 = () => {productMobile.classList.toggle("mostrarMobile");}
    const showContainerMobile2 = () => {companyMobile.classList.toggle("mostrarMobile");}
    const showContainerMobile3 = () => {connectMobile.classList.toggle("mostrarMobile");}

    const showFullMobile = () => {fullMobile.classList.toggle("mostrarMobile");}
  return (
    <div className='head'>
        <nav>
            <div className='dropdowns'>
                <img src={logo} alt="Logo icon" />
                <div className='mobileDiv'>
                <div className='dropdowns-menu'>
                    <p onClick={showContainer1} className='product'>Product <img src={arrowDown} alt="arrow down icon" /></p>
                    <div className='dropdown-subcontainer dropdown-subcontainer1'>
                        <p>Overview</p>
                        <p>Pricing</p>
                        <p>Marketplace</p>
                        <p>Features</p>
                        <p>Integrations</p>
                    </div>
                </div>

                <div className='dropdowns-menu'>
                    <p  onClick={showContainer2} className='company'>Company <img src={arrowDown} alt="arrow down icon" /></p>
                    <div className='dropdown-subcontainer  dropdown-subcontainer2'>
                        <p>About</p>
                        <p>Team</p>
                        <p>Blog</p>
                        <p>Careers</p>
                    </div>
                </div>

                <div className='dropdowns-menu'>
                    <p onClick={showContainer3} className='connect'>Connect <img src={arrowDown} alt="arrow down icon" /></p>
                    <div className='dropdown-subcontainer dropdown-subcontainer3'>
                        <p>Contact</p>
                        <p>Newsletter</p>
                        <p>Linkedin</p>
                    </div>
                </div>

                <div className='loginMobile'>
                    <p>Login</p>
                    <p className='sign'>Sign Up</p>
                </div>
                </div>



                <div className='secondMobileNav'>
                    <div className='dropdowns-menu-mobile'>
                        <p onClick={showContainerMobile1} className='product'>Product <img src={arrowDown} alt="arrow down icon" /></p>
                        <div className='dropdown-subcontainer-mobile dropdown-subcontainer-mobile1'>
                            <p>Overview</p>
                            <p>Pricing</p>
                            <p>Marketplace</p>
                            <p>Features</p>
                            <p>Integrations</p>
                        </div>
                    </div>

                    <div className='dropdowns-menu-mobile'>
                        <p  onClick={showContainerMobile2} className='company'>Company <img src={arrowDown} alt="arrow down icon" /></p>
                        <div className='dropdown-subcontainer-mobile  dropdown-subcontainer-mobile2'>
                            <p>About</p>
                            <p>Team</p>
                            <p>Blog</p>
                            <p>Careers</p>
                        </div>
                    </div>

                    <div className='dropdowns-menu-mobile'>
                        <p onClick={showContainerMobile3} className='connect'>Connect <img src={arrowDown} alt="arrow down icon" /></p>
                        <div className='dropdown-subcontainer-mobile dropdown-subcontainer-mobile3'>
                            <p>Contact</p>
                            <p>Newsletter</p>
                            <p>Linkedin</p>
                        </div>
                    </div>
                    <hr />

                    <div className='login-nav-mobile'>
                        <p className='login-text-mobile'>Login</p>
                        <p className='sign-mobile'>Sign Up</p>
                    </div>
                </div>




            </div>

            <div className='login' onClick={showFullMobile}>
                <p>Login</p>
                <p className='sign'>Sign Up</p>
            </div>
        </nav>

        <h1>A modern publishing platform</h1>
        <p className='nav-text-center'>Grow your audience and build your online brand</p>
        <div className='buttons'>
            <button className='free'>Start For Free</button>
            <button className='more'>Learn More</button>
        </div>
    </div>
  )
}
