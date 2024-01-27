import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='text-center '>
        <div style={{width:'100%',height:'400px' ,color:'black'}} className='bg-primary'>
            <Row className='p-5'>
                <Col md={'4'}>
                  <h4><i class="fa-solid fa-cart-arrow-down  fa-lg me-3" style={{color: "#ffffff"}}></i>
                     <span className='text-white'>Myntra</span></h4>
                     <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur metus nunc, sed placerat dolor vestibulum sed. Donec nulla tellus, tincidunt a ante sed, venenatis vehicula arcu. In ultricies neque ut tristique posuere. Sed eget leo leo. Praesent ultrices mattis facilisis. Quisque tristique purus erat, eget porttitor mi dictum vitae. Praesent vitae dignissim tortor. Etiam auctor tincidunt tortor, at tincidunt leo porta a. Praesent volutpat, tortor id pretium sollicitudin, lectus ipsum porttitor ante, sed sodales mauris turpis a metus. Duis maximus, ante quis tempor facilisis, elit nisi molestie arcu, vel egestas quam nibh eu nibh. Vestibulum quis pellentesque sem.</p>
                </Col>
                <Col className='d-flex flex-column' >
                   <h4 className='text-white'>Links</h4><br />
                   <Link to={'./'}
                   style={{textDecoration:'none',color:'black'}}>Landing Page
                   </Link><br />
                   <Link to={'./home'}
                   style={{textDecoration:'none',color:'black'}}>Home
                   </Link><br />
                   <Link to={'./product'}
                   style={{textDecoration:'none',color:'black'}}>Product
                   </Link><br />
                </Col>
                <Col className='d-flex flex-column' >
                   <h4 className='text-white'>Guides</h4><br />
                   <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'black'}}>React</Link><br />
                   <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'black'}}>React-Bootstrap</Link><br />
                   <Link to={'https://fontawesome.com/'} style={{textDecoration:'none',color:'black'}}>Font Awesome</Link>
                </Col>
            </Row>
            <p className='text-center text-white' >Copyright © 2023 React Bootstrap. Built with Docusaurus.</p>

        </div>
    </div>
  )
}

export default Footer