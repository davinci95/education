import React from 'react'
import CoursesCard from './CoursesCard'
import OnlineCourses from './OnlineCourses'
import Back from "../common/back/Back"

const CourseHome = () => {
  return (
    <>
      <Back title="Explore Courese" />
      <CoursesCard />
      <OnlineCourses />
    </>
  )
}

export default CourseHome