import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const UseButton = () => {
    var [x,setX] = useState();
    const input = ()=>{
        setX("react")
    }
    const input2 = ()=>{
        setX("Angular")
    }
    const input3 = ()=>{
        setX("Next")
    }

    useEffect(()=>{
        input2()
    },[])
    
  return (
    <div>
        <Typography variant="h3">WELCOME TO {x}</Typography>
        <br /><br />
        <Button variant="contained" color='primary' onClick={input}>React</Button>&nbsp;
        <Button variant="contained" color='secondary' onClick={input2}>Angular</Button>&nbsp;
        <Button variant="contained" color='success' onClick={input3}>Next</Button>&nbsp;
    </div>
  )
}

export default UseButton