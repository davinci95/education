import React from 'react'
import { blog } from '../../Data'

const BlogCard = () => {
  return (
    <>
      {blog.map((value) => (
        <div className="items shadow">
          <div className="img">
            <img src={value.cover} alt="" />
          </div>
          <div className="text">
            <div className="admin flexSB">
              <span>
              <i className='fa fa-user'></i>
              <label htmlFor="">{value.type}</label>
              </span>
              <span>
              <i className='fa fa-calendar-alt'></i>
              <label htmlFor="">{value.date}</label>
              </span>
              <span>
              <i className='fa fa-comments'></i>
              <label htmlFor="">{value.com}</label>
              </span>
            </div>
            <h1>{value.title}</h1>
            <p>{value.desc}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default BlogCard