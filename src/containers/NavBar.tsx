import { AppBar, Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const navigationOptions = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Cars', path: '/cars' },
    { id: 3, name: 'About', path: '/about' },
]

function NavBar() {
    return (
        <AppBar sx={{
            display: 'flex',
            height: 50,
            width: '100%',
            alignContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'black',
        }}>
            <Typography sx={{
                marginLeft: 2,
            }}>
                Sandeep
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {navigationOptions.map((navOption) => (
                    <Typography
                        key={navOption.id}
                        sx={{
                            alignItems: 'center',
                            alignContent: 'center',
                            margin: 2,
                            color: 'white',
                        }}
                        component={'a'}
                        href={navOption.path}
                    >
                        {navOption.name}
                    </Typography>
                ))
                }
            </Box>
            <div>
                <Link to={'/login'}>Log In</Link>
                <Link style={{ margin: 15 }} to={'/sign-up'}>Sign Up</Link>
            </div>
        </AppBar>
    )
}

export default NavBar