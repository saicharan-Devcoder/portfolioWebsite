import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div class="n-wrapper">
    <div class="n-left">
     <div class="n-name">Saicharan</div> 
     <span>toggle</span>
    </div>
    <div class="n-right">
        <div class="n-list">
            <ul style={{listStyleType:'none'}}>
                <li>Home</li>
                <li>services</li>
                <li>Experience</li>
                <li>Portfolio</li>
                <li>Testmonials</li>
            </ul>
        </div>
        <button class="button n-button">
            Contact Us
        </button>
    </div>

    </div>
  )
}

export default Navbar