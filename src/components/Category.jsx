import React,{useEffect, useState} from 'react'
import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap'
import { addCategory} from '../services/allApi';
import { ToastContainer,toast } from 'react-toastify';
import ViewCateg from './ViewCateg';


function Category({changeResState}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [categ,setCateg]=useState({
    id:'',categoryName:'',url:''
  })

  const handleCategDetails=(e)=>{
    const {name,value}=e.target
    setCateg({...categ,[name]:value})
  }
 

  const handleRequest=async()=>{
    const res=await addCategory(categ)
    console.log(res)
    if(res.status>=200 && res.status<300){
      setShow(false)
      changeResState()
      toast.success("Category Added!!")
    }
    else{
      toast.error("Failed")
    }
  }



  

  

console.log(categ)


  return (
    <>
      <div className=' ms-5 me-5 '>
        <button onClick={handleShow}  className='btn   text-white bg-primary' style={{fontSize:'20px',float:'right'}} >Add Category</button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <FloatingLabel  controlId="floatingId"  label="Catagory ID"  className="mb-3" onChange={(e)=>handleCategDetails(e)}>
          <Form.Control type="text" placeholder="Enetr Unique ID" name='id' />
        </FloatingLabel>
        <FloatingLabel controlId="floatingCategory" label="Category Name"  className="mb-3"onChange={(e)=>handleCategDetails(e)}>
          <Form.Control type="text" placeholder="Category Name" name='categoryName' />
        </FloatingLabel>
        <FloatingLabel controlId="floatingCategory" label="Category Image URL" onChange={(e)=>handleCategDetails(e)}>
          <Form.Control type="text" placeholder="Category Image URL" name='url' />
        </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" className='bg-primary text-white' onClick={handleRequest}>Add</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Category