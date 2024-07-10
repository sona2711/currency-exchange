import { Box } from '@mui/material';
import {AboutPage} from './About';
import { ConversionHistory} from './ConversionHistory';

export function NavBar() {
    return (
        <Box>
        <AboutPage/>
        <ConversionHistory/>
        </Box>

    );
}