import React from 'react'
import phone from "./images/illustration-phones.svg"

export const Infrastructure = () => {
  return (
    <section className='infrastructure-container'>
        <div className='infrastructure-left'>
            <img src={phone} alt="Phone image" />
        </div>

        <div className='infrastructure-right'>
            <h2>State of the Art Infrastrcture</h2>
            <p>
                 With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
            </p>
        </div>
    </section>
  )
}
