import { Box, Typography, List, ListItem, ListItemText  } from "@mui/material";
import { useHistoryContext } from '../../context/HistoryContext';


export function LastConversions (){
  const { history } = useHistoryContext();
  const header: string = "Exchange History";


  return (
    <Box>
      <Typography variant="h5" component="h2">{header}</Typography>
      <List>
        {history.slice(-10).map((entry, index)=> (
          <ListItem key={index} sx={{backgroundColor: '#fff', marginBottom: '10px', borderRadius: '8px'}}>
            <ListItemText primary={entry} />
          </ListItem>
        ))}
      </List>
    </Box>
   
  )
  
}