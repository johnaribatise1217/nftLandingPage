import React from 'react'
import './news.css'

const News = ({img}) => {
  return (
    <div className='news'>
        <div className="news1">
            <img src={img} alt="" />
        </div>
        <div className="news2">
            <h2>Join Our Community</h2>
            <p>Join our community to gain access to our exclusive peeks and get our premium promo, you can leave your email in this form.</p>
            <div className="low">
                <input type="text" placeholder='Enter your email' />
                <button>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default News
