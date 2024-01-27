import React,{useState,useEffect} from 'react'
import { Modal,Button,FloatingLabel,Form} from 'react-bootstrap'
import { toast } from 'react-toastify';
import { addProducts,updateCategory,addCategory, getSpecificCategory,getSpecificProduct } from '../services/allApi';
import 'react-toastify/dist/ReactToastify.css';
import { getCategory} from '../services/allApi';

function Add({changeResState,resState}) {
  const [show, setShow] = useState(false);
  const [product,setProduct]=useState({
    id:'',name:'',price:'',url:'',categoryName:''
  })
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleProductDetails=(e)=>{
    const {name,value}=e.target
    setProduct({...product,[name]:value})
  }

const [getCateg,setGetCateg]=useState([])

const handleCat=async()=>{
  let res2=await getCategory()
  console.log(res2.data)
  setGetCateg(res2.data)
}

useEffect(()=>{
  handleCat()
},[resState])



  const uploadProducts=async(e)=>{
    const {id,name,price,url,categoryName}=product
    if(!id || !name || !price || !url || !categoryName){
      toast.warning("Please fill in the video Details")
    }
    else{
      let response=await addProducts(product)
      console.log(response)
     
      if(response.status >=200 || response.status<300){
        setShow(false)
        changeResState()
        toast.success("New Video Upload!!")
      }
      else{
        toast.error("Video Upload Failed")
      }
  
    }
   }
   
   console.log(product)
  return (
    <>
    
      <div className='btn btn-primary btn-sm ms-5' onClick={handleShow}>
        <i class="fa-solid fa-circle-plus fa-xl" style={{color: "white"}}></i>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
        <FloatingLabel controlId="floatingInputGrid" label="ProductID" className='mb-3'>
          <Form.Control type="text" name='id' placeholder="Product ID" onChange={(e)=>handleProductDetails(e)}/>
        </FloatingLabel>
        <FloatingLabel controlId="floatingInputGrid" label="Name" className='mb-3'>
          <Form.Control type="text" name='name' placeholder="Product Name"  onChange={(e)=>handleProductDetails(e)}/>
        </FloatingLabel>
        <FloatingLabel controlId="floatingInputGrid" label="Price" className='mb-3'>
          <Form.Control type="text" name='price' placeholder="Price"  onChange={(e)=>handleProductDetails(e)}/>
        </FloatingLabel>
        <FloatingLabel controlId="floatingInputGrid" label="Product image URL" className='mb-3'>
          <Form.Control type="text" name='url' placeholder="Product URL"  onChange={(e)=>handleProductDetails(e)}/>
        </FloatingLabel>
        
      
        <FloatingLabel
          controlId="floatingSelectGrid"
          label="Category" className='mb-3' 
        >
          <Form.Select aria-label="Floating label select example" name='categoryName'onChange={(e)=>handleProductDetails(e)}>
            <option >Open this select menu</option>

        {
          getCateg?.map(item=>(
            <option >{item?.categoryName}</option>

          ))
        }
              
            
            {/* <option value="1">Men's dresses</option>
            <option value="2">Women's dresses</option>
            <option value="3">Women's shoes</option>
            <option value="4">Men's shoes</option>
            <option value="4">JImikki kammal</option> */}
   

        </Form.Select>
        </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={uploadProducts}  >Upload</Button>
        </Modal.Footer>
      </Modal>
      
      
    </>
  )
}

export default Add