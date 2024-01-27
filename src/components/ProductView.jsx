import React,{useState,useEffect} from 'react'
import { Card ,Row} from 'react-bootstrap'
import { getProduct ,deleteProd} from '../services/allApi'
import { ToastContainer,toast } from 'react-toastify'
import { Link } from 'react-router-dom'



function ProductView({refreshAllProd,changeRefresh}) {
    const [allProducts,setAllProducts]=useState([])



    const handleProduct=async()=>{
      let res=await getProduct()
      console.log(res.data)
      setAllProducts(res.data)
    
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
    },[refreshAllProd])
  return (
    <div>
         
  <Row>
   
    
   {

  
     allProducts?.map(item=>(
     
      <Card style={{ width: '16rem',textAlign:'center' }} className='ms-5 mb-5 me-5 mt-4'>
      <Card.Img height={'200px'} variant="top" src={item?.url}  />
      <Card.Body>
         <Card.Title>{item?.name}</Card.Title>
       <Card.Text>
          {item?.price}
          <span className='btn btn-sm' onClick={()=>removeProd(item?.id)} style={{float:'right'}}><i className="fa-solid fa-trash " style={{color: '#e64814'}}></i></span>
        </Card.Text>
       </Card.Body>
     </Card>
     
    

     ))
    }
  
   
   </Row>
    </div>
  )
}

export default ProductView