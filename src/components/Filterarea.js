import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



const Filterarea = (props) => {
    console.log('filter page');
    console.log(props.filterVal);

    const onSelectHandler = (events) => {
        props.onFilterChange(events.target.value);
    };

      
  return (
    <div className='filterArea'>
         {/* <select onChange={onSelectHandler} value={props.selectedFiltered}>
         {
            props.filterVal.map((val,idx)=>{
                return <option value={val}>{val}</option>
            })
        }
        </select> */}

      <Box sx={{ m:1,Width: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort by area</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.selectedFiltered}
          label="Sort by area"
          onChange={onSelectHandler}
        >
        {
            props.filterVal.map((val,idx)=>{
                return <MenuItem value={val}>{val}</MenuItem>
            })
        }
        </Select>
      </FormControl>
    </Box>



    </div>
  )
}

export default Filterarea