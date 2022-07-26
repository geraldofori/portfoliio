import React from 'react'
import Topbar from '../components/Topbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import WorkCard from '../components/WorkCard'

const Project = () => {
  return (
    <div>
      <Topbar/>
      <HeroImg2 heading="PROJECTS" text="Some of my most recent works"/>
      <WorkCard/>
      <Footer/>
    </div>
  )
}

export default Project