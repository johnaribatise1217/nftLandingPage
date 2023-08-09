import React from 'react'
import Nav from './Nav/Nav'
import './header.css'

const Header = ({img}) => {
  return (
    <div className='header'>
      <div className="nav">
        <Nav/>
      </div>
      <div className="main">
        <div className="text">
            <h2>The Thrill of Collecting</h2>
            <h2>Super Rare <span>NFT</span></h2>
        </div>
        <div className="down">
            <div className="left">
                <p className='text'>
                    Our collection includes a diverse range of unique and rare NFTs, easch carefully selected for its collectibility, rarity and uniqueness, from digital art and collectibles to rare tokens and gaming assests.
                </p>
                <div className="button">
                    <button className="explore">
                        Explore Now
                    </button>
                    <button className="connect">
                        Connect Wallet
                    </button>
                </div>
                <div className="work">
                    <div className="art">
                        <div className="amount">
                            27K+
                        </div>
                        <h4 className="title">Art Work</h4>
                    </div>
                    <div className="auction">
                        <div className="amount">
                            20+
                        </div>
                        <h4 className="title">Auction</h4>
                    </div>
                    <div className="artist">
                        <div className="amount">
                            5K+
                        </div>
                        <h4 className="title">Artist</h4>
                    </div>
                </div>
            </div>
            <div className="right">
                <img src={img} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
