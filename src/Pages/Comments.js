import React, {Component, useState, useEffect} from "react";
import { Nav, Navbar, FormControl, Container, Form, Button, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import Rating from '@mui/material/Rating';
import Content from "../Pages/Content"; 
export default Comments;

function Comments (props) {
    const [comments, setComments] = useState([]);
              var id = 0;
              useEffect(() => {
                fetchItemsComments();
              }, [])
             
              const fetchItemsComments = () => {
                fetch('https://https://user-3b202-default-rtdb.europe-west1.firebasedatabase.app/Comments/.json')
                .then(response => response.json())
                .then(data => addKeysComments(Object.values(data)))
                .then(data => setComments(Object.values(data)))
                .catch(err => console.error(err))
                
              }
              
              console.log(comments)
            
              const addKeysComments = (data) => {
                const keys = Object.keys(data);
                const valueKeys = Object.values(data).map((item, index) => 
                Object.defineProperty(item, 'id', {value: keys[index]}));
                setComments(valueKeys);
              }
        
              function CommentsList (comments){
                  let i = 0;
                  
                  let n = comments.length;
                  console.log (n);
                  var rows = [];
                        for (i = 0; i<n; i++){
                            var moviestr = rows[i].movieid
                            var movieid = 1*moviestr
                            if(movieid==id){
                            rows.push(<div class="coment-bottom bg-white p-2 px-4">
                            
            
                            <div class="commented-section mt-2">
                                <div class="d-flex flex-row align-items-center commented-user">
                                    <h5 class="mr-2">{rows[i].userid}</h5>
                                </div>
                                <div class="comment-text-sm"><span>{rows[i].comment}</span></div>
                                <div class="reply-section">
                                    
                                        <h6 class="ml-2 mt-1">Reply</h6>
                                    </div>
                                </div>
                            </div>
                            
                               
                    
                            );
                            }
                           
                       
                        
                    
                      
                       }
                       return <div className="container col-xxl-8 px-4 py-5">{rows}</div>;
                       
                    }
    
        return (
            <>
            {CommentsList(comments)}
            
                
                

</>)}