import React,{useState} from 'react'
import {Paper,Typography,Link,Container, MenuItem,Box,Select,FormControl,Button} from "@mui/material"
import { makeStyles } from '@mui/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const useStyles = makeStyles(theme=>({
  btn1:{
    borderRadius:1,
    width:'20rem',
    height:'3.5rem',
    fontSize:'2rem',
    backgroundColor:'backgroundColor:',
    '&:hover': {
      backgroundColor: 'rgb(8, 117, 48)',
      color:'white'
     
    }
    
  }}
 

))
const Name=[
  {
    id:1,
    name:'Lokesh',
  },
  {
    id:2,
    name:'Guru',

  },
  {
    id:3,
    name:'srinivas'
  }
]
const Gamename=[{
  id:1,
  name:'overview'
},{
  id:2,
  name:'Game 1'
},
{
id:3,
name:'Game 2'
},{
id:4,
name:'Game 3'
} ]

const  Analyse = () => {
   
   const [name, setname] = useState('Lokesh')
   const [Game, setGame] = useState('Smash')
   const handleChange = (event) => {
    setname(event.target.value);
  };
  const Handelchange=(event)=>{
    setGame(event.target.value)
  }
   
  
  return (
   <>
        <Paper sx={{height:60,width:1,display:'flex',alignItems:'center',justifyContent:'center',flexWrap:'wrap'}} elevation={3}> <ArrowForwardIosIcon fontSize="inherit"/> <Typography variant='h4'>Analyse by Rally Length</Typography></Paper>
       

        <Container maxWidth="sm"  >
        <div className='mt-2  d-flex  '>  
       <Link href="#" underline='none' color='rgb(155, 158, 158)' ><Typography variant='h6'>My Matches  <ArrowForwardIosIcon fontSize="inherit"/></Typography></Link>
       
       <Link href="#" underline='none' color='rgb(155, 158, 158)' ><Typography variant='h6'>Matches <ArrowForwardIosIcon fontSize="inherit"/></Typography></Link>
       
       <Link href="#" underline='none' color='blue'><Typography variant='h6'>Basic Analysis </Typography></Link>
       </div>
        
      
       
   <div className='d-flex justify-content-between mt-5'>
  
    <Box  sx={{minWidth:120}} >
    
         <Typography sx={{m:1}}>Player</Typography>
      <FormControl fullWidth variant='filled' sx={{backgroundColor:'#FFEFD6',borderRadius:2}}>
   
        <Select
          
          value={name}
          
           
          onChange={handleChange}
        >
        {Name.map((val)=><MenuItem value={val.id}>{val.name}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
    <Box  sx={{minWidth:120}} >
         <Typography sx={{my:1,}}>Game</Typography>
      <FormControl  fullWidth variant='filled'   sx={{backgroundColor:'#FFEFD6',borderRadius:2}}>
   
        <Select
          
          value={Game}
          
          
          onChange={Handelchange}
        >
        {Gamename.map((val)=><MenuItem selected value={val.id}>{val.name}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>

   </div>
   <div className='d-flex flex-column mb-3'>
     <Typography  className='fs-5' sx={{my:1}}> <span className='fw-bold'>Lokesh</span> <span className='text-secondary'>v/s</span> <span className='text-secondary'>guru</span></Typography>
     <Typography className='fs-5'>Olympics Tokyo</Typography>
    <div className='d-flex flex-column justify-content-center align-items-center'>
    <img src=" https://matchday.ai/static/media/Smash.fc6ce67b.svg" alt="reloading" height={100} width={250}/>
        <img src="https://matchday.ai/static/media/Straight.e162780b.svg" alt="reloding" height={60} width={200}/>
    </div>
     
      
      </div>
      <div className='w-100 d-flex align-items-center' style={{backgroundColor:'#EBEFF9',height:46}}>
        <Typography variant='h6' className=' mx-4 '>Table view</Typography>
      </div>
      <table className="table table-bordered  table-striped table-responsive" sx={{mb:6}}>
      <thead   style={{height:50,}}>
    <tr className='table-primary'>
     
      <th scope="col"> Rally Length</th>
      <th scope="col">%of points won </th>
      <th scope="col">count </th>
    </tr>
  </thead>
  <tbody>
    <tr className='table-light' style={{height:50}}>
      
      <td>0-5</td>
      <td>45.00%</td>
      <td>40</td>
    </tr>
    <tr className='table-primary' style={{height:50}}>
      
      <td>5-10</td>
      <td>57.58%</td>
      <td>33</td>
    </tr>
    <tr className='table-light'style={{height:50}}>
      
      <td >10-15</td>
      <td> 53.33%</td>
      <td>15</td>
    </tr>
    <tr className='table-primary' style={{height:50}}>
      
      <td >15-20</td>
      <td>37.50%</td>
      <td>8</td>
    </tr>
    <tr className='table-light' style={{height:50}}>
      
      <td >20-25</td>
      <td>25.00%</td>
      <td>4</td>
    </tr>
    <tr className='table-primary' style={{height:50}}>
      
      <td >25+</td>
      <td>0.00%</td>
      <td>2</td>
    </tr>
  </tbody>
     </table>
      
        </Container>
        
   </>
  )
}

export default  Analyse

