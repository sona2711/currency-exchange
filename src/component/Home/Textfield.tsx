import { TextField } from "@mui/material";

type Props = {
  value: string | number;
  onChange: (ev:any) => void
}

export function Textfield({value , onChange}:Props) {

  return (
    <TextField sx={{ m: 1,}} 
      id="standard-basic" 
      label= "Amount"
      variant="standard" 
      value={value}
      onChange={onChange}
     />
  );
}



