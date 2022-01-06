import React, {Component, useState, useEffect} from 'react'
import { Form, Button,  Container} from "react-bootstrap";
import { render } from 'react-dom';
export default Registration;

  
    function Registration (props){
    const [user, setUser] = useState({email: '', name: '',  password: ''});
    const handleSave = () => {

       addUser(user);
       console.log (user);
       
      }
      

      const inputChanged = (event) => {
        setUser({...user, [event.target.name]: event.target.value});
      }
     
      const addUser = (newUser) => {
        console.log ("Trying to add User");
        fetch('https://user-98708-default-rtdb.europe-west1.firebasedatabase.app/Users/.json',
        {
          method: 'POST',
          body: JSON.stringify(newUser)
        })
        
        .catch(err => console.error(err))
      }
       


   
        return (
       <>
           <div className="App">
           <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-md-10 mx-auto col-lg-5">

              <Form class="p-4 p-md-5 border rounded-3 bg-light"  >
              <div class="form-floating mb-3">
            <input type="name" class="form-control" id="floatingName" name="name" placeholder="Your name" onChange={inputChanged}/>
            <label for="floatingEmail">Your name</label>
          </div>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingEmail" name="email" placeholder="name@example.com" onChange={inputChanged}/>
            <label for="floatingEmail">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingPassword" name="password" placeholder="Password" onChange={inputChanged}/>
            <label for="floatingPassword">Password</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingRepeatPassword" name="repeatpassword" placeholder="Repeat password"/>
            <label for="floatingPassword">Repeat password</label>
          </div>
          
          <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSave}>Register</button>
          <hr class="my-4"></hr>
          <small class="text-muted">By clicking Register, you agree to the terms of use.</small>
         

        </Form>
    
        </div>
      <div class="col-lg-6">
      <h1 className = "text-center m-4" style = {{marginBottom:"40"}}> Registration</h1>
        <p  style ={{fontSize:"20px"}}>Our rules for posting comments in our webpage:</p>
        <p  style ={{fontSize:"20px"}}> - you are entitled to post or upload the Material on the website and have all necessary licenses and consents to do so</p>
        <p  style ={{fontSize:"20px"}}> - the Material does not infringe any intellectual property right, including without limitation copyright, patent or trademark, or other proprietary right of any third party;</p>
        <p  style ={{fontSize:"20px"}}> - the Material does not contain any defamatory, libellous, offensive, indecent or otherwise unlawful material or material which is an invasion of privacy.</p>
        

        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
       

        </div>
      </div>
    </div>
  </div>
  </div>

     </>





            
        )
    }
