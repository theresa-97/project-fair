import React from 'react'
import prjtcrd from '../assets/image/project.jpg'
import { Card } from 'react-bootstrap'

function ProjectCard() {
  return (
    <>
    <Card style={{ width: '18rem' }} className='shadow rounded mt-5'>
    <Card.Img variant="top" src={prjtcrd} width={"100%"}/>
    <Card.Body>
    <Card.Title>Project Title</Card.Title>
      </Card.Body>
    </Card>

    </>
  )
}

export default ProjectCard
