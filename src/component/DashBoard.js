import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import '../App.css'
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {  useNavigate } from "react-router-dom";

function DashBoard() {
    
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('https://6440fd8efadc69b8e077ac76.mockapi.io/users')
          .then(response => {
            setData(response.data);
            console.log(data)
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
      const handleDelete= async(id)=>{
        try {
          let deleteData = await axios.delete(`https://6440fd8efadc69b8e077ac76.mockapi.io/users/${id}`)
          console.log('deleted succesdully',deleteData)
          navigate(0)
          

        } catch (error) {
          console.log('err',error)
        }
        
      }
      const handleEdit=(id)=>{
        try {
          navigate(`/profile/${id}`)

        } catch (error) {
          console.log('err',error)
        }

        
      }
      

  return (
    <div>
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
            DashBoard
          </Typography>
          <Button color="inherit" onClick={()=>navigate('/create-user')}>Create Users</Button>
        </Toolbar>
      </AppBar>
    </Box>



     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Full Name</TableCell>
            <TableCell align="left">Age</TableCell>
            <TableCell align="left">Country</TableCell>
            <TableCell align="left">Email ID</TableCell>
            <TableCell align="left">Edit User</TableCell>
            <TableCell align="left">Open User</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((users) => (
            <TableRow
              key={users.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {users.id}
              </TableCell>
              <TableCell align="left">{users.FullName}</TableCell>
              <TableCell align="left">{users.Age}</TableCell>
              <TableCell align="left">{users.Country}</TableCell>
              <TableCell align="left">{users.Email}</TableCell>
             <TableCell align='left'  ><IconButton aria-label="delete"color="error"><DeleteIcon onClick={()=>handleDelete(users.id)}/></IconButton></TableCell>
             <TableCell align='left'><IconButton aria-label="delete"color="secondary"><EditIcon onClick={()=>handleEdit(users.id)}/></IconButton></TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 

     

    </div>
  )
}

export default DashBoard