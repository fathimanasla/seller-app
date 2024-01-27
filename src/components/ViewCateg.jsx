import React,{useEffect,useState} from 'react'
import { Card,Button,Row } from 'react-bootstrap'
import { Link} from 'react-router-dom'
import { deleteCateg,getCategory,getSpecificCategory,updateCategory } from '../services/allApi'
import { ToastContainer,toast } from 'react-toastify'
import Category from './Category'

function ViewCateg({resState}) {
  const [allCateg,setAllCateg]=useState([])



  const handleCateg=async()=>{
    let res=await getCategory()
    console.log(res.data)
    setAllCateg(res.data)
  
  }
  useEffect(()=>{
    handleCateg()
  },[resState])
 

    const removeCateg=async(id)=>{
      // let id=e-target
      console.log(id)
      let res=await deleteCateg(id)
      if(res.status >=200  && res.status<300){
        toast.success("Product Deleted Successfully")
        handleCateg()
      }
      else{
        toast.error("Deletion Failed!!")
      }
    }

   
  

  return (
    
    <div>

      <Row>
        {
          allCateg?.map(item=>(
            <Card style={{ width: '16rem',textAlign:'center' }} className='ms-5  mb-3'>
            <Card.Img height={'200px'} variant="top" src={item?.url} />
            <Card.Body>

              <Card.Title>{item?.categoryName}</Card.Title>
            
               <Link to={`/product/${item.categoryName}`} className='btn btn-primary'>View Product</Link>
              {/* <Button variant="primary" onClick={clickNavigate}>View Product</Button> */}
              <span className='btn btn-sm mt-2  ' onClick={()=>removeCateg(item?.id)} style={{float:'right'}}><i className="fa-solid fa-trash fa-lg  " style={{color: '#e64814'}}></i></span>
            </Card.Body>
          </Card>
          
          ))
        }
        
           
          
           
        
      </Row>
      
    </div>
  )
}

export default ViewCateg