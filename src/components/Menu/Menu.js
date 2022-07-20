import React from 'react'
import "./Menu.css"
import { Link } from "gatsby"


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faHouseChimney,faBarsProgress,faToolbox} from '@fortawesome/free-solid-svg-icons'



export default function Menu() {
  return (
<>

  <div className='menu'>
    
  <button className='btnmenu inicio'><Link to="/" ><FontAwesomeIcon icon={faHouseChimney} pull='left' className='iconinicio'/><span>Home</span></Link></button>
 <button className='btnmenu skills'><Link to="/skills"><FontAwesomeIcon icon={faBarsProgress} pull='left' className='iconskills'/><span>Skills</span></Link></button>
  
      <button className='btnmenu git'><a href="https://github.com/stevenfeliz"><FontAwesomeIcon icon={faGithub} pull='left' className='icongithub'/><span>GitHub</span></a></button>


  

       <button className='btnmenu projects'><Link to="/projects/"><FontAwesomeIcon icon={faToolbox} pull='left' className='iconprojects'/><span>Projects</span></Link></button>
      <button className='btnmenu linkedin'><a href="https://www.linkedin.com/in/stevenfeliz/"><FontAwesomeIcon pull='left' className='iconlinkedin' icon={faLinkedin}/><span>Linkedin</span></a></button>
     
  </div>
 

 
  </>
   
    
  )
}
