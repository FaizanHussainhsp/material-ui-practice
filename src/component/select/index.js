import React, { useState } from "react";
import { TextField, MenuItem, Box, Select } from "@mui/material";
const SelectField = () => {
  const [val, setVal] = useState([]);
  const handler = (event) => {
    setVal(event.target.value);
  };
  return (
    <>
      {/* <Box width="200px">
        <TextField
          label="select country"
          value={val}
          onChange={handler}
          select
          fullWidth
        >
          <MenuItem value="us">usa</MenuItem>
          <MenuItem value="pk">pk</MenuItem>
        </TextField>
      </Box> */}
      <Box width="200px">
        <TextField
          label="select country"
          value={val}
          onChange={handler}
          select
          fullWidth
          SelectProps={{
            multiple: true,
          }}
        >
          <MenuItem value="AU">AU</MenuItem>
          <MenuItem value="US">USA</MenuItem>
        </TextField>
      </Box>
    </>
  );
};

export default SelectField;
