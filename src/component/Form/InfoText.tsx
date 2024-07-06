import {Typography} from '@mui/material';
import Box from '@mui/material/Box';


export function FormInfo() {
    return (
        <Box sx={{
            display:'flex',
            flexDirection: 'column',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center',
           
            }} >
             <Typography variant="h3" component="h2">
                 10=10   
             </Typography>
             <Typography variant="h6" component="h2">
                 10=10   
             </Typography>
             <Typography variant="h6" component="h2">
                 10=10   
             </Typography>
        </Box>
        
       
    );
  }
