import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant='h6'>myapp</Typography>&nbsp;
                <Button variant="contained" color="success">
                    <Link to='/p'>Signup</Link>
                    </Button>&nbsp;
                <Button variant="contained" color="success">
                    <Link to='/login'>LOGIN</Link>
                    </Button>&nbsp;
                    <Button variant="contained" color="success">
                    <Link to='/s'>STATE</Link>
                    </Button>&nbsp;
                    <Button variant="contained" color="success">
                    <Link to='/c'>Count</Link>
                    </Button>&nbsp;
                    <Button variant="contained" color="success">
                    <Link to='/z'>USESTATE</Link>
                    </Button>&nbsp;
                    <Button variant="contained" color="success">
                    <Link to='/l'>listmap</Link>
                    </Button>
                    <Button variant="contained" color="success">
                    <Link to='/m'>mapping</Link>
                    </Button>
                    <Button variant="contained" color="success">
                    <Link to='/a'>api</Link>
                    </Button>
                    <Button variant="contained" color="success">
                    <Link to='/h'>card</Link>
                    </Button>






            </Toolbar>
        </AppBar>
        <br /><br /><br /><br /><br />
    </div>
  )
}

export default Navbar