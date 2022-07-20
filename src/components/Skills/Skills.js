import React from 'react'
import ListSkills from '../ListSkills/ListSkills'

import {
    frontendSkills,
    fontendSkillsColors,
    backendSkills,
    backendSkillsColors,
    soSkills,
    soSkillsColors,
    otherSkills,
    otherSkillsColors,
  } from "../../utils/skills"
  import "./skills.css"


export default function Skills() {
  return (
    <div className='container'>
      <div className='box'>
    <div className="skills__block">
    
          <h2>Frontend</h2>
          <ListSkills skills={frontendSkills} colors={fontendSkillsColors} />
        </div>
        <div className="skills__block">
          <h2>Backend</h2>
          <ListSkills skills={backendSkills} colors={backendSkillsColors} />
        </div>
        <div className="skills__block">
          <h2>Other Skills</h2>
          <ListSkills skills={otherSkills} colors={otherSkillsColors} />
          <div className="skills__block">
          <h2>Operating Systems</h2>
          <ListSkills skills={soSkills} colors={soSkillsColors} />
        </div>
        </div>
        </div>
        </div>
  )
}
