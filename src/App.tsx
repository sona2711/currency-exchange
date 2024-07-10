import { Box } from '@mui/material';
import { Form } from './component/Form/Form';
import { NavBar } from './component/Navigation/NavBar';
import { LastConversions } from './component/Exchange_History/LastConversions';

function App() {
  return (
    <Box className="App" sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1, justifyContent: 'center',
        alignItems: 'center'}}> 
      <NavBar/>
      <Form/> 
      <LastConversions/> 
    </Box>
  );
}

export default App;
