import React from 'react'
import {Container, Col,Row,Button} from "react-bootstrap"
import "./Aboutme.css"
import CV from "../../images/cv.pdf"


var datos = `
<h1 className='text-center'>About me</h1>
<div className='box text-center'>
    <p>Solid front-end knowledge of HTML, CSS, Javascript, React, Gatsby. Experience in Python with Selenium and library Requests, Regex. Lolixscript with Openbullet opensource webscrapy tools Strong understanding of design principles, UI/UX, Modular CSS, Bootstrap, Grid layout and responsive design. Positive attitude, strong work ethic, out-of-the-box thinking and high level of professional integrity. Salmos 128:2 ✞</p>

    <hr />
    <a href={CV} target="_blank">
        <Button primary>Descargar CV</Button>
     </a>

</div>

`

export default function Aboutme() {
  return (
    
        <div className='container'>
        
        <h1 className='text-center'>About me</h1>
<div className='box text-center'>
    <p>Solid front-end knowledge of HTML, CSS, Javascript, React, Gatsby. Experience in Python with Selenium and library Requests, Regex. Lolixscript with Openbullet opensource webscrapy tools Strong understanding of design principles, UI/UX, Modular CSS, Bootstrap, Grid layout and responsive design. Positive attitude, strong work ethic, out-of-the-box thinking and high level of professional integrity. Salmos 128:2 ✞</p>

    <hr />
    <a href={CV} target="_blank">
        <Button primary>Descargar CV</Button>
     </a>

</div>
            
        </div>
    
  )
}
