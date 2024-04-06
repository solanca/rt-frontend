import React, { useState } from "react";
import {
  IconButton,
  Box,
  ToggleButtonGroup,
  ToggleButton,
  Menu,
  MenuItem,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";

function DefaultTopBar() {
  const [alignment, setAlignment] = useState<string>("left");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleAlignment = (_event:React.MouseEvent<HTMLElement, MouseEvent>, newAlignment:any) => {
    if (newAlignment !== null) {
      // Prevent unselecting all toggle buttons
      setAlignment(newAlignment);
    }
  };

  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [userMenuAnchorEl, setUserMenuAnchorEl] = useState(null);
  const isUserMenuOpen = Boolean(userMenuAnchorEl);

  const handleUserMenuClick = (event:any) => {
    setUserMenuAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchorEl(null);
  };

  const icons = [<SettingsIcon />, <NotificationsIcon />]; // Add more icons as needed

  return (
    <div className="TopBarPanel">
      <div className="TopBarContent">
        <IconButton
          onClick={() => {
            /* Logic to scroll left */
          }}
        >
          
        </IconButton>
        {icons.map((Icon, index) => (
          <IconButton key={index} sx={{ margin: "0 4px" }}>
            {Icon}
          </IconButton>
        ))}
        <ToggleButtonGroup
          size="small"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned">
            L
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            C
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            R
          </ToggleButton>
        </ToggleButtonGroup>
        <IconButton onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Option 1</MenuItem>
          <MenuItem onClick={handleClose}>Option 2</MenuItem>
          <MenuItem onClick={handleClose}>Option 3</MenuItem>
        </Menu>
        <IconButton
          onClick={() => {
            /* Logic to scroll right */
          }}
        >
        
        </IconButton>

        <Box
          className="UserInfoSection"
          sx={{
            minWidth: "130px",
            height: "38px", // Ensure the height matches the parent
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center", // Center the content vertically
              height: "100%", // Take full height to align text in the center
            }}
          >
            <small>0.000345 BTC</small>
            <small style={{ fontSize: "0.45rem", lineHeight: "0" }}>
              Balance: $100
            </small>
            </Box>
            <IconButton
              aria-label="more"
              size="small"
              sx={{ padding: "8px", margin: "0 0px" }} // Adjust margin and padding as needed
              onClick={handleUserMenuClick}
            >
              <MoreVertIcon fontSize="small" />
            </IconButton>

            <Menu
              id="user-menu"
              anchorEl={userMenuAnchorEl}
              keepMounted
              open={isUserMenuOpen}
              onClose={handleUserMenuClose}
            >
              <MenuItem onClick={handleUserMenuClose}>Option 1</MenuItem>
              <MenuItem onClick={handleUserMenuClose}>Option 2</MenuItem>
              <MenuItem onClick={handleUserMenuClose}>Option 3</MenuItem>
            </Menu>
          
        </Box>
      </div>
    </div>
  );
}

export default DefaultTopBar;
