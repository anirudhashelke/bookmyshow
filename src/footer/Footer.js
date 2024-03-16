import React from 'react'
import "./footer.css"
import Navigation from './Navigation'
import Descriptions from './Descriptions'
import ContactToday from './ContactToday'
import Services from './Services'
import MenuLinks from './MenuLinks'
import SocialLinks from './SocialLinks'

const Footer = () => {
  return (
    <>
    <Navigation />
    <Descriptions/>
    <ContactToday />
    <Services />
    <MenuLinks />
    <SocialLinks />
    </>
  )
}

export default Footer