import { Box } from '@mui/material';
import { Form } from './component/Form/Form'

function App() {
  return (
    <Box className="App" sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1, justifyContent: 'center',
        alignItems: 'center'}}> 
    <Form/>  
    </Box>
  );
}

export default App;
