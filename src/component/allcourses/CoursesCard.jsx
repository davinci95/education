import React from 'react'
import "./courses.css"
import { coursesCard } from '../../Data'

const CoursesCard = () => {
  return (
    <>
      <section className="coursesCard">
            <div className="container grid2">
                  {coursesCard.map((value) => {
                        return (
                              <div className="items">
                                    <div className="content flex">
                                          <div className="left">
                                                <div className="img">
                                                      <img src={value.cover} alt="" />
                                                </div>
                                          </div>
                                          <div className="text">
                                                <h1>
                                                      {value.coursesName}
                                                </h1>
                                                <div className="rate">
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <label htmlFor=''>(5.0)</label>
                                                </div>
                                          <div className="details">
                                                {value.courTeacher.map((detail) => (
                                                      <>
                                                      <div className="box">
                                                            <div className="dimg">
                                                                <img src={detail.dcover} alt="" />
                                                            </div>
                                                            <div className="para">
                                                                  <h2>{detail.name}</h2>
                                                            </div>
                                                      </div>
                                                      <span>{detail.totalTime}</span>
                                                      </>
                                                ))}
                                          </div>
                                          </div>
                                    </div>
                                    <div className="price">
                                          <h3>{value.priceAll} / {value.pricePer}</h3>
                                    </div>
                                    <button className="outline-btn">ENROLL NOW</button>
                              </div>
                        )
                  })}
            </div>
      </section>
    </>
  )
}

export default CoursesCard