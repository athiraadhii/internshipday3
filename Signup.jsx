import { TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
         <br /><br /><br /><br />
        <TextField id="outlined-basic" label="username" variant="outlined" /><br /><br />
        <TextField id="outlined-basic" label="password" variant="outlined" /><br /><br />
        <TextField id="outlined-basic" label="conform password" variant="outlined" />

    </div>
  )
}

export default Signup