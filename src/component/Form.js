import React, { useState } from "react";
import "../App.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';




function Form() {
  const [id,setId]=useState("")
  const [fullname,setFullname]=useState('')
  const [age,setAge]=useState("")
  const [country,setCountry]=useState('')
  const [email,setEmail]=useState('')
  const navigate = useNavigate();



  const handleSubmit=async()=>{
    let userNew={
      'id':id,
      'FullName':fullname,
      'Age':age,
      'Country':country,
      'Email':email
    }
    console.log(id,fullname,age,country,email)
    try {
      let addedUser = await axios.post('https://6440fd8efadc69b8e077ac76.mockapi.io/users',userNew)
      console.log('success',addedUser)
      navigate('/profile')

    } catch (error) {
      console.log('errr',error)
    }
      
    
      
  }

  return (
    
    <div className="box" >
          <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Create New User
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>



<TextField  sx={{marginTop:"20px"}}id="outlined-basic" label="Full Name" variant="outlined"  type="text" value={fullname} onChange={(event) => setFullname(event.target.value)}/>      
<br/>
<br/>


<TextField id="outlined-basic" label="Age " variant="outlined"  type="number" value={age} onChange={(event) => setAge(event.target.value)}/>      
<br/>
<br/>
<TextField id="outlined-basic" label="Country " variant="outlined"  type="text" value={country} onChange={(event) => setCountry(event.target.value)}/>      
<br/>
<br/>

<TextField id="outlined-basic" label="Email " variant="outlined"  type="text" value={email}  onChange={(event) => setEmail(event.target.value)}/>      
<br/>
<br/>
<Button variant="contained" onClick={(handleSubmit)}>Submit</Button>
    </div>
  );
}

export default Form;
