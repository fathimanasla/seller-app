import React,{useState,useEffect} from 'react'
import { Card ,Row,Col} from 'react-bootstrap'
import { getProduct ,deleteProd} from '../services/allApi'
import { ToastContainer,toast } from 'react-toastify'
import { Link } from 'react-router-dom'

function Product({procateg}) {
  const [allProduct,setAllProduct]=useState([])



const handleProduct=async()=>{
  let res=await getProduct()
  console.log(res.data)
  setAllProduct(res.data)

}

const removeProd=async(id)=>{
  // let id=e-target
  console.log(id)
  let res=await deleteProd(id)
  if(res.status >=200  && res.status<300){
    toast.success("Video Deleted Successfully")
    handleProduct()
  }
  else{
    toast.error("Deletion Failed!!")
  }
}

useEffect(()=>{
  handleProduct()
},[])


  return (
  <div className='m-5'>
  
  <Row>
    <Col md={12} className='mb-4' >
    <Link to={'/home'}>
      <div style={{ width: "30px",  borderRadius: "50%", height: "30px" }} className='d-flex justify-content-center align-items-center float-start '>
        <i class="fa-solid fa-backward fa-xl" style={{color: '#c95c22'}}></i>
      </div>
    </Link>
    <Link to={'/product'}>
      <div style={{ width: "30px",  borderRadius: "50%", height: "30px" }} className='d-flex justify-content-center align-items-center float-end '>      
        <i className="fa-solid fa-forward fa-xl" style={{ color: "#c95c22" }}></i>
      </div>
    </Link>
    </Col>
   {

  
     allProduct.filter(productitem=>productitem.categoryName===procateg).map(productitem=>(
     
      <Card style={{ width: '16rem',textAlign:'center' }} className='ms-4'>
      <Card.Img height={'200px'} variant="top" src={productitem?.url} />
      <Card.Body>
         <Card.Title>{productitem.name}</Card.Title>
       <Card.Text>
          {productitem.price}
          <span className='btn btn-sm' onClick={()=>removeProd(productitem?.id)} style={{float:'right'}}><i className="fa-solid fa-trash " style={{color: '#e64814'}}></i></span>
        </Card.Text>
       </Card.Body>
     </Card>
     
    

     ))
    }
  
   
   </Row>
    </div>
  )
}

export default Product