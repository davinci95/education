import React from 'react'
import { testimonal } from "../../../Data"
import Heading from '../../common/heading/Heading'

import "./testimonal.css"

const Testimonal = () => {
  return (
    <>
      <section className="testimonal padding">
            <div className="container">
                  <Heading title="Our Successful Students" subtitle="TESTIMONAL" />
                  <div className="content grid2">
                        {testimonal.map((value) => (
                              <div className="items shadow">
                                    <div className="box flex">
                                          <div className="img">
                                                <img src={value.cover} alt="" />
                                                <i className='fa fa-quote-left icon'></i>
                                          </div>   
                                          <div className="name">
                                                <h2>{value.name}</h2>
                                                <span>{value.post}</span>
                                                </div>  
                                    </div>
                                    <p>{value.desc}</p>
                              </div>
                        ))}
                  </div>
            </div>
      </section>
    </>
  )
}

export default Testimonal