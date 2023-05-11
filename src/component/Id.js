import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const Id=()=>{

            const [sambarvini,setSambarvini]=useState('')


        try {
            const params = useParams();
            let id = params.id
            let currID =  axios.get(`https://6440fd8efadc69b8e077ac76.mockapi.io/users/${id}`).then((res)=>{
                console.log(res)
                setSambarvini(res.data)
            })
            console.log(currID)
            // setSambarvini(fetchedData.data)
            // console.log('hiiii',sambarvini)
        } catch (error) {
            console.log('err',error)
        }
    


  return (
    <div>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableHead>
          <TableRow >
            <TableCell >ID</TableCell>
            <TableCell align="left">Full Name</TableCell>
            <TableCell align="left">Age</TableCell>
            <TableCell align="left">Country</TableCell>
            <TableCell align="left">Email ID</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                {sambarvini.id}
              </TableCell>
              <TableCell align="left">{sambarvini.FullName}</TableCell>
              <TableCell align="left">{sambarvini.Age}</TableCell>
              <TableCell align="left">{sambarvini.Country}</TableCell>
              <TableCell align="left">{sambarvini.Email}</TableCell>


            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
 

     

    </div>
  )
}

export default Id