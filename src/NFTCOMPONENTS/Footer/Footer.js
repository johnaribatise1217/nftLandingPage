import React from 'react'
import './footer.css'
import {BsGithub} from 'react-icons/bs'
import {FaLinkedin} from 'react-icons/fa'
import {FaDocker} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
        <div className="top">
            <h2>NFTs</h2>
            <div className="links">
                <div>
                    <h3>Platform</h3>
                    <a href="#">About Us</a>
                    <a href="#">Product</a>
                    <a href="#">Community</a>
                    <a href="#">MarketPlace</a>
                </div>
                <div>
                    <h3>Cloud</h3>
                    <a href="#">Dashboard</a>
                    <a href="#">Register</a>
                    <a href="#">System Status</a>
                    <a href="#">Membership</a>
                </div>
            </div>
        </div>
        <div className="bottom">
            <div className="legal">
                <p> &copy; 2023 NFTS, Inc.</p>
                <a >License</a>
                <a >Terms</a>
                <a >Conditions</a>
            </div>
            <div className="socials">
                <a><BsGithub/></a>
                <a><FaLinkedin/></a>
                <a><FaDocker/></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer
