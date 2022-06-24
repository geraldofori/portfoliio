import React from 'react';

import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';

const About = () => {
  return (
    <div>
      <Topbar/>
      <HeroImg2 heading="ABOUT" text="I am a Software Engineer"/>
      <Footer/>
    </div>
  )
}

export default About