import React from "react";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";

const DropDown = (props) => {


  const menuItemList = (array) => {
    return array.map(x => <MenuItem value={x} key={x}>{x}</MenuItem>);
  }



  return (
    <FormControl sx={{ m: 1, width: '80%' }}>
      <InputLabel id={props.label}>{props.label}</InputLabel>
      <Select id={props.id} value={props.value} onChange={props.onChange} labelid={props.label} defaultValue={''}>
        {menuItemList(props.options)}
      </Select>
    </FormControl>
  )
};

export default DropDown;