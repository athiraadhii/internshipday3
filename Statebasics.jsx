import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
   // var name="athira"
    var[fname,setfname]=useState("athira")
    const[val,setVal]=useState()

    const handleinput=(e)=>{
        console.log(e.target.value)
        setfname(e.target.value)

    }

    const submitHandler=()=>{
        console.log("clicked")
        setVal(fname)
    }

  return (
    <div>
        <Typography variant='h4'>Welcome {fname}</Typography><br />
        <TextField variant="outlined" label="Enter your name" onChange={handleinput}/><br /><br />

        <Button variant="contained" onClick={submitHandler}>SUBMIT</Button>
    </div>
  )
}

export default Statebasics