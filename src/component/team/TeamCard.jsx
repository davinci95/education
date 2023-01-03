import React from 'react'
import { team } from "../../Data"

const TeamCard = () => {
  return (
    <>
      {team.map((value) => (
            <div className="items shadow">
                  <div className="img">
                        <img src={value.cover} alt="" />
                        <div className="overlay">
                              <i className='fab fa-facebook-f icon'></i>
                              <i className='fab fa-twitter icon'></i>
                              <i className='fab fa-instagram icon'></i>
                              <i className='fab fa-tiktok icon'></i>
                        </div>
                  </div>
                  <div className="details">
                        <h2>{value.name}</h2>
                        <p>{value.work}</p>
                  </div>
            </div>
      ))}
    </>
  )
}

export default TeamCard