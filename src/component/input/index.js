import React, { useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Inputf = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const passwordHandler = () => {
    setPasswordShow(!passwordShow);
  };
  return (
    <>
      <div>
        <TextField label="name" variant="standard" required />
        <TextField
          label="name"
          variant="outlined"
          inputProps={{ readOnly: true }}
        />
        <TextField label="name" variant="outlined" helperText="Error Name" />
        <TextField
          error
          helperText="error"
          label="name"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
      </div>

      <TextField
        label="price"
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
      <TextField
        label="weight"
        InputProps={{
          endAdornment: <InputAdornment position="end">kg</InputAdornment>,
        }}
      />

      <TextField
        label="password"
        type={`${passwordShow ? "text" : "password"}`}
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              onClick={passwordHandler}
              style={{ cursor: "pointer" }}
            >
              {passwordShow ? <VisibilityOff /> : <Visibility />}
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default Inputf;
