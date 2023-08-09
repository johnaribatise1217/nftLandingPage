import React, {useState} from 'react'
import './tab.css'

const Tab = () => {
  const tabItems = [
    {
        icon : <i class="fas fa-bars"></i>,
        text: 'Menu',
        id : 1,
    }, 
    {
        icon : <i class="fas fa-tag" aria-hidden="true"></i>,
        text: 'Tags',
        id: 2,
    }, 
    {
        icon : <i class="fas fa-shopping-bag" aria-hidden="true"></i>,
        text: "Bag",
        id: 3,
    },
    {
        icon : <i class="fas fa-bell" aria-hidden="true"></i>,
        text : "Notification",
        id : 4
    }
  ]

  const [activeTab, setActiveTab] = useState(0)

  const handleClick = (index) => {
    setActiveTab(index)
  }

  return (
    <nav className="nav-tab">
        {tabItems.map((item, index) => {
            <div
                key={index}
                className={`nav-tab-item ${activeTab === index ? 'active' : ''}`}
                onClick={() => handleClick(index)}
            >
                <span className="nav-tab-icon">{item.icon}</span>
                <span className="nav-tab-text">{item.text}</span>
            </div>
        })}
        <div className='nav-tab-overlay' style={{left : activeTab * 130 + 'px'}}/>
    </nav>
  )
}

export default Tab
