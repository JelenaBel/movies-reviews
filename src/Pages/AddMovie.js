import React, {Component, useState, useEffect} from 'react'
import { Form, Button,  Container} from "react-bootstrap";
import { render } from 'react-dom';
export default AddMovie;

  
    function AddMovie (props){
    const [movie, setMovie] = useState({category: '', image: '',imbdrating: '', name: '', shortdescription: ''});
    const handleSave = () => {

       addMovie(movie);
       console.log (movie);
       
      }
      

      const inputChanged = (event) => {
        setMovie({...movie, [event.target.name]: event.target.value});
      }
     
      const addMovie = (newMovie) => {
        console.log ("Trying to add Book");
        fetch('https://bookstore-e94f1-default-rtdb.firebaseio.com/Movies/.json',
        {
          method: 'POST',
          body: JSON.stringify(newMovie)
        })
        
        .catch(err => console.error(err))
      }
       
        return (
             <div>
                  <br></br>
                  <br></br>
                 <h1 className = "text-center">Add movie</h1>
                 <br></br><div className="container col-xxl-8 px-4 py-5">
                
                 <Container>
                 <Form className="p-4 p-md-5 border rounded-3 bg-light"  >
              <div className="form-floating mb-3">
            <input type="name" className="form-control" id="floatingName" name="name" value={movie.name}   onChange={inputChanged} placeholder="Movie name"/>
            <label for="floatingName">Movie name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="category" className="form-control" id="floatingCategory" value={movie.category}  onChange={inputChanged} name="category" placeholder="Category"/>
            <label for="floatingCategory">Category</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingImage" value={movie.image}  onChange={inputChanged} name="image" placeholder="Image name"/>
            <label for="floatingImage">Picture name</label>
          </div>
         
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingShortdescription" value={movie.shortdescription}  onChange={inputChanged} name="shortdescription" placeholder="Short description"/>
            <label for="floatingShortdescription">Short description</label>
          </div>
                   
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingImbdrating" value={movie.imbdrating}  onChange={inputChanged} name="imbdrating" placeholder="Short description"/>
            <label for="floatingImbdrating">Imbd Rating</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSave}>Add</button>
          <hr className="my-4"></hr>
          <small className="text-muted">Pleace remember to copy image to "movies-reviews/public/img" folder on admin computer</small>
          

        </Form>
        
</Container>
    
             </div>
             </div>
        )
    }

    