import React from 'react'
import { Row,Col,Card } from 'react-bootstrap'
import { Navigate, useNavigate,Link } from 'react-router-dom'

function Landing() {

const navigateByUrl=useNavigate()
const clickNavigate=()=>{
  navigateByUrl('./home')
}

  return (
    <div>
       <Row className='pt-5 d-flex align-item-center'>
          <Col></Col>
          <Col md={'4'} >
            <h2>Welcome to <span style={{color:'#e6103e'}}>Myntra.com</span></h2>
            <p style={{textAlign:'justify'}} className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nulla sunt, fugiat totam a doloribus incidunt quasi veritatis culpa officiis. Consequatur consectetur vero, voluptatibus id iste qui? Ab, cupiditate error.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis quod nobis ea blanditiis ratione! Ea labore cumque maxime qui totam dolor, quasi deleniti ullam, modi ducimus placeat sit aliquam iustoLorem ipsum dolor sit amet consectetur adipisicing elit. Officia impedit maxime illo doloribus totam odit pariatur exercitationem dignissimos eaque, maiores iste quis id! Maxime voluptas ipsa excepturi quisquam molestiae dolorum.</p>
            <button className='btn btn-primary mt-5 ms-5' onClick={clickNavigate}>Let's go for shopping</button>

          </Col>
          <Col>
           <img height={'600px'} width={'700'} className='ps-5 ms-5' src="https://cdn3d.iconscout.com/3d/premium/thumb/online-shopping-delivery-4049862-3363949.png" alt="" />
          </Col>
          <Col></Col>
       </Row>


       <div>
      <h1 className='text-center mt-5 pt-5 '>Features</h1>
      <div className='d-flex justify-content-around mt-5 mb-5'>

      <Card className='me-5 ms-5 shadow border-secondary' style={{ width: '18rem' }}>
          <Card.Img variant="top" height={'200px'} src="https://i.pinimg.com/originals/6e/0a/23/6e0a236d5cfc8d1c77230f38ce4147b2.gif" />
        <Card.Body>
            <Card.Title style={{color:'green'}}>Manage Product</Card.Title>
          <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='me-5 ms-5 shadow border-secondary' style={{ width: '18rem' }}>
          <Card.Img variant="top" height={'200px'} src="https://cdn.dribbble.com/users/228367/screenshots/5469415/storytelling_assets_2_new_thumbnail.gif" />
        <Card.Body>
            <Card.Title style={{color:'green'}}>Upload Product</Card.Title>
          <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='me-5 ms-5 shadow border-secondary' style={{ width: '18rem' }}>
          <Card.Img variant="top" height={'200px'} src="https://i.pinimg.com/originals/2d/87/48/2d87484d2b20716325320629cfcd6c02.gif" />
        <Card.Body>
            <Card.Title style={{color:'green'}}>Product List</Card.Title>
          <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    </div>


    <div className='border border-success rounded shadow p-5 mx-5 mb-5'>
      <Row>
        <Col>
          <h1>Simple,Fast and Powerfull</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Duis tincidunt malesuada urna. Morbi tincidunt turpis leo, ac commodo nisl pulvinar sit amet. Vivamus ligula libero, molestie eu scelerisque in, aliquet vitae nunc. Integer tincidunt gravida nulla non placerat. Nam finibus ligula vitae erat sollicitudin ultrices vel id nisi. Nulla blandit aliquam dui, ut auctor sapien finibus non. Praesent nec lorem ut lectus suscipit lobortis. Maecenas ac volutpat leo, et molestie nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium augue hendrerit libero consequat, in rhoncus mauris molestie. Integer ultrices lobortis dictum. Suspendisse molestie tempor mi sit amet cursus. Etiam nisi augue, posuere vitae lacinia vitae, tincidunt et ante. Nullam viverra, sem interdum facilisis accumsan, lectus eros viverra elit, pharetra vehicula odio sem vel diam. Quisque quis condimentum ante. Quisque facilisis dolor in tincidunt tempor. Dignissimos nisi nobis error incidunt, accusantium repellat qui repudiandae tempore modi vel quisquam autem nostrum eveniet animi veniam consectetur nihil voluptatibus? Nostrum.</p>
        </Col>
        <Col md='6' className='p-3'>
        <iframe width="610" height="315" src="https://www.youtube.com/embed/dyEbm4GR6Do?si=j5k7_hbE7Tohn77X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Col>
      </Row>
    </div>

    <div className='text-center bg-body-tertiary '>
      <h1>Brands</h1>
      <marquee behavior="alternate" direction="">
      <a  href=""><img width={'200px'} src="https://logolook.net/wp-content/uploads/2021/07/Louis-Vuitton-Logo-1536x864.png" alt="" />
      <img width={'200px'} src="https://logodownload.org/wp-content/uploads/2014/07/puma-logo-1.png" alt="" />
      <img width={'200px'} src="https://printex-inc.com/wp-content/uploads/2015/11/nike-swoosh-logo-png-the-top-10-most-popular-shoe-brands-everyone-is-wearing-top-10-rate-pict.png" alt="" />
      <img width={'200px'} src="https://mdstudeo.com/wp-content/uploads/2021/03/november-mens-clothing-brand.png" alt="" />
      <img width={'200px'} src="https://freepngimg.com/download/adidas/58136-logo-brand-adidas-sports-free-transparent-image-hd.png" alt="" />
      <img width={'200px'} src="https://logos-world.net/wp-content/uploads/2020/12/Estee-Lauder-Logo.png" alt="" />
      <img width={'200px'} src="https://www.prodesigns.com/backend/img/sliders/cosmetics-beauty/1523621179-03.png" alt="" />g
      </a>
      </marquee>
    </div><br /><br />
    
    </div>
  )
}

export default Landing