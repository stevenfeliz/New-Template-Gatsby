import React from 'react'
import projects from "../../utils/projects"
import "./projects.css"
import { Row, Col, Card, Button } from "react-bootstrap"

export default function Projects() {
  return (
    <div className='container'>
    <h1 className='text-center'>Projects</h1>
<div className='box'>
    <Row>
      {projects.map((project, index) => (
        <Col key={index} xs={12} sm={4} className="project">
          <Card>
            <div
              className="image"
              style={{ backgroundImage: `url("${project.image}")` }}
            />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
              <a href={project.url} target="_blank">
                <Button variant="primary">Ver proyecto</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
    </div>
  )
}
