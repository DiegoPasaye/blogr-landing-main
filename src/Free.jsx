import React from 'react'
import "./styles.css"

export const Free = () => {
  return (
    <section className='free-container'>
        <div className='free-laptop'></div>

        <div className='free-text'>
            <div>
                <h3>Free, open, simple</h3>
                <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                </p>
            </div>

            <div>
                <h3>Powerful tooling</h3>
                <p>
                Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                capable of producing even the most complicated sites.
                </p>
            </div>
        </div>
    </section>
  )
}
