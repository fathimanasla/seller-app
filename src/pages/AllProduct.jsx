import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Row,Col } from 'react-bootstrap'
import ProductView from '../components/ProductView'

function AllProduct() {

    const [refreshAllProd, setRefreshAllProd] = useState(false)
    const changeRefresh = () => {
      setRefreshAllProd(true)
    }

  return (
    <div>
    <Link to={'/home'}>
        <div style={{ width: "30px", borderRadius: "50%", height: "30px" }} className='d-flex justify-content-center align-items-center float-start mt-5  ms-5'>
           <i class="fa-solid fa-backward fa-xl" style={{color: '#c95c22'}}></i>
        </div>
    </Link>
      <h2 className='text-center my-5 text-primary' >All Products</h2>

      <Row>
        <Col >
          <ProductView refreshAllProd={refreshAllProd} changeRefresh={changeRefresh} />
        </Col>

      </Row>
    </div>
  )
}

export default AllProduct