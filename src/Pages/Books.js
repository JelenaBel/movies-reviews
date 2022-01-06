
import React, {Component} from 'react'
import {Navbar, Card, Button, Container, Col, Row, Tab, Nav } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import Rating from '@mui/material/Rating';
import Content from "../Pages/Content";
import Signin from "../Pages/Signin";
import Registration from "../Pages/Registration";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { TopicOutlined } from '@mui/icons-material';
export default class Books extends Component {
    render(){
        return (
            <div>
              
            <Container  >
                <Nav>
            <Navbar.Text inlineblock ='true'>
        <a href="/Content" style={{textAlign: 'center', whiteSpace: 'nowrap', textDecoration:'none', color:'black', paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px', paddingBottom: '10px', marginleft: "30px", marginTop:"20px", background: 'white'}}
        >All</a>
      </Navbar.Text>
      <Navbar.Text inlineblock ='true'>
        <a href="/Content" style={{textAlign: 'center', whiteSpace: 'nowrap', textDecoration:'none', color:'black', paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px', paddingBottom: '10px', marginleft: "30px", marginTop:"20px", background: 'white'}}
        >TOP</a>
      </Navbar.Text>
      <Navbar.Text inlineblock ='true'>
        <a href="/Content" style={{textAlign: 'center', whiteSpace: 'nowrap', textDecoration:'none', color:'black', paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px', paddingBottom: '10px', marginleft: "30px", marginTop:"20px", background: 'white'}}
        >Drama</a>
      </Navbar.Text>
      <Navbar.Text inlineblock ='true'>
        <a href="/Content" style={{textAlign: 'center', whiteSpace: 'nowrap', textDecoration:'none', color:'black', paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px', paddingBottom: '10px', marginleft: "30px", marginTop:"20px", background: 'white'}}
        >Crime</a>
      </Navbar.Text>
      <Navbar.Text inlineblock ='true'>
        <a href="/Content" style={{textAlign: 'center', whiteSpace: 'nowrap', textDecoration:'none', color:'black', paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px', paddingBottom: '10px', marginleft: "30px", marginTop:"20px", background: 'white'}}
        >Science Fiction</a>
      </Navbar.Text>
      <Navbar.Text inlineblock ='true'>
        <a href="/Content" style={{textAlign: 'center', whiteSpace: 'nowrap', textDecoration:'none', color:'black', paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px', paddingBottom: '10px', marginleft: "30px", marginTop:"20px", background: 'white'}}
        >Comedy</a>
      </Navbar.Text>
      <Navbar.Text inlineblock ='true'>
        <a href="/Content" style={{textAlign: 'center', whiteSpace: 'nowrap', textDecoration:'none', color:'black', paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px', paddingBottom: '10px', marginleft: "30px", marginTop:"20px", background: 'white'}}
        >Classic</a>
      </Navbar.Text>
      </Nav>
                
            
            <h1 className = "text-center m-4" style = {{marginBottom:"40"}}> Movies</h1>
           
             <Row md={4} className = "m-12 mb-12">
             <div class="col-container" style = {{display: "table"}} >
             <Col xs style = {{display: "table-cell"}} >
            

            <Card style={{ width: '14rem', marginBottom:"20px" }} inlineBlock = "true" >
  <Card.Img variant="top"  src="/img/posteryi-luchshih-filmov-poluchivshih-oskar_1.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
    
<Rating style={{marginBottom: '20px'}} 
 name="size-large" defaultValue={2} size="large" 
  
/>

   
<Navbar.Text inlineblock ='true'>
        <a href="/Content" style={{textAlign: 'center', whiteSpace: 'nowrap', textDecoration:'none', color:'white', paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px', paddingBottom: '10px', marginleft: "30px", marginTop:"20px", background: 'blue'}}
        >Read more</a>
      </Navbar.Text>
   

 
  </Card.Body>
</Card>
</Col>
</div>
    

<div class="col-container" style = {{display: "table"}} >
             <Col xs style = {{display: "table-cell"}} >
            

            <Card style={{ width: '14rem', marginBottom:"20px" }} inlineBlock = "true" >
 
  <Card.Img variant="top"  src="/img/2c5e94e1a90b21809a4c779d9e06d03b.png" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
    
<Rating style={{marginBottom: '20px'}} 
 name="size-large" defaultValue={2} size="large" 
  
/>

   
<Navbar.Text inlineblock ='true'>
        <a href="/Content" style={{textAlign: 'center', whiteSpace: 'nowrap', textDecoration:'none', color:'white', paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px', paddingBottom: '10px', marginleft: "30px", marginTop:"20px", background: 'blue'}}
        >Read more</a>
      </Navbar.Text>
   

 
  </Card.Body>
</Card>
</Col>
</div>
<div class="col-container" style = {{display: "table"}} >
             <Col xs style = {{display: "table-cell"}} >
            

            
  <Card style={{ width: '14rem', marginBottom:"20px" }} inlineBlock = "true" >
  <Card.Img variant="top"  src="/img/80f0fcba3c101942e55b738c8976b436.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
    
<Rating style={{marginBottom: '20px'}} 
 name="size-large" defaultValue={2} size="large" 
  
/>

   
<Navbar.Text inlineblock ='true'>
        <a href="/Content" style={{textAlign: 'center', whiteSpace: 'nowrap', textDecoration:'none', color:'white', paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px', paddingBottom: '10px', marginleft: "30px", marginTop:"20px", background: 'blue'}}
        >Read more</a>
      </Navbar.Text>
   

 
  </Card.Body>
</Card>
</Col>
</div>

             <Col xs >
            <Card style={{ width: '14rem', marginBottom:"20px" }} inlineBlock = "true" >
  <Card.Img variant="top"  src="/img/posteryi-luchshih-filmov-poluchivshih-oskar_1.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
    
<Rating style={{marginBottom: '20px'}} 
 name="size-large" defaultValue={2} size="large" 
  
/>

   
<Navbar.Text inlineblock ='true'>
        <a href="/Content" style={{textAlign: 'center', whiteSpace: 'nowrap', textDecoration:'none', color:'white', paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px', paddingBottom: '10px', marginleft: "30px", marginTop:"20px", background: 'blue'}}
        >Read more</a>
      </Navbar.Text>
   

 
  </Card.Body>
</Card>
</Col>
<Col xs>
            

            
  <Card style={{ width: '14rem' , marginBottom:"20px"}} inlineBlock = "true" >
  <Card.Img variant="top"  src="/img/posteryi-luchshih-filmov-poluchivshih-oskar_1.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
    
<Rating style={{marginBottom: '20px'}} 
 name="size-large" defaultValue={2} size="large" 
  
/>

   
<Navbar.Text inlineblock ='true'>
        <a href="/Content" style={{textAlign: 'center', whiteSpace: 'nowrap', textDecoration:'none', color:'white', paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px', paddingBottom: '10px', marginleft: "30px", marginTop:"20px", background: 'blue'}}
        >Read more</a>
      </Navbar.Text>
   

 
  </Card.Body>
</Card>
</Col>

             <Col xs>
            

           
  <Card style={{ width: '14rem', marginBottom:"20px" }} inlineBlock = "true" >
  <Card.Img variant="top"  src="/img/2c5e94e1a90b21809a4c779d9e06d03b.png" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
    
<Rating style={{marginBottom: '20px'}} 
 name="size-large" defaultValue={2} size="large" 
  
/>

   
<Navbar.Text inlineblock ='true'>
        <a href="/Content" style={{textAlign: 'center', whiteSpace: 'nowrap', textDecoration:'none', color:'white', paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px', paddingBottom: '10px', marginleft: "30px", marginTop:"20px", background: 'blue'}}
        >Read more</a>
      </Navbar.Text>
   

 
  </Card.Body>
</Card>
</Col>
<Col xs>
            

           
  <Card style={{ width: '14rem', marginBottom:"20px" }} inlineBlock = "true" >
  <Card.Img variant="top"  src="/img/80f0fcba3c101942e55b738c8976b436.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
    
<Rating style={{marginBottom: '20px'}} 
 name="size-large" defaultValue={2} size="large" 
  
/>

   
<Navbar.Text inlineblock ='true'>
        <a href="/Content" style={{textAlign: 'center', whiteSpace: 'nowrap', textDecoration:'none', color:'white', paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px', paddingBottom: '10px', marginleft: "30px", marginTop:"20px", background: 'blue'}}
        >Read more</a>
      </Navbar.Text>
   

 
  </Card.Body>
</Card>
</Col>

             <Col xs>
            

        
  <Card style={{ width: '14rem' }} inlineBlock = "true" >
  <Card.Img variant="top"  src="/img/tild6136-3135-4663-a238-643834626231__3b0b7c19e912d184617a.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
    
<Rating style={{marginBottom: '20px'}} 
 name="size-large" defaultValue={2} size="large" 
  
/>

   
<Navbar.Text inlineblock ='true'>
        <a href="/Content" style={{textAlign: 'center', whiteSpace: 'nowrap', textDecoration:'none', color:'white', paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px', paddingBottom: '10px', marginleft: "30px", marginTop:"20px", background: 'blue'}}
        >Read more</a>
      </Navbar.Text>
   

 
  </Card.Body>
</Card>
</Col>
</Row>
</Container>
<Router>
<Switch>

    
    <Route exact path = "/Content" component = {Content}/>

    
</Switch>

        </Router>

           </div>
        )
    }
}