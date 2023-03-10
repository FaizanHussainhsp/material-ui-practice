import React from "react";
import { Stack, Button, IconButton, ButtonGroup } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const ButtonVariant = () => {
  return (
    <>
      <Stack display={"block"}>
        <Button href="https://google.com" variant="text">
          google
        </Button>
        <Button variant="contained">text</Button>
        <Button variant="outlined" color="error">
          text
        </Button>
        <Button variant="contained" color="error">
          text
        </Button>
        <Button
          variant="contained"
          color="warning"
          size="medium"
          disableElevation
        >
          disableElevation
        </Button>
        <Button
          variant="contained"
          color="warning"
          size="medium"
          onClick={() => alert("Hello")}
          startIcon={<SendIcon />}
        ></Button>
        <IconButton variant="contained" color="warning">
          <SendIcon />
        </IconButton>
        <Button
          variant="contained"
          disableRipple
          disableElevation
          endIcon={<SendIcon />}
        >
          text
        </Button>
      </Stack>
      <Stack direction={"row"}>
        <ButtonGroup variant="outlined" color="error" disableRipple>
          <Button onClick={() => alert("faizan")}>Hello</Button>
          <Button>Hello</Button>
          <Button>Hello</Button>
        </ButtonGroup>
      </Stack>
    </>
  );
};

export default ButtonVariant;
