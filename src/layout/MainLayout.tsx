import React, { useState, useContext, ChangeEvent } from "react";
import {
  Button,
  CssBaseline,
  ThemeProvider,
  Typography,
  IconButton,
  createTheme,
  Menu,
  MenuItem,
  Switch,
} from "@mui/material";

// css
import "../assets/css/App.css";
import "../assets/css/table-styles.css";

//icons n graphic stuff
import AccountCircle from "@mui/icons-material/AccountCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChartLine,
  faBroadcastTower,
  faRobot,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { ListItemIcon, Divider } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import HelpIcon from "@mui/icons-material/HelpOutline";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import BrushIcon from "@mui/icons-material/Brush"; // Assuming this is for "Drawings panel"
import GTranslateIcon from "@mui/icons-material/GTranslate"; // Assuming this is for "Language"
import KeyboardIcon from "@mui/icons-material/Keyboard"; // Assuming this is for "Keyboard shortcuts"
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows"; // Assuming this is for "Get desktop app"
import ExitToAppIcon from "@mui/icons-material/ExitToApp"; // Assuming this is for "Sign out"
import logo from "../assets/logo.svg";

// contexts and global
// import { DarkModeContext } from "./pages/components/DarkModeContext";
// import { usePanelVisibility } from "./pages/components/PanelVisibilityContext"; // Update the path as necessary
// import { useActivePage } from "./pages/components/ActivePageContext"; // Ensure correct path

// main control left bar

// right bar
import WatchlistComponent from "../panel/WatchlistComponent";
import AlertsComponent from "../panel/AlertsComponent";
import HotlistComponent from "../panel/HotlistComponent";
import CalendarComponent from "../panel/CalendarComponent";
import NotesComponent from "../panel/NotesComponent";
import ChatsComponent from "../panel/ChatsComponent";
import IdeasStreamComponent from "../panel/IdeasStreamComponent";
import LiveStreamsComponent from "../panel/LiveStreamsComponent";
import CalculatorComponent from "../panel/CalculatorComponent";

import HomePanel from "../HomePanel";
import { Outlet, useNavigate } from "react-router-dom";
import { DarkModeContext } from "../pages/components/DarkModeContext";
import { usePanelVisibility } from "../pages/components/PanelVisibilityContext";
import { PanelType } from "../types";

interface PanelComponents {
  watchlist: React.ComponentType;
  alerts: React.ComponentType;
  hotlist: React.ComponentType;
  calendar: React.ComponentType;
  notes: React.ComponentType;
  chats: React.ComponentType;
  ideasStream: React.ComponentType;
  liveStreams: React.ComponentType;
  calculator: React.ComponentType;
}

const panelComponents: PanelComponents = {
  watchlist: WatchlistComponent,
  alerts: AlertsComponent,
  hotlist: HotlistComponent,
  calendar: CalendarComponent,
  notes: NotesComponent,
  chats: ChatsComponent,
  ideasStream: IdeasStreamComponent,
  liveStreams: LiveStreamsComponent,
  calculator: CalculatorComponent,
};

const MainLayout: React.FC = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const navigate = useNavigate();
  const theme = createTheme({ palette: { mode: darkMode ? "dark" : "light" } });

  // States for right sidebar panels
  // const [isWatchlistVisible, setWatchlistVisible] = useState<boolean>(false);
  // const [isAlertsVisible, setAlertsVisible] = useState<boolean>(false);
  // const [isHotlistVisible, setHotlistVisible] = useState<boolean>(false);
  // const [isCalendarVisible, setCalendarVisible] = useState<boolean>(false);
  // const [isNotesVisible, setNotesVisible] = useState<boolean>(false);
  // const [isChatsVisible, setChatsVisible] = useState<boolean>(false);
  // const [isIdeasStreamVisible, setIdeasStreamVisible] =
  //   useState<boolean>(false);
  // const [isLiveStreamsVisible, setLiveStreamsVisible] =
  //   useState<boolean>(false);
  // const [isCalculatorVisible, setCalculatorVisible] = useState<boolean>(false);

  // State to track the active panel
  const [activePanel, setActivePanel] = useState<PanelType | null>(null);

  // which panel component to switch to

  const ActivePanelComponent = activePanel ? panelComponents[activePanel] : null;

  // right panel visiblity
  const { isPanelVisible, setPanelVisible } = usePanelVisibility();

  // Function to toggle right panel flip outs panels

  // Functions to toggle visibility of right sidebar panels

  // Function to change main content and update active page in context

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation(); // Prevents the menu from closing
    toggleDarkMode();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: -5, horizontal: 10 }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>
        <Typography variant="subtitle1" sx={{ my: 1, fontSize: "0.8rem" }}>
          Flow
        </Typography>
      </MenuItem>
      <Divider />
      {/* User Info */}
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        <Typography>UserAccountBlah</Typography>
      </MenuItem>
      <Divider />
      {/* Menu Items */}
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
        {/* Non-functional fake switch */}
        <Switch
          checked={isPanelVisible}
          onChange={() => setPanelVisible(!isPanelVisible)}
          onClick={(e) => e.stopPropagation()} // Stop the menu from closing on toggle
        />
      </MenuItem>{" "}
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <BrushIcon />
        </ListItemIcon>
        <Typography>Another panel</Typography>
      </MenuItem>
      <Divider />
      {/* ... add other menu items with icons ... */}
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
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div
        className="main-container"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div className="left-sidebar">
          <div
            className="userAccountMenu"
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
            {renderMenu}
          </div>

          <Button onClick={() => navigate("/")}>
            <FontAwesomeIcon icon={faHome} />
          </Button>
          <Button onClick={() => navigate("/trade")}>
            <FontAwesomeIcon icon={faChartLine} />
          </Button>
          <Button onClick={() => navigate("/flow")}>
            <FontAwesomeIcon icon={faBroadcastTower} />
          </Button>
          <Button onClick={() => navigate("/bots")}>
            <FontAwesomeIcon icon={faRobot} />
          </Button>
          <Button onClick={() => navigate("/analytics")}>
            <FontAwesomeIcon icon={faChartLine} />
          </Button>
          <Button onClick={() => navigate("/settings")}>
            <FontAwesomeIcon icon={faCog} />
          </Button>
        </div>

        <div className="content-container">
          <div
            className={"main-content" 
            // ${
            //   isWatchlistVisible ||
            //   isAlertsVisible ||
            //   isHotlistVisible ||
            //   isCalendarVisible ||
            //   isNotesVisible ||
            //   isChatsVisible ||
            //   isIdeasStreamVisible ||
            //   isLiveStreamsVisible ||
            //   isCalculatorVisible
            //     ? "with-panel"
            //     : ""
            // }`
          }
          >
            <Outlet />

            {isPanelVisible && ActivePanelComponent && (
              <div className="panel active">
                <ActivePanelComponent />
              </div>
            )}
          </div>
          {isPanelVisible && <HomePanel setActivePanel={setActivePanel} />}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;
