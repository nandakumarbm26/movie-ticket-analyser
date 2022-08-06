import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { setDetectionModelState } from "../redux/action";
import { useSelector, useDispatch } from "react-redux";

export default function BasicMenu({ modelsList }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    dispatch(setDetectionModelState(e));
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="contained"
        color="secondary"
        sx={{ width: "20vw" }}
      >
        THEATER MODELS
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {modelsList.map((d, i) => {
          return (
            <MenuItem key={i} value={d} onClick={(e) => handleClose(d)}>
              {d}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
