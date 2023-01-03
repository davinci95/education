import React from 'react'
import Heading from '../../common/heading/Heading'
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
            <div className="container">
                  <div className="row">
                  <Heading subtitle='WELCOME TO ACADEMIA' title='Best Online Education Expertise' />
                        <p className=''>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <button className='primary-btn'> GET GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i></button>
                        <button className=''> VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i></button>
                  </div>
            </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero