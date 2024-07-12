import {Typography} from '@mui/material';
import Box from '@mui/material/Box';


interface InfoTextProps {
    amount: number | string;
    convertedAmount: number;
    fromCurrency: string;
    toCurrency: string;
  }

export function FormInfo({amount, convertedAmount, fromCurrency, toCurrency }:InfoTextProps ) {
    
    const fromCurrencyInfo = `${amount} ${fromCurrency} = `.toUpperCase(); 
    const toCurrencyInfo = `${convertedAmount} ${toCurrency}`.toUpperCase(); 
    const fromCurrencyOneValue = convertedAmount / Number(amount);
    const toCurrencyOneValue = Number(amount)/convertedAmount;
    const greenColor = {color: "#7be52a"};

  

    
    return (
        <Box sx={{
            display:'flex',
            flexDirection: 'column',
            gap: 1,
            justifyContent: 'center',
            alignItems: 'center',
            }} >
             <Typography variant="h5" component="h2">
              <span>{fromCurrencyInfo}</span>
              <span style={greenColor}>{toCurrencyInfo}</span>
             </Typography>
             <Box>
                <Typography paragraph={true} sx={{fontSize: '14px'}}>
                    {`1 ${fromCurrency} = ${fromCurrencyOneValue} ${toCurrency}`.toUpperCase()} 
                </Typography>
                <Typography paragraph={true} sx={{fontSize: '14px'}}>
                    {`1 ${toCurrency} = ${toCurrencyOneValue} ${fromCurrency}`.toUpperCase()}   
                </Typography>
             </Box>
             
        </Box>
        
       
    );
  }
