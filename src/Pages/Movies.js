
import React, {Component,  useState, useEffect} from 'react'
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

export default Movies;



function Movies (){
    const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchItems();
  }, [])
  console.log ("firsdt");
  console.log (movies);

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
                rows.push(
               
           
            <div class="col-container" >
            <Col xs >
        
            
                <Card style={{ width: '80%', marginBottom: "20px" }} inlineBlock="true">
        
                    <Card.Img variant="top" src={"/img/" + movies[i].image} />
                    <Card.Body>
                    <Card.Title>{movies[i].name}</Card.Title>
                    <Card.Text>{movies[i].category}</Card.Text>  
                                
                        <Rating 
                            name="customized-10" style={{ marginBottom: '20px' }} defaultValue={movies[i].imbdrating} size="small"  max={10} />
        
        
                        <Navbar.Text inlineblock='true'>
                            <a href={"/Content?movie"+ movies[i].id} style={{ textAlign: 'center', whiteSpace: 'nowrap', textDecoration: 'none', color: 'white', paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px', paddingBottom: '10px', marginleft: "30px", marginTop: "20px", background: 'blue' }}
                            >Read more</a>
                        </Navbar.Text>
        
        
        
                    </Card.Body>
                </Card>
            </Col>
        </div>);
        
        
          
           }
           return <Row md={4} className="m-12 mb-12" >{rows}</Row>;
           
           
        }
    
  
 
        return (
            <div>

                <Container>
                    <Nav>
                        <Navbar.Text inlineblock='true'>
                            <a href="/Content" style={{ textAlign: 'center', whiteSpace: 'nowrap', textDecoration: 'none', color: 'black', paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px', paddingBottom: '10px', marginleft: "30px", marginTop: "20px", background: 'white' }}
                            >All</a>
                        </Navbar.Text>
                        <Navbar.Text inlineblock='true'>
                            <a href="/Content" style={{ textAlign: 'center', whiteSpace: 'nowrap', textDecoration: 'none', color: 'black', paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px', paddingBottom: '10px', marginleft: "30px", marginTop: "20px", background: 'white' }}
                            >TOP</a>
                        </Navbar.Text>
                        <Navbar.Text inlineblock='true'>
                            <a href="/Content" style={{ textAlign: 'center', whiteSpace: 'nowrap', textDecoration: 'none', color: 'black', paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px', paddingBottom: '10px', marginleft: "30px", marginTop: "20px", background: 'white' }}
                            >Drama</a>
                        </Navbar.Text>
                        <Navbar.Text inlineblock='true'>
                            <a href="/Content" style={{ textAlign: 'center', whiteSpace: 'nowrap', textDecoration: 'none', color: 'black', paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px', paddingBottom: '10px', marginleft: "30px", marginTop: "20px", background: 'white' }}
                            >Crime</a>
                        </Navbar.Text>
                        <Navbar.Text inlineblock='true'>
                            <a href="/Content" style={{ textAlign: 'center', whiteSpace: 'nowrap', textDecoration: 'none', color: 'black', paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px', paddingBottom: '10px', marginleft: "30px", marginTop: "20px", background: 'white' }}
                            >Science Fiction</a>
                        </Navbar.Text>
                        <Navbar.Text inlineblock='true'>
                            <a href="/Content" style={{ textAlign: 'center', whiteSpace: 'nowrap', textDecoration: 'none', color: 'black', paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px', paddingBottom: '10px', marginleft: "30px", marginTop: "20px", background: 'white' }}
                            >Comedy</a>
                        </Navbar.Text>
                        <Navbar.Text inlineblock='true'>
                            <a href="/Content" style={{ textAlign: 'center', whiteSpace: 'nowrap', textDecoration: 'none', color: 'black', paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px', paddingBottom: '10px', marginleft: "30px", marginTop: "20px", background: 'white' }}
                            >Classic</a>
                        </Navbar.Text>
                    </Nav>


                    <h1 className="text-center m-4" style={{ marginBottom: "40" }}> Movies</h1>
                    
                    

                    
                    {MoviesList(movies)}
                       
                   
                 
            
           <Router>
                    <Switch>


                        <Route exact path="/Content" component={Content} />


                    </Switch>

                </Router>
        
</Container>
           </div>
        )
    }
