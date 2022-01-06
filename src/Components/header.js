import React, {Component} from 'react';
import { Nav, Navbar, FormControl, Container, Form, Button } from 'react-bootstrap';
import logo from './png-transparent-movie-reel-illustration-film-clapperboard-cinematic-techniques-clapperboard-film-film-elements-monochrome-photographic-film-design-element-thumbnail.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Index from "../Pages/Index";
import Movies from "../Pages/Movies";
import Books from "../Pages/Books";
import Signin from "../Pages/Signin";
import Contacts from "../Pages/Contacts";
import Content from "../Pages/Content";
import Registration from "../Pages/Registration";
import AddMovie from "../Pages/AddMovie";



export default class Header extends Component{
    render(){
    return (
    <div>
        <Navbar collapseOnSelect expand ="md" bg ="dark" variant="dark">
            <Container >
                <Navbar.Brand  href ='/'>
                    <img 
                    src={logo}
                    height = '60'
                    
                        className = 'd-inline-block align-top'
                        alt ='Logo'
                        >
                    </img>
                    

                  
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id ="responsive-navbar-nav">
                <Nav className ="me-auto my-2 my-lg-0">
                    <Nav.Link style={{whiteSpace:"nowrap"}} href ="/">Main</Nav.Link>
                    <Nav.Link style={{whiteSpace:"nowrap"}} href ="/Movies">Movies</Nav.Link>
               
                    <Nav.Link  style={{whiteSpace:"nowrap"}} href ="/Signin">Sing In</Nav.Link>
                    <Nav.Link style={{whiteSpace:"nowrap"}} href ="/Contacts">Contacts</Nav.Link>
                    <Nav.Link style={{whiteSpace:"nowrap"}} href ="/AddMovie">Add Movie</Nav.Link>



                </Nav>
                
                <Form>
                  
                    <FormControl  
                    type = "text"
                    placeholder="Search"
                    className = "mr-md-2"
                    inlineblock = "true"
                    />
                  
                  
                    </Form>
                    <Button  
                     variant = "outline-info" style ={{marginLeft: '20px'}}>Search</Button>
                    
                </Navbar.Collapse>

            </Container>
        </Navbar>

        <Router>
<Switch>

    <Route exact path = "/" component = {Index}/>
    <Route exact path = "/Movies" component = {Movies}/>
    <Route exact path = "/Books" component = {Books}/>
    <Route exact path = "/Signin" component = {Signin}/>
    <Route exact path = "/Contacts" component = {Contacts}/>
    <Route exact path = "/Content" component = {Content}/>
    <Route exact path = "/Register" component = {Registration}/>
    <Route exact path = "/AddMovie" component = {AddMovie}/>
    
</Switch>

        </Router>
        
        <footer class="container pt-4 my-md-5 pt-md-5 border-top">
    <div class="row">
      <div class="col-12 col-md">
        <img  src = "/static/download.png" height="100px" alt=""/>
        <small class="d-block mb-3 text-muted">© 2020–2021</small>
      </div>
      <div class="col-6 col-md">
        <h5>About us</h5>
        <ul class="list-unstyled text-small">
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Our mission</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Services</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Our team</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Our policy</a></li>
          </ul>
      </div>
      <div class="col-6 col-md">
        <h5>Our experience</h5>
        <ul class="list-unstyled text-small">
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Private events catering</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Corporate events</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Our customers</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Reviews</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>Contact</h5>
        <ul class="list-unstyled text-small">
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Contact us</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Feedback</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Careers</a></li>

        </ul>
      </div>
    </div>
  </footer>
        </div>
    )
    }
}