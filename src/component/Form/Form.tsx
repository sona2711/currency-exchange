import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

import { Textfield } from './Textfield';
import { FirstSelect } from './SelectFirstCurrency';
import { SwapButton } from './SwapBtn';
import { SecoundSelect } from './SelectSecoundCurrency';
import { SubmitBtn} from './SubmitBtn';
import { FormHeader} from './HeaderText';
import { FormInfo } from './InfoText'



export function Form() {
   const [response, setData]= useState([])

   useEffect(() => {
     fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
     .then(data => data.json())
     .then(data => {
        setData(data)
     })
   })

  console.log(response)
    return (
        
        <Box sx={{
            display:'flex',
            flexDirection: 'column',
            gap: '30px',
            }}>
            <FormHeader/>
            <form onSubmit={SubmitBtn}>
                <Box sx={{
                display:'flex',
                gap: '30px',
                justifyContent: 'center',
                alignItems: 'center'}}>
                    <Textfield/>
                    <FirstSelect/>
                    <SwapButton/>
                    <SecoundSelect/>
                    <SubmitBtn/>
                </Box>
            </form>
            <FormInfo/>
        </Box>   
    );
  }