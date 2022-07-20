import React from 'react'

import BasicLayout from "../templates/BasicLayout"
import Projetcs from "../components/Proyectos/Projects"

export default function projects(){
  return (
    <>
    <header className="container" id='container'>
    <BasicLayout/>
    </header>

    <body>

    <Projetcs/>
    </body>
   </>
  )
}
