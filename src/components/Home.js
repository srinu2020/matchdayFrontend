 
import { Box, Card, CardContent, Container, Paper, Typography } from '@mui/material'
import {Route,Link,Router} from 'react-router-dom'
import '../App.css';
import React from 'react'

 

 
 
const Home = () => {
  return (
     <>
     <Paper sx={{height:60,width:1,display:'flex',alignItems:'center',justifyContent:'center',flexWrap:'wrap'}} elevation={3}><Typography variant='h4'>View Analytics</Typography></Paper>
       
       <Container >
       <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',flexWrap:'wrap','& >:not(style)':{
             m:7,
             width:300,
             height:200,
             backgroundColor:'rgb(240,250,249)',
             borderRadius:1,
             '&:hover':{
                 backgroundColor:'rgb(229, 227, 255)',
                 
             }
         },}}>
<Link  to="/Shot" underline='none' color="black" sx={{display:'flex',justifyContent:'center',alignItems:'center'}}><Typography  variant='h5'  >Analyse by shot Type</Typography></Link>
<Link  to="/compare" underline='none' color="black" sx={{display:'flex',justifyContent:'center',alignItems:'center'}}><Typography  variant='h5'>Analyse by shot Type</Typography></Link>
<Link  to="/analyse" underline='none' color="black" sx={{display:'flex',justifyContent:'center',alignItems:'center'}}><Typography  variant='h5'>Analyse by shot Type</Typography></Link>
         </Box>
       </Container>
        
     </>
  )
}

export default Home
 