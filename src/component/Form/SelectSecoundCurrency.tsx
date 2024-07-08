import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import MUISelect, { SelectChangeEvent } from '@mui/material/Select';


export function SecoundSelect() {
  const [secoundCurrency, setCurrency] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCurrency(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-standard-label">To</InputLabel>
        <MUISelect
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={secoundCurrency}
          onChange={handleChange}
          label="Currency"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </MUISelect>
      </FormControl>
    </div>
  );
}
