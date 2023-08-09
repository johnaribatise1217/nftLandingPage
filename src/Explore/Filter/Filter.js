import React, {useContext} from 'react'
import './filter.css'
import {useAutoAnimate} from '@formkit/auto-animate/react'

const Filter = ({shuffledData}) => {
  const [parent] = useAutoAnimate()

  return (
    <div className='filter' ref={parent}>
      {shuffledData.map((card) => {
        const {id, img, title , nftId} = card
        return (
            <div className="top">
                <CardObject card={card}/>
            </div>

        )
      })}
    </div>
  )
}

const CardObject = (props) => {
    const {id, img, title , nftId} = props.card
    return (
        <div className="card" key={id}>
            <div className="image">
                <img src={img} alt="" />
            </div>
            <div className="below">
                <button>More info</button>
                <h5>{title}</h5>
                <h3>{title} #{nftId}</h3>
            </div>
        </div>
    )
}

export default Filter
