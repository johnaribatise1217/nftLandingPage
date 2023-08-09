import React, {useState, useEffect} from 'react'
import './Slider.css'
import people from '../data'

const Slider = () => {
  const [data] = useState(people)
  const [index, setIndex] = useState(0)

  useEffect(() =>{
    const lastIndex = data.length - 1
    if(index < 0){
        setIndex(lastIndex)
    }
    if(index > lastIndex) {
        setIndex(0)
    }
  }, [index, data])

  useEffect(() =>{
    let slider = setInterval(() => {
        setIndex(index + 1)
    }, 5000)

    return ()=>{
        clearInterval(slider)
    }
  }, [index])

  return (
    <section className="section">
        <div className="title">
            <h2>Top leader</h2>
        </div>
        <div className="section-center">
            {data.map((item,i) =>{
                const {id, img, name , title, quote} = item
                let position = 'nextSlide'
                if (i === index){
                    position = 'activeSlide'
                }
                if ( i === index - 1 || (index === 0 && i === data.length -1) ){
                    position = 'lastSlide'
                }
                return (
                    <article className={position} key={id}>
                        <img src={img} alt="" className='person-img'/>
                        <h4>{name}</h4>
                        <p className='title'>{title}</p>
                        <p className="text">{quote}</p>
                    </article>
                )
            })}
            <button className="prev" onClick={() => setIndex(index + 1)}>
                <i className='fas fa-arrow-right'/>
            </button>
            <button className="next" onClick={() => setIndex(index - 1)}>
                <i className='fas fa-arrow-left'/>
            </button>
        </div>
    </section>
  )
}

export default Slider
