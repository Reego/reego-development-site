import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

export default () => (
  <div className='layout'>
    {/*<div className='header'>
        <span className='headerTitle'>Reego Development</span>
        <a className='nav' href='#skills'>skills</a>
        <a className='nav' href='#about'>about</a>
        <a className='nav' href='#contact'>contact</a>
    </div>*/}
    <div className='mainImage'>
        <div className='mainImageText'>
            <div className='mainImageTitle' style={{fontFamily:'Roboto'}}>Email Sent!</div>
            <div className='mainImageSubText'>Thank you for contacting me! Expect a reply shortly.</div>
            <div className='returnToSite'><Link to='/' >Return to Site</Link></div>
        </div>
    </div>
  </div>
)
