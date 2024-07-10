import {Typography} from '@mui/material';
import { Box } from '@mui/material';
import '@fontsource/roboto/700.css';



export function AboutPage() {
    const text: string = 'About';
    const infoText: string = 'A currency exchange app is a powerful tool designed to help users convert one currency to another effortlessly. Whether traveling abroad, engaging in international business, or simply keeping track of foreign exchange rates, this app provides real-time updates on currency values, ensuring accurate conversions. Users can compare multiple currencies, track historical data, and set alerts for preferred rates. With an intuitive interface and robust security features, the currency exchange app offers a seamless experience, making financial management across borders more convenient and efficient.'

    return (
        <Box sx={{
          textAlign: 'start',
          margin: 'auto',
          padding: "100px"}}>
          <Typography variant="h3" component="h2" sx={{m: 1}}>
            {text}  
          </Typography>
          <Typography paragraph={true} sx={{m:'auto'}}> 
           {infoText}
          </Typography>
        </Box>
    );
  }
  