import React from 'react'
import Layout from '../components/layout'

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
            <div className='navigation'>
                <a href='#contact'>contact</a>
                <a href='#skills'>skills</a>
                <a href='https://github.com/Reego'>github</a>
            </div>
            <div className='mainImageTitle'>Hello, I'm Reego</div>
            <div className='mainImageSubText'>A <i>Full-Stack</i> developer from Texas ready to make your website a <i>reality</i></div>
        </div>
    </div>
  </div>
)
