import React, {Component} from 'react'
import {Navbar, Card, Button, Container, Col, Row } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import Rating from '@mui/material/Rating';
import Content from "../Pages/Content";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class Index extends Component {
    render(){
        return (
           <div class="container mt-5 mb-5">
               <h1 className = "text-center m-4" style = {{marginBottom:"40"}}> News</h1>
    <div class="row d-flex justify-content-center">
        <div class="col-md-8">
            <div class="d-flex flex-row"></div>
            <div class="row news-card p-3 bg-white">
                <div class="col-md-2">
                    <div class="feed-image"><img class="news-feed-image rounded img-fluid img-responsive"  src="/img/Oscars2017.jpg"/></div>
                </div>
                <div class="col-md-8">
                    <div class="news-feed-text">
                        <h5>Oscars 2020 vs. Oscar 2021: What Has Changed?</h5>
                        <span>When comparing the data between Oscars 2020 to Oscars 2021, a lot of differences are revealed. The polarity is significant, from cameras (film, digital, and format), to the budget, crew, principal photography, and post-production. Let’s explore the intriguing data below.


 <br/></span>
                        <div class="d-flex flex-row justify-content-between align-items-center mt-2">
                           
                                
                            </div><i class="fa fa-share share"></i>
                        </div>
                    </div>
                </div>
                 </div>
    </div>
    <div class="row d-flex justify-content-center">
        <div class="col-md-8">
            <div class="d-flex flex-row"></div>
            <div class="row news-card p-3 bg-white">
                <div class="col-md-2">
                    <div class="feed-image"><img class="news-feed-image rounded img-fluid img-responsive" src="/img/MV5BMjEzNDM4YWMtZWE5Ny00MTliLWEzY2ItODU0NmE2ZTUzMDhlXkEyXkFqcGdeQXVyMTE1MzI2NzIz._V1_.jpg"/></div>
                </div>
                <div class="col-md-8">
                    <div class="news-feed-text">
                        <h5>The best movies of 2021, ranked by Tomatometer</h5>
                        <span>Rotten Tomatoes is collecting every new Certified Fresh movie into one list, creating our guide to the best movies of 2021. Among them you’ll find blockbusters (Shang-Chi), documentaries (Lily Topples the World), awards contenders (The Green Knight), the cutting-edge in horror (The Night House).<br/></span>
                        <div class="d-flex flex-row justify-content-between align-items-center mt-2">
                           
                                
                            </div><i class="fa fa-share share"></i>
                        </div>
                    </div>
                </div>
                 </div>
    </div>
    
    <div class="row d-flex justify-content-center">
        <div class="col-md-8">
            <div class="d-flex flex-row"></div>
            <div class="row news-card p-3 bg-white">
                <div class="col-md-2">
                    <div class="feed-image"><img class="news-feed-image rounded img-fluid img-responsive" src="/img/9781787332003.jpg"/></div>
                </div>
                <div class="col-md-8">
                    <div class="news-feed-text">
                        <h5>The 10 Best Books of 2021 - New York Times</h5>
                        <span>Editors at The Times Book Review choose the best fiction and nonfiction titles this year.<br/></span>
                        <div class="d-flex flex-row justify-content-between align-items-center mt-2">
                           
                                
                            </div><i class="fa fa-share share"></i>
                        </div>
                    </div>
                </div>
                 </div>
    </div>
    
    
                    </div>
               
        )
    }
}