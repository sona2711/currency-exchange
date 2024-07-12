import { Box, Typography } from "@mui/material";

export function ErrorMessage (){
    const message: string = 'The page not found'

    return (
        <Box sx={{
            textAlign: 'start',
            margin: 'auto',
            padding: "100px",
            backgroundColor: "#eff4fe"}}>
                <Typography variant="h1" component="h2">
                    {message}
                </Typography>

        </Box>
          
    )

}