import React from 'react'

import BasicLayout from "../templates/BasicLayout"
import Projetcs from "../components/Proyectos/Projects"
import Seo from '../components/Seo'

export default function projects(){
  return (
    <>
    <header className="container" id='container'>
    <BasicLayout/>
    <Seo title="Projects"/>
    </header>

    <body>

    <Projetcs/>
    </body>
   </>
  )
}
