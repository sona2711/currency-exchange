import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';


import { Textfield } from './Textfield';
import { FirstSelect } from './SelectFirstCurrency';
import { SwapButton } from './SwapBtn';
import { SecoundSelect } from './SelectSecoundCurrency';
import { SubmitBtn} from './SubmitBtn';
import { FormHeader} from './HeaderText';
import { FormInfo } from './InfoText';
import { LastConversions } from '../Exchange_History/LastConversions';
import { useHistoryContext } from '../../context/HistoryContext';



interface CurrencyData {
    [key: string]: string;
  }


export function Form() {
    const [currencies, setCurrencies] = useState<CurrencyData>({});
    const [fromCurrency, setFromCurrency] = useState<string>('');
    const [toCurrency, setToCurrency] = useState<string>('');
    const [amount, setAmount] = useState<number | string>('');
    const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
    const { addHistory } = useHistoryContext();


   const handleChange = (event: any) => {
    setAmount(event.target.value)
  };
   



   useEffect(() => {
     fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`)
     .then(response=> response.json())
     .then(data => {
        setCurrencies(data)
     })
     .catch(error => console.error('Error fetching currencies:', error));
   }, [])



  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!fromCurrency || !toCurrency || !amount) return;

    console.log(fromCurrency)
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.min.json`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const rate = data[fromCurrency][toCurrency];
      console.log(rate)
      const converted = Number(amount) * rate;
     setConvertedAmount(converted);

     const newEntry = {
      currency: fromCurrency,
      amount: Number(amount),
      date: new Date().toLocaleDateString(),
    };
     addHistory(newEntry);
    })
    .catch(error => console.error('Error fetching exchange rate:', error));
  };
  




    return (
        <Box sx={{
            display:'flex',
            flexDirection: 'column',
            gap: '30px',
            backgroundColor: "#eff4fe",
            width: "70%",
            padding: "20px",
            }}>
            <FormHeader/>
            <form onSubmit={handleSubmit}>
                <Box sx={{
                    display:'flex',
                    gap: '30px',
                    justifyContent: 'center',
                    alignItems: 'center'}}>
                    <Textfield value={amount} onChange={handleChange}/>
                    <FirstSelect   value={fromCurrency}  onChange={setFromCurrency} currencies={currencies} />
                    <SwapButton 
                    // onClick={() => {
                    //   const temp = fromCurrency;
                    //   setFromCurrency(toCurrency);
                    //   setToCurrency(temp)}}
                      />
                    <SecoundSelect  value={toCurrency} onChange={setToCurrency} currencies={currencies}/> 
                    <SubmitBtn/>
                </Box>
            </form>
            {convertedAmount !== null && (
        <FormInfo amount={amount}  convertedAmount={convertedAmount} fromCurrency={fromCurrency} toCurrency={toCurrency} />)}
        < LastConversions/>
        </Box>   
    );
  }

