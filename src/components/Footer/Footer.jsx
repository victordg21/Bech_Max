import { useState } from 'react'
import './Footer.css'

function Footer (){


    return(
        <>
            <div class="footer-container">
                <div class="footer-section about">
                    <h2>About Us</h2>
                    <p>We are a company dedicated to providing the best service to our customers. We value integrity, excellence, and innovation in all that we do.</p>
                </div>
                <div class="footer-section links">
                    <h2>Links</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
                <div class="footer-section contact">
                    <h2>Contact Us</h2>
                    <ul>
                        <li>Email: info@company.com</li>
                        <li>Phone: +123 456 7890</li>
                        <li>Address: 123 Main Street, City, Country</li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                &copy; 2024 Bech Max. All rights reserved.
            </div>
        </>
    )
}

export default Footer