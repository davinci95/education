import React, { useState} from 'react'

import Heading from '../common/heading/Heading'
import { faq } from '../../Data'

const Faq = () => {
      const [click, setClick] = useState()

      const toggle = (index) => {
            if(click === index) {
                  return setClick(null)
            } 
            setClick(index)
      }
      
  return (
    <>
    <Heading title="FAQS" subtitle="Frequesntly Ask Question" />
      <section className="faq">
            <div className="container">
                  {faq.map((value, index) => (
                        <div className="box">
                              <button className="accordion" onClick={() => toggle(index)} key={index}>
                                    <h2>{value.title}</h2>
                                    <span>{click === index ? <i className='fa fa-chevron-down'></i> : <i className='fa fa-chevron-right'></i>}</span>
                              </button>
                              {click === index ? (
                                    <div className="text">
                                          <p>{value.desc}</p>
                                    </div> 
                              ) : null}
                        </div>
                  ))}
            </div>
      </section>
    </>
  )
}

export default Faq