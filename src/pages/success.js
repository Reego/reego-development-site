import React from 'react'
import Layout from '../components/successlayout'
import { Helmet } from 'react-helmet'
import '../styles/global.css'

export default () => (
  <React.Fragment>
    <Helmet>
      <title>Reego Development</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width, viewport-fit=cover"/>
    </Helmet>
    <div className='bgImage'></div>
    <div className='overlay'></div>
    <Layout/>
  </React.Fragment>
)
