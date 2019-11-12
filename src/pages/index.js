import React from 'react'
import Layout from '../components/layout'
import '../styles/global.css'

export default () => (
  <React.Fragment>
    {/*<div className='bgOverlay'></div>*/}
    <div className='bgImage'></div>
    <div className='overlay'></div>
    <Layout/>
    <div className='content'>
        <div className='skills' id='skills'>
          <p className='skillsDescription'>Here are some of the skills I provide</p>
          <div className='skill'>
            <p className='skillTitle'>Front End</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
            </ul>
          </div>
          <div className='skill'>
            <p className='skillTitle'>Back End</p>
            <ul>
              <li>Python</li>
              <li>Node.js</li>
              <li>Gatsby.js</li>
            </ul>
          </div>
          <div className='skill'>
            <p className='skillTitle'>Tools</p>
            <ul>
              <li>Git</li>
              <li>Electron.js</li>
            </ul>
          </div>
        </div>
        <div className='contact' id='contact'>
          <p className='contactTitle'>Contact Me</p>
          <div className='contactItems'>
            <p>Email: reegodev@gmail.com</p>
            <p>Phone: (832) 366 1434</p>
          </div>
        </div>
        <div className='footer'>
          <p>Copyright 2019 - 2020</p>
          <p>All Rights Reserved.</p>
        </div>
    </div>
  </React.Fragment>
)
