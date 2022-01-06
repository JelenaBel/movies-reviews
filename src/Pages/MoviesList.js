import React, {Component,  useState, useEffect, useProps} from 'react'
import {Navbar, Card, Button, Container, Col, Row, Tab, Nav } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import Rating from '@mui/material/Rating';


export default MoviesList;

function MoviesList (props){
    
    
    console.log("It is movie list")
    console.log(props)
    
   

        
        return (
    <div class="col-container" style={{ display: "table" }}>
    <Col xs style={{ display: "table-cell" }}>

    
        <Card style={{ width: '70%', marginBottom: "20px" }} inlineBlock="true">

            <Card.Img variant="top" src="/img/32931.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>


                <Rating style={{ marginBottom: '20px' }}
                    name="size-large" defaultValue={2} size="large" />


                <Navbar.Text inlineblock='true'>
                    <a href="/Content" style={{ textAlign: 'center', whiteSpace: 'nowrap', textDecoration: 'none', color: 'white', paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px', paddingBottom: '10px', marginleft: "30px", marginTop: "20px", background: 'blue' }}
                    >Read more</a>
                </Navbar.Text>



            </Card.Body>
        </Card>
    </Col>
</div>
)}