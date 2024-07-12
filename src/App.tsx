// import { RouterProvider } from 'react-router-dom';
import { Box } from '@mui/material';

import { NavBar } from './component/Navigation/NavBar';
import { HistoryProvider } from './context/HistoryContext';
import { Route,Routes } from 'react-router-dom';
import { Form } from './component/Home/Home';
import { AboutPage } from './component/Navigation/About';
import { ConversionHistory } from './component/Exchange_History/ConversionHistory';

// import { routes } from './router';


function App() {
  
  return (
    <HistoryProvider>
      
      <Box className="App" sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1, justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: "#eff4fe",
         }}> 
        <NavBar/>
        {/* <RouterProvider router={routes}/> */}
        <Routes>        
            <Route path="/"  element={<Form/>} />
            <Route path="/about"  element={<AboutPage />}/>
            <Route path="/history"  element={<ConversionHistory/>}/>
    </Routes>
      </Box>
    </HistoryProvider>
   
  );
}

export default App;
