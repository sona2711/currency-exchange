import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import MUISelect, { SelectChangeEvent } from '@mui/material/Select';

export function FirstSelect() {
  // const data:object[] = []
  const [currency, getCurrency] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    getCurrency(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-standard-label">From</InputLabel>
        <MUISelect
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={currency}
          onChange={handleChange}
          label="Currency"
        >
          <MenuItem value="">
            <em>None</em>
           {/* {data.map(el => 
            <MenuItem value={el.value}>{el.key}</MenuItem>
            )} */}
          </MenuItem>
        </MUISelect>
      </FormControl>
    </div>
  );
}
