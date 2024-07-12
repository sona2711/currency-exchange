import { createBrowserRouter } from 'react-router-dom';
import { Form } from './component/Home/Home';
import { AboutPage } from './component/Navigation/About';
import { ConversionHistory } from './component/Exchange_History/ConversionHistory';
import { ErrorMessage } from './component/Navigation/NotFoundPage';

export const routes = createBrowserRouter([
    {path : "/" , element : <Form/>},
    {path : "/about" , element : <AboutPage/>},
    {path : "/history" , element : <ConversionHistory/>},
    {path : "/*" , element : <ErrorMessage/>},
])

