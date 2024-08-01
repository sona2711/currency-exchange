import { Box, Typography } from "@mui/material";

export function ErrorMessage (){
    const message: string = 'The page not found'

    return (
        <Box sx={{
            textAlign: 'center',
            margin: 'auto',
            padding: "100px",
            backgroundColor: "#eff4fe"}}>
                <Typography variant="h2" component="h2">
                    404
                </Typography>
                <Typography variant="h3" component="h2">
                    {message}
                </Typography>

        </Box>
          
    )

}