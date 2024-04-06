import React, { useContext, useState, ChangeEvent } from 'react';
import { Menu, MenuItem, Typography, Divider, ListItemIcon, Switch, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import HelpIcon from '@mui/icons-material/HelpOutline';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import BrushIcon from '@mui/icons-material/Brush';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { DarkModeContext } from './pages/components/DarkModeContext';
import { usePanelVisibility } from "./pages/components/PanelVisibilityContext";
import logo from "./assets/logo.svg";

const UserAccountMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  // Use the usePanelVisibility hook to access isPanelVisible and setPanelVisible
  const { isPanelVisible, setPanelVisible } = usePanelVisibility();

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    toggleDarkMode();
  };

  const menuId = "primary-search-account-menu";

  return (
    <>
    <div className="userAccountMenu"
            style={{ width: "10px", flexDirection: "column" }}
          >
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <img src={logo} className="App-logo" alt="logo" />
            </IconButton>
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: -5, horizontal: 10 }}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      <div className="app-title">
      <MenuItem sx={{backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: 'transparent', // Set to 'transparent' or any desired color
   
  }
}}>
  <Typography variant="subtitle1" sx={{ my: 1, fontSize: "0.8rem" , backgroundColor: 'transparent' }}>
    
      Schema: 0.0.1
  
  </Typography>
</MenuItem>
</div>
      <Divider />
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        <Typography>UserAccountBlah</Typography>
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <Typography>Home</Typography>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <HelpIcon />
        </ListItemIcon>
        <Typography>Help Center</Typography>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <NotificationsIcon />
        </ListItemIcon>
        <Typography>Notifications</Typography>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <NewReleasesIcon />
        </ListItemIcon>
        <Typography>What's new</Typography>
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <DarkModeIcon />
        </ListItemIcon>
        <Typography>Dark mode</Typography>
        <Switch
          checked={darkMode}
          onChange={handleThemeChange}
          onClick={(e) => e.stopPropagation()}
        />
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <BrushIcon />
        </ListItemIcon>
        <Typography>Right panel</Typography>
        <Switch
          checked={isPanelVisible}
          onChange={() => setPanelVisible(!isPanelVisible)}
          onClick={(e) => e.stopPropagation()}
        />
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <GTranslateIcon />
        </ListItemIcon>
        <Typography>Language</Typography>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <KeyboardIcon />
        </ListItemIcon>
        <Typography>Keyboard shortcuts</Typography>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <DesktopWindowsIcon />
        </ListItemIcon>
        <Typography>Get desktop app</Typography>
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <Typography>Sign out</Typography>
      </MenuItem>
    </Menu>
    </div>
    </> 
  );
};

export default UserAccountMenu;
