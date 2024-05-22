import { TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <br /><br /><br /><br />
        <TextField id="outlined-basic" label="username" variant="outlined" /><br /><br />
        <TextField id="outlined-basic" label="password" variant="outlined" />

    </div>
  )
}

export default Login