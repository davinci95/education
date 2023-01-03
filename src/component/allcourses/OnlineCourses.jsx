import React from 'react'
import Heading from '../common/heading/Heading'
import { online } from "../../Data"
import "./courses.css"

const OnlineCourses = () => {
  return (
    <>
    <section className="online">
      <div className="container">
            <Heading title='COURSES' subtitle="Browse Our Online Courses" />
            <div className="content grid3">
                  {online.map((value) => {
                        return (
                              <div className="box">
                                    <div className="img">
                                          <img src={value.cover} alt="" />
                                          <img src={value.hoverCover} alt="" className='show'/>
                                    </div>
                                    <h1>{value.courseName}</h1>
                                    <span>{value.course}</span>
                              </div>
                        )
                  })}
            </div>
      </div>
    </section>
    </>
  )
}

export default OnlineCourses