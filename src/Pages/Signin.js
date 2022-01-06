import React, {Component} from "react";
import { Form, Button, Container} from "react-bootstrap";
import {Navbar, Card, Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import Registration from "../Pages/Registration";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import StarsIcon from '@mui/icons-material/Stars';

export default class Signin extends Component {
    render(){
        return (
       <>
          
           <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-top g-5 py-5">
      <div class="col-md-10 mx-auto col-lg-5">
      <br/><br/><br/><br/><br/>
        <Form class="p-4 p-md-5 border rounded-3 bg-light"  >
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingEmail" name="email" placeholder="name@example.com"/>
            <label for="floatingEmail">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingPassword" name="password" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
          </div>
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
          <hr class="my-4"></hr>
          <small class="text-muted">By clicking Sign up, you agree to the terms of use.</small>
          <br></br>
          <small class="text-muted">Don't have an account?</small> <Navbar.Text inlineblock ='true'>
        <a href="/Register" 
        >Register here</a>
      </Navbar.Text>
        </Form>
      </div>

      <div class="col-lg-6">
      <h1 className = "text-center m-4" style = {{marginBottom:"40"}}> Sign-in</h1>
        <br/>
        <br/>
        <p style ={{fontSize:"20px"}}>By signing in you will be able to post movies and books reviews, comment others reviews. </p>
        <br/>
        <p  style ={{fontSize:"20px"}}>30 and more reviews  -  will get you Experinced Reviewer badge.</p>
        <p  style ={{fontSize:"20px"}}>50 and more reviews  - will get you Top Reviewer badge. </p>
        <p style ={{fontSize:"20px"}}>   Top reviews posts will be posted in first lines among other Top reviewers. </p>

        
        <p class="col-lg-10 fs-4"><Image className="rounded mx-auto d-block" style ={{width: "100%"}}  alt="..."  src = "/static/ten_percent_off.jpg"></Image>
            </p>

        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
       

        </div>
      </div>
    </div>
  </div>
  <Router>
<Switch>

    
    <Route exact path = "/Register" component = {Registration}/>

    
</Switch>

        </Router>

     </>





            
        )
    }
}