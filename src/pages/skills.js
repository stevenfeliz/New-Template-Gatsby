import React from 'react'
import "./BasicStyles.css"
import BasicLayout from "../templates/BasicLayout"
import Skills from '../components/Skills/Skills'
import "../pages/BasicStyles.css"
import Seo from '../components/Seo'



export default function skills() {
  return (
    <>
    <header className="container" id='container'>
    <BasicLayout/>
    <Seo title="Skills"/>
    </header>
    
    <body>
    <Skills/>
    </body>
   
    </>
  )
}