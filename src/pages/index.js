import React from 'react'
import BasicLayout from "../templates/BasicLayout"
import "./BasicStyles.css"
import Aboutme from '../components/Aboutme'
import Seo from '../components/Seo'

export default function index() {
  return (
    <>
     
    <header className="container" id='container'>
    
    <BasicLayout/>
   <Seo title="Home"/>
    </header>
    <body>
    <Aboutme/>
    
    </body>
    </>
    
  )
  
}



