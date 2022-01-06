import React, {Component, useState, useEffect} from "react";
import { Nav, Navbar, FormControl, Container, Form, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import Comments from "../Pages/Comments"
import Rating from '@mui/material/Rating';
export default Content;

function Content () {
    const queryString = window.location.search;
    console.log (queryString)
    var idst = queryString.substring(6, );
    var id= 1*idst;
    console.log (id);
    
  
    const [movies, setMovies] = useState([]);
      useEffect(() => {
        fetchItems()
      }, [])
     
      const fetchItems = () => {
        fetch('https://bookstore-e94f1-default-rtdb.firebaseio.com/Movies/.json')
        .then(response => response.json())
        .then(data => addKeys(Object.values(data)))
        .then(data => setMovies(Object.values(data)))
        .catch(err => console.error(err))
        
      }
      
      console.log(movies)
    
      const addKeys = (data) => {
        const keys = Object.keys(data);
        const valueKeys = Object.values(data).map((item, index) => 
        Object.defineProperty(item, 'id', {value: keys[index]}));
        setMovies(valueKeys);
      }

      function MoviesList (movies){
          let i = 0;
          let n = movies.length;
          console.log (n);
          var rows = [];
                for (i = 0; i<n; i++){
                    if(i==id){
                    rows.push(<div className="row flex-lg-row align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                      <Image src={"/img/" + movies[i].image} className="d-block mx-lg-auto img-fluid"  alt="Bootstrap Themes" width="300" height="270" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                      <h1 className="display-5 fw-bold lh-1 mb-3" variant="top">{movies[i].name}</h1>
                      <p className="lead"> {movies[i].category}</p>
                                            <Rating 
                            name="customized-10" style={{ marginBottom: '20px' }} defaultValue={movies[i].imbdrating} size="small"  max={10} />
         <p className="lead"> IMDB Rating:  {movies[i].imbdrating}</p>
                      <p >{movies[i].shortdescription}</p>
                      <br></br>
                     
                      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                       
              
                      </div>
                    </div>
                  </div>
                
                    );
                    }
                   
               
                
            
              
               }
               return <div className="container col-xxl-8 px-4 pt-5">{rows}</div>;
               
            }

            const [comment, setComment] = useState({comment: '',  movieid:'', userid: ''});
            const [comText, setComText] = useState({comText: ''});
            
            const handleSave = () => {
        
               addComment(comment);
               console.log (comment);
               
              }
              
              
              const inputChanged = (event) => {
                
                var newcom = event.target.value;
                console.log (newcom);
               
                setComment({comment: newcom, movieid : id, userid: 'Elena'});
              }
             
              const addComment = (newComment) => {
                console.log ("Trying to add fucking comment");
                fetch('https://user-3b202-default-rtdb.europe-west1.firebasedatabase.app/Comments/.json',
                {
                  method: 'POST',
                  body: JSON.stringify(newComment)
                })
                
                .catch(err => console.error(err))
              }
              
    
        return (
            <>
            {MoviesList(movies)}
            
          <div className="container">
    <div className="d-flex justify-content-center row">
        <div className="d-flex flex-column col-md-8">
            
                
                    <h1> Reviews</h1>
                    <hr></hr>
                    <div className="d-flex flex-row align-items-center align-content-center post-title">

                               <h4>Write your review</h4>
                               <br></br>
                              
                        </div>
                        
                        <br></br>
                        
                        <textarea rows = "6" style = {{width:'100%'}} name ="comment" id = "floatingComment" className="form-control mr-3"  style ={{width: '80%'}} placeholder="Write review here..." onChange = {inputChanged} target = "blanc"/>
                        <br/>
                        <button className="btn btn-secondary"  style = {{width:'50%'}}  type="button" onClick = {handleSave}>Publish</button></div>
              
                
            
           
            </div>
            </div>

    <Comments> </Comments>
       </>
            
        )
    }

