import React, {useState, useEffect} from 'react'
import './nav.css'

const Nav = () => {
  const [nav , setNav] = useState(false)

  const handleToggle = ()=> {
    setNav(!nav)
  }

  return (
    <nav>
        <div className="logo">
            <span className='logo'>NFT</span>
        </div>
        <div className="navlinks">
            <ul className={nav ? 'links active' : 'links'}>
                <li>Home</li>
                <li>Product</li>
                <li>MarketPlace</li>
                <li>Community</li>
                <button type="button">Sign in</button>
            </ul>
        </div>
        <div className="signin">
            <button type="button">Sign in</button>
        </div>
        <div className="mobile" onClick={() => handleToggle()}>
            <i id='bar' className={nav ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
    </nav>
  )
}

export default Nav
