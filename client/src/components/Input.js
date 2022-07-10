import React from "react";
import { TextField, FormControl } from "@mui/material";

const Input = (props) => {

  return (
    <FormControl sx={{ m: 1, width: '80%' }}>
      <TextField id={props.id} label={props.label} onChange={props.onChange} type={props.type}/>
    </FormControl>

  )
};

export default Input;