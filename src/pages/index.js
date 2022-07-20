import React from 'react'
import BasicLayout from "../templates/BasicLayout"
import "./BasicStyles.css"
import Aboutme from '../components/Aboutme'

export default function index() {
  return (
    <>
    <header className="container" id='container'>

    <BasicLayout/>
    
    </header>
    <body>
    <Aboutme/>
    </body>
    </>
  )
}
