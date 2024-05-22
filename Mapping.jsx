import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'

const Mapping = () => {
    var[name,setname]=useState([
        {"sname":"athira","age":21},
        {"sname":"dhilna","age":37},
        {"sname":"esha","age":55},
    ])
  return (
    <div>
<TableContainer>
      <Table>
      <TableHead>
          <TableRow>
          <TableCell>name</TableCell>
          <TableCell>age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {name.map((v,i)=>{
                return(
                    <TableRow>
                        <TableCell>{v.sname}</TableCell>
                        <TableCell>{v.age}</TableCell>
                    </TableRow>
                )
            })}

        </TableBody>
        </Table>
        </TableContainer>
    </div>
  )
}

export default Mapping