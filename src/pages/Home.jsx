import React,{useState} from 'react'
import Add from '../components/Add'
import ViewCateg from '../components/ViewCateg'
import Category from '../components/Category'
import { Col,Row } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'

function Home() {
  const [resState,setResState]=useState(false)
  const changeResState=()=>{
  setResState(true)
}
  return (

  
    <div>
        <h2 className='text-center mt-3 text-primary '>All Categories</h2>
      <Row className='mx-5 mt-5 mb-5 p-5'>
      <Col md={12} className='mb-4 '>
        <Link to={'/'}>
          <div style={{ width: "30px", borderRadius: "50%" }} className='d-flex justify-content-center align-items-center float-start me-5 '>
            <i class="fa-solid fa-backward fa-xl" style={{color: '#c95c22'}}></i>
          </div>
        </Link>
        <Link to={'/product'}>
          <div style={{ width: "30px",  borderRadius: "50%", height: "30px" }} className='d-flex justify-content-center align-items-center float-end mb-4 ms-5'>
            <i class="fa-solid fa-forward fa-xl" style={{color: '#c95c22'}}></i>
          </div>

        </Link>

      </Col> 
        <Col md={'2'} >
          <Add changeResState={changeResState} resState={resState}/>
        </Col>
        <Col md={'6'}>
          <ViewCateg  resState={resState} />
        </Col>
        <Col md={'4'}>
          <Category changeResState={changeResState}/>
        </Col>
      </Row>
      <ToastContainer/>
    </div>
  )
}

export default Home