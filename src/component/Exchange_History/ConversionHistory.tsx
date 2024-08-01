import { Box , Typography,  List, ListItem, ListItemText } from '@mui/material';
import { useHistoryContext } from '../../context/HistoryContext';
import { useNavigate } from 'react-router';

 export const ConversionHistory = () => {
  const { history } = useHistoryContext();
  const header: string = 'Conversion History';

  const navigate = useNavigate()

  
  const handleCurrencyClick = (currency: string) => {
    navigate(`/currency-info/${currency}`);
  };

  return (
    <Box  sx={{
      textAlign: 'start',
      margin: 'auto',
      padding: "20px",
      backgroundColor: "#eff4fe",
      }}>
      <Typography variant="h3" component="h2">{header}</Typography>
      <List>
        {history.map((entry, index) => (
          <ListItem key={index} onClick={()=>handleCurrencyClick(entry.currency)} sx={{backgroundColor: '#fff', marginBottom: '10px', borderRadius: '8px'}}>
            <ListItemText primary={`${entry.currency} - ${entry.amount} on ${entry.date}`} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
