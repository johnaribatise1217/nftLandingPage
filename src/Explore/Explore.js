import React , {useEffect, useState} from 'react'
import './explore.css'
import Filter from './Filter/Filter'
import filterdata from "../nftData";

const btnData = [
  {
    id: 1,
    name:'All Items',
  },
  {
    id: 2,
    name:'Art',
  },
  {
    id: 3,
    name:'Photography',
  },
  {
    id: 4,
    name:'Music',
  },
  {
    id: 5,
    name:'3D Art',
  },
  {
    id: 6,
    name:'More',
  },
]

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j] , array[i]]
    }
    return array
}

const Explore = () => {
  const data = [...btnData]
  const [active, setActive] = useState(0)
  const [filterActive , setFilterActive] = useState(null)
  const [shuffledData , setShuffledData] = useState(shuffleArray(filterdata))

  const handleClick = (index) => {
    setActive(index)
  };

  //function to filter all items and more button 
  const mapBack = (index) => {
    if (index == 6 || index == 1){
      setShuffledData(shuffleArray(filterdata))
    }
  }

  //function to filter from the remaining buttons
  const btnFilter = (category, index) => {
    if (active === category) {
      setFilterActive(null)
      setShuffledData(shuffleArray(filterdata))
    } else {
      setFilterActive(category)
      setShuffledData(shuffleArray(filterdata).filter((object) => object.category === category))
    }
    handleClick(index)
    mapBack(index)
  }

  return (
    <div className="Explore">
      <div className="head">
        <h2>Explore Amazing <span>Artworks</span></h2>
        <div className="btn">
          {data.map((btn) => (
            <button key={btn.id} className={active === btn.id && filterActive === btn.name ? 'active' : 'btns'} type="button" onClick={() => btnFilter(btn.name , btn.id)}>{btn.name}</button>
          ))}
        </div>
      </div>
      <Filter shuffledData={shuffledData}/>
    </div>
  )
}

export default Explore;