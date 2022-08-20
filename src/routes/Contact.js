import React from 'react';
import Topbar from '../components/Topbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
      <Topbar/>
      <HeroImg2 heading="CONTACT" text="Get in touch with me on here"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact