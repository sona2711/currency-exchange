import {Typography} from '@mui/material';
import '@fontsource/roboto/700.css';

export function FormHeader() {
    const header = 'I want to convert';
    return (
        <Typography variant="h3" component="h2" sx={{m: 1}}>
           {header} 
        </Typography>
    );
  }
  

