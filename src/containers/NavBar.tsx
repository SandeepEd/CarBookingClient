import { AppBar, Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const navigationOptions = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Cars', path: '/cars' },
    { id: 3, name: 'About', path: '/about' },
]

function NavBar() {
    const { user, logout } = useAuth();
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
                    >
                        <Link
                            to={navOption.path}>{navOption.name}</Link>
                    </Typography>
                ))
                }
            </Box>
            <div>
                <Link style={{
                    color: `#2196F3`,
                    border: `1px solid grey`,
                    padding: 7,
                    borderRadius: 5
                }} to={'/login'}>Log In</Link>
                {!user ?
                    <Link
                        style={{ margin: 15 }}
                        to={'/sign-up'}>Sign Up</Link> :
                    <Link
                        style={{
                            margin: 15,
                            color: `#f44336`,
                            border: `1px solid grey`,
                            padding: 7,
                            borderRadius: 5
                        }}
                        onClick={() => logout()}
                        to={'/logout'}>Log Out</Link>}
            </div>
        </AppBar>
    )
}

export default NavBar