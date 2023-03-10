import React, { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
const Toggle = () => {
  const [toggleValue, setToggleValue] = useState([]);
  const changehandler = (event, update) => {
    setToggleValue(update);
  };
  console.log(toggleValue);
  return (
    <div>
      <ToggleButtonGroup value={toggleValue} onChange={changehandler} exclusive>
        <ToggleButton value="bold">
          <ChangeCircleIcon />
        </ToggleButton>
        <ToggleButton value="italic">
          <ChangeCircleIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default Toggle;
