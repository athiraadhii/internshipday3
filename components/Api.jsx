import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Api = () => {
    var[user,setUser]=useState([])
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        console.log(response.data)
        setUser(response.data)
    })
      return (
    <div>
        <TableContainer>
      <Table>
      <TableHead>
          <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>NAME</TableCell>
          <TableCell>CITY</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {user.map((v,i)=>{
                return(
                    <TableRow>
                        <TableCell>{v.id}</TableCell>
                        <TableCell>{v.name}</TableCell>
                        <TableCell>{v.address.city}</TableCell>
                    </TableRow>
                )
            })}

        </TableBody>
        </Table>
        </TableContainer>
    </div>
  )
}

export default Api