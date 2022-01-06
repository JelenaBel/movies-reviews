import React, {Component} from "react";
import { Form, Button, Container} from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class Contacts extends Component {
    render(){
        return (
        <>

                       
            <div class="container col-xxl-8 px-4 py-5">
    <div className="row align-items-top g-lg-5 py-5">
      <div className="col-lg-6">
      <h2 className = "text-left m-4" style = {{marginBottom:"40"}}>Contacts</h2>

        <p className="lead">Puh: +358401234567</p>
        <p className="lead">Customer support: +358409876543</p>
        <p className="lead">e-mail: simple.catering@gmail.com</p>
        <br></br>
        <p className="lead">Aleksanterinkatu 81, 2 b, Helsinki 00100</p>

        <p className="lead">Simple Catering Oy</p>
        <p className="col-lg-10 fs-4"><Image className="rounded mx-auto d-block" style ={{width: "100%"}}  alt="..."  src = "/img/Directing-clapperboard-crop.jpg"></Image>
            </p>
        <br></br>
      </div>

      
      
      
    
      <div class="col-md-10 mx-auto col-lg-5">
      <h2 className = "text-flex-start m-4" style = {{marginBottom:"40"}}> Feedback</h2>
      <Form className ="p-4 p-md-5 border rounded-3 bg-light" >
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label >Your Name</Form.Label>
    <Form.Control type="name" placeholder="Your name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Subject</Form.Label>
    <Form.Control type="subject" placeholder="" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Your message

    </Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <button class="w-100 btn btn-lg btn-primary" type="submit">Send feedback</button>
</Form>
          
          
          

      
     
                </div>
    </div>
  </div>
  
  
                </>
        )
    }
}