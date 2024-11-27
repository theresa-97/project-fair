import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import titleImage from '../assets/image/girl comp.avif'
import ProjectCard from '../Components/ProjectCard'

function Home() {
  return (
    <>
      <div style={{height:"70vh", width:"100%"}} className="container-fluid rounded bg-info">
        <Row classname="align-item-center">
            <Col sm={12} md={6}>
            <h1 style={{fontSize:"80px"}} className='fw-bolder text-light mt-5'><i class="fa-solid fa-list-check"></i>Project-Fair</h1>
            <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ullam, veniam dicta accusamus aliquam aliquid amet explicabo, ipsam praesentium quaerat fugit laudantium. Aliquam libero fugit aut laudantium, architecto id odit!</p>
           <Link to={'/login'} className='btn btn-warning'>Start To Explore</Link>
            </Col>
            <Col sm={12} md={6}> 
            <img src={titleImage} width={"500px"} alt="" />
            </Col>
        </Row>
      </div>
      {/* all Projects */}

      <div className="allProject mt-5">
        <h1 className='text-center text-primary fw-bolder'>Explore Your Project</h1>
       <marquee scrollAmount={25}>
       <Row>
            <Col sm={12} md={6} lg={4}>
            <ProjectCard/>
            </Col>
            <Col sm={12} md={6} lg={4}>
            <ProjectCard/>
            </Col>
            <Col sm={12} md={6} lg={4}>
            <ProjectCard/>
            </Col>
        </Row>
       </marquee>
      </div>
    </>
  )
}

export default Home
