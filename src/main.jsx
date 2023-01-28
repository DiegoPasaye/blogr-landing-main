import React from 'react'
import ReactDOM from 'react-dom/client'
import { Footer } from './Footer'
import { Free } from './Free'
import { Future } from './Future'
import { Infrastructure } from './Infrastructure'
import { Navigation } from './Navigation'
import "./styles.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Navigation />
    <Future />
    <Infrastructure />
    <Free />
    <Footer />
  </>
)
