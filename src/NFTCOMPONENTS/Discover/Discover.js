import React, { useState } from 'react'
import './discover.css'
import Cards from './Cards'
import data from '../../cardData'

const Discover = ({img}) => {
  const [cardDetails , setCardDetails] = useState(data)
  return (
    <div className='discover-box'>
      <h2>Discover and Collect More <span>NFTs</span></h2>
      <div className="top-2">
        <div className="msg">
            <p>NFTs , or non-fungible tokens, are a new type of digital asset that have taken the world by storm in recent years. NFTs are stored on a blockchain, providing proof of ownership authenticity, which is particularly important in the world of digital art, where reproductions can be made effortlessly. As NFTs continue to grow in popularity and use cases, they are transforming the way we think about digital ownership and value.</p>
        </div>
        <div className="pic">
            <img src={img} alt="" />
        </div>
      </div>
      <div className="cards">
        <Cards cardDetails={cardDetails}/>
      </div>
    </div>
  )
}

export default Discover
