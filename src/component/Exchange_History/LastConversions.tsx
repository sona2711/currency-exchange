import { Box, Typography, List, ListItem, ListItemText  } from "@mui/material";
import { useHistoryContext } from '../../context/HistoryContext';
import { useNavigate } from "react-router-dom";


export function LastConversions (){
  const { history } = useHistoryContext();
  const header: string = "Exchange History";
  const navigate = useNavigate();

  const handleCurrencyClick = (currency: string)=> {
    navigate(`/currency-info/${currency}`);
  }
 


  return (
    <Box>
      <Typography variant="h5" component="h2">{header}</Typography>
      <List>
        {history.slice(-10).map((entry, index)=> (
          <ListItem key={index}  onClick={() => handleCurrencyClick(entry.currency)} sx={{backgroundColor: '#fff', marginBottom: '10px', borderRadius: '8px'}}>
            <ListItemText primary={`${entry.currency} - ${entry.amount} on ${entry.date}`}/>
          </ListItem>
        ))}
      </List>
    </Box>
   
  )
  
}