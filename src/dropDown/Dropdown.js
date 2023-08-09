import React, {useState} from 'react'
import './drop.css'

const Dropdown = ({options}) => {
  const [isOpen ,setIsOpen] = useState(false)
  const [selectedOption , setSelectedOption] = useState(options[0])

  const handleToggle = () =>{
    setIsOpen(!isOpen)
  }

  const handleClick = (option) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <div className='wrapper'>
        <div className="dropdown">
            <label htmlFor="dropdown-toggle" className="dropdown-active">
                <span id="drop-selected">{selectedOption}</span>
                <i className='fa-solid fa-chevron-down dropdown-icon'></i>
            </label>
            <input type="checkbox" className='dropdown-input' checked={isOpen} name='dropdown-input' id='dropdown-input'
                onChange={handleToggle}
            />
            <ul className="drop-list">
                {options.map((option) => (
                    <li
                        key={option}
                        data-option = {option}
                        className={selectedOption === option ? 'active' : ''}
                        onClick={() => handleClick(option)}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
        <div className="search">
            <i className='fa-solid fa-magnifying-glass'></i>
            <input type="search" name="search" id="search" placeholder='Search apps , plugins and more.'/>
        </div>
    </div>
  )
}

export default Dropdown
