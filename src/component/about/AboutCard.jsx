import React from 'react'
import Heading from '../common/heading/Heading'
import { homeAbout } from '../../Data'
import Awrapper from "./Awrapper"
import "./about.css"

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
            <div className="container flexSB">
                  <div className="left row">
                        <img src="../education/images/about.webp" alt="" />
                  </div>
                  <div className="right row">
                        <Heading title="Benefits About Online Learning Expertise" subtitle="LEARN ANYTHING"/>
                        <div className="items">
                              {homeAbout.map((value) => {
                                    return (
                                          <div className='item flexSB'>
                                                <div className="img">
                                                      <img src={value.cover} alt="" />
                                                </div>
                                                <div className="text">
                                                      <h2>{value.title}
                                                      </h2>
                                                      <p>{value.desc}</p>
                                                </div>
                                          </div>
                                    )
                              })}
                        </div>
                  </div>
            </div>
      </section>
      <Awrapper />
    </>
  )
}

export default AboutCard