import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import MUISelect from '@mui/material/Select';


interface SelectCurrencyProps {
    value: string;
    onChange: (value: string) => void;
    currencies: { [key: string]: string };
  }


export function SecoundSelect({ value, onChange, currencies }: SelectCurrencyProps) {

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-standard-label">To</InputLabel>
        <MUISelect
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value}
          onChange={e => onChange(e.target.value as string)}
          label="Currency"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {Object.keys(currencies).map(currency => (
            <MenuItem key={currency} value={currency}>
            {currencies[currency]}
            </MenuItem>
         ))}
          
        </MUISelect>
      </FormControl>
    </div>
  );
}
