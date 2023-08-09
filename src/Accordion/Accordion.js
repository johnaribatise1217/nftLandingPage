import React, {useState, useRef} from 'react'
import accordionData from './data'
import './accordion.css'

const Accordion = () => {
  const [active, setActive] = useState(0)
  const data = [...accordionData]
  const contentEl = useRef(null)

  const handleToggle = (index) =>{
    if (active === index){
      return setActive(null)
    }
    setActive(index)
  }

  return (
    <div className='container'>
      <h1>Accordion Design</h1>
      <ul className='accordion'>
        {data.map((item) =>{
            <li className='accordion-item'>
            <div>
              <h2 onClick={() =>handleToggle(item.id)} className="accordion-title">
                {item.title} <span>{item.id === active ? "-" : "+"}</span>
              </h2>
            </div>
            <div
              ref={contentEl}
              className={`accordion-con ${active === item.id ? "active" : ""}`}
              style={
                active === item.id ? {height : contentEl?.current?.scrollHeight}
                : {height : "0px"}
              }
            >
              <p>{item.content}</p>
            </div>
          </li>
        })}
      </ul>
    </div>
    
  )
}

export default Accordion
