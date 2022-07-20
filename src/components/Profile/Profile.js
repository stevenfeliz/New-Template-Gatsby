import React from 'react'
import profileImage from "../../images/perfil.png"
import {Image } from "react-bootstrap"
import "./Profile.css"

export default function Profile(){
  return (
    
    <div className="row perfil">
      <div className='col text-center'><Image id='foto' src={profileImage} fluid/></div>
      
      
      </div>
    
   
  )
}
