import React from 'react'
import { Navbar,Container } from 'react-bootstrap'

function Header() {
  return (
    <div>
         <Navbar className="bg-primary ">
        <Container>
          <Navbar.Brand href="#home">
            <i class="fa-solid fa-cart-arrow-down fa-fade fa-lg me-3" style={{color: "#ffffff"}}></i>
            <span style={{fontSize:'25px'}}>Myntra</span>
              <button style={{position:"absolute",right:"400px"}} className='btn btn-dark '>Sign up</button>
              <button style={{position:"absolute",right:"300px"}} className='btn btn-dark'>Sign in</button>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header