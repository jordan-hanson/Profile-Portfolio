import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>I am Jordan Hanson</strong>, <br />
        a Software Developer

        with a strong skillset in Java backend development
        <br />
         and React front end creation.
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
