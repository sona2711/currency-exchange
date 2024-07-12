import { Box } from '@mui/material';
import { Link } from 'react-router-dom';



export function NavBar() {
    return (
            <Box sx={{
                display: 'flex',
                gap: 3,
                justifyContent: 'center',
                alignItems: 'center',
                padding: "20px 0 20px 0",
                borderBottom: "1px solid #4c4ac4",
                backgroundColor: "white",
                width: "100%"}}>
                    <Link to="/">Home</Link>
                    <Link to="/history">Conversion History</Link>
                    <Link to="/about">About</Link>
            </Box>
    );
}