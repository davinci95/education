import React from 'react'
import { price } from '../../Data'

const PriceCard = () => {
  return (
    <>
      {price.map((value) => (
            <div className="items shadow">
                  <h4>{value.name}</h4>
                  <h1>
                        <span>$ {value.price}</span>
                  </h1>
                  <p>{value.desc}</p>
                  <button className='outline-btn'>GET STARTED</button>
            </div>
      ))}
    </>
  )
}

export default PriceCard