import React from 'react'
import TeamCard from './TeamCard'
import Back from "../common/back/Back"
import Awrapper from "../about/Awrapper"

import "../about/about.css"
import "./team.css"


const Team = () => {
  return (
    <>
      <Back title="Team" />
      <section className="team padding">
            <div className="container grid">
                  <TeamCard />
            </div>
      </section>
      <Awrapper />
    </>
  )
}

export default Team