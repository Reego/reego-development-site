import React from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'
import '../styles/global.css'

const SVG1 = () =>
(
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M434.8 137.6L285.4 69.5c-16.2-7.4-42.7-7.4-58.9 0L77.2 137.6c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.9 7.7 44.7 7.7 61.6 0l148-67.5c17.6-8 17.6-21.1 0-29.1zM225.2 375.2l-99.8-45.5c-4.2-1.9-9.1-1.9-13.3 0l-34.9 15.9c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.9 7.7 44.7 7.7 61.6 0l148-67.5c17.6-8 17.6-21.1 0-29.1l-34.9-15.9c-4.2-1.9-9.1-1.9-13.3 0l-99.8 45.5c-16.9 7.7-44.7 7.7-61.6 0z"/><path d="M434.8 241.6l-31.7-14.4c-4.2-1.9-9-1.9-13.2 0l-108 48.9c-15.3 5.2-36.6 5.2-51.9 0l-108-48.9c-4.2-1.9-9-1.9-13.2 0l-31.7 14.4c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.9 7.7 44.7 7.7 61.6 0l148-67.5c17.7-8 17.7-21.1.1-29.1z"/></svg>
)

const SVG2 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M437.1 165.8C429 90.6 365.4 32 288 32c-51.2 0-96.3 25.6-123.4 64.7-8.3-3.4-17.4-5.3-26.9-5.3-39.1 0-70.8 34.4-71.4 73.4C26.4 177.5 0 216.5 0 257.5 0 307.7 40.7 352 90.9 352H243V210.1l-47.9 47.2c-5.1 5-13.3 5-18.4-.1-5-5.1-5-13.3.1-18.4l70-69c1.2-1.1 2.5-2.1 4.1-2.7 1.6-.7 3.3-1 5-1 3.4 0 6.6 1.3 9.1 3.7l70 69c5.1 5 5.2 13.3.1 18.4-5 5.1-13.3 5.2-18.4.1L269 210.1V352h152.1c50.2 0 90.9-44.3 90.9-94.5 0-44.7-32.3-84.1-74.9-91.7zM243 467c0 7.2 5.8 13 13 13s13-5.8 13-13V352h-26v115z"/></svg>
)

const SVG3 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M380 64.4zM275.1 57.6c-9.4-5.9-23.3-9.6-37.9-9.6-14.3 0-30.3 2.5-46.7 9.2-46.5 19-74 45.4-81.1 52.4-7 7-16.8 18-22.9 26.6-6.1 8.7 1.9 21-6.1 29s-24.7 0-24.7 0c-1.4 0-2.9.5-3.9 1.6l-34.1 33.9c-2.2 2.1-2.2 5.7 0 7.8l63.5 63.1c1.1 1.1 2.5 1.6 3.9 1.6s2.9-.5 3.9-1.6l33.2-34.8c2.2-2.1 2.2-5.7 0-7.8 0 0-5.3-5.2-12.1-12s.8-19.3 5.3-23.4c4.5-4.1 11.6-6.8 21.1-6.8 4.3 0 7.4.7 11.4 1.8 12.2 3.4 25.8 15.9 50.9 40.8l-3.9 6.5c-2.3 3.8-.9 8.3 1.3 10.4 0 0-5-4.9 13.1 13.1l50-47.2c-19.1-18.9-14.5-14.1-14.5-14.1-1.4-1.4-3.8-2.3-6.3-2.3-1.4 0-2.9.3-4.2 1l-5.6 3c-28-27.8-35.3-40.2-34.3-61.7 1.1-22.4 12.3-37.1 30.5-52.7 24.7-21.1 60.6-15.2 60.6-15.2 8-.1-4.2-8.6-10.4-12.6zM462.5 399.9s-68.9-57.2-130.2-115.7l-47.7 50.6c58.5 60.6 114.9 127.6 114.9 127.6 1.1 1.1 2.5 1.6 3.9 1.6s2.9-.5 3.9-1.6l55.1-54.7c2.2-2.1 2.2-5.7.1-7.8z"/><path d="M479.2 125.3l-52.4 52.6-51.1-9.3-9.2-51.1 52.4-52.6c-11.1-11.1-26.8-16.6-39-16.6-.7 0-1.4 0-2 .1-12.5.6-39.2 7.7-59.9 29.7-20 21.1-41.1 60.6-22.4 104.3 2.2 5.3 4.7 12.2-2.7 19.7-1.5 1.4-9.9 9.4-22.5 21.3-3.6 3.4-7.4 7-11.6 11-8 7.6-17.1 16.2-26.8 25.2-3.8 3.6-7.7 7.2-11.6 11-57 53.8-126.9 119.5-126.9 119.5-18 15.5-16.7 44.1-.1 60.8 8.5 8.4 20 12.8 31.3 12.8 11 0 21.9-4.2 29.5-13.1 0 0 65.5-69.8 119.3-126.9 3.7-4 7.4-7.8 11-11.7 9.3-9.9 18-19.1 25.8-27.3 3.9-4.2 7.6-8.1 11-11.6 11.5-12.2 19.3-20.4 21-22 4-3.9 7.7-5.1 11.1-5.1 3.3 0 6.2 1.2 8.6 2.4 9.9 5.1 21 7.3 32.4 7.3 26.7 0 55-12.4 72.1-29.5 24.4-24.4 28.8-47.9 29.6-60 .6-11.8-3.6-27.6-16.9-40.9zM137.4 426.1c-5.5 5.4-14.4 5.4-19.8 0-5.4-5.5-5.4-14.4 0-19.8 5.5-5.4 14.4-5.4 19.8 0 5.4 5.5 5.4 14.4 0 19.8z"/></svg>
  )

export default () => (
  <React.Fragment>
    <Helmet>
      <title>Reego Development</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width, viewport-fit=cover"/>
    </Helmet>
    <div className='bgImage'></div>
    <div className='overlay'></div>
    <Layout/>
    <div className='content'>
        <div className='skills' id='skills'>
          <p className='skillsDescription'>Below are some of the services I provide</p>
          <div className='skill'>
            <SVG1/>
            <p className='skillTitle'>Front End
            </p>
            <span>Slick, aesthetic, and responsive designs that work on any computer, phone, or device.</span>
          </div>
          <div className='skill'>
            <SVG2/>
            <p className='skillTitle'>Back End
            </p>
            <span>Server-side processing and databse integration allow for dynamic web applications.</span>
          </div>
          <div className='skill'>
            <SVG3/>
            <p className='skillTitle'>Extra
            </p>
            <span>Continuous maintenance along with SSL and hosting to keep your website up to date.</span>
          </div>
        </div>
        <div className='contact' id='contact'>
          <p className='contactTitle'>Contact Me</p>
          <div className='contactItems'>
            <form method="post" action="/success" name="Contact" data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="bot-field"/>
              <p>
                <label style={{display:'none'}}>Email</label>
                <input className='inputEmail' type='email' name='email' placeholder='Email' required/>
              </p>
              <p>
                <label style={{display:'none'}}>Message</label>
                <textarea className='inputMessage' type='text' name='message' placeholder='Message' required/>
              </p>
              <p>
                <input className='inputSubmit' type='submit' value='Submit'/>
              </p>
            </form>
{/*            <p>Email: reegodev@gmail.com</p>
            <p>Phone: (832) 366 1434</p>*/}
          </div>
        </div>
        <div className='footer'>
          <p>Copyright 2019 - 2020</p>
          <p>All Rights Reserved.</p>
        </div>
    </div>
{/*    https://ionicons.com/*/}
    {/*<ion-icon name="construct"></ion-icon>*/}
    {/*<ion-icon name="cloud-upload"></ion-icon>*/}
  </React.Fragment>
)
