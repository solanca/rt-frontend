import React, { useEffect,useState, useContext } from 'react';
import { AppBar, Box, Button, CssBaseline, ThemeProvider, Toolbar, Typography, IconButton, createTheme, Tooltip, Menu, MenuItem, Switch } from '@mui/material';

// css
import './assets/css/App.css';
import './assets/css/table-styles.css';

//icons n graphic stuff
import AccountCircle from '@mui/icons-material/AccountCircle';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartLine, faBroadcastTower, faRobot, faComments, faCog } from '@fortawesome/free-solid-svg-icons';
import { ListItemIcon, Divider } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import HelpIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LanguageIcon from '@mui/icons-material/Language';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import BrushIcon from '@mui/icons-material/Brush'; // Assuming this is for "Drawings panel"
import GTranslateIcon from '@mui/icons-material/GTranslate'; // Assuming this is for "Language"
import KeyboardIcon from '@mui/icons-material/Keyboard'; // Assuming this is for "Keyboard shortcuts"
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows'; // Assuming this is for "Get desktop app"
import ExitToAppIcon from '@mui/icons-material/ExitToApp'; // Assuming this is for "Sign out"
import logo from './assets/logo.svg';

// contexts and global
import { TradingPairProvider } from './pages/components/TradingPairContext';
import { DarkModeContext, DarkModeProvider } from './pages/components/DarkModeContext';
import { usePanelVisibility } from './pages/components/PanelVisibilityContext'; // Update the path as necessary
import { PanelVisibilityProvider } from './pages/components/PanelVisibilityContext';
import { ActivePageProvider } from './pages/components/ActivePageContext';
import { useActivePage } from './pages/components/ActivePageContext'; // Ensure correct path

// main control left bar
import HomeComponent from './pages/HomeComponent';
import TradeEngineComponent from './pages/TradeEngineComponent';
import FlowComponent from './pages/FlowComponent';
import BotsComponent from './pages/BotsComponent';
import PortfolioAnalyticsComponent from './pages/PortfolioAnalyticsComponent';
import SettingsComponent from './pages/SettingsComponent';

// right bar
import WatchlistComponent from './panel/WatchlistComponent';
import AlertsComponent from './panel/AlertsComponent';
import HotlistComponent from './panel/HotlistComponent';
import CalendarComponent from './panel/CalendarComponent';
import NotesComponent from './panel/NotesComponent';
import ChatsComponent from './panel/ChatsComponent';
import IdeasStreamComponent from './panel/IdeasStreamComponent';
import LiveStreamsComponent from './panel/LiveStreamsComponent';
import CalculatorComponent from './panel/CalculatorComponent';

import HomePanel from './HomePanel';

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

const App: React.FC = () => {

  const { darkMode, toggleDarkMode } = useContext(DarkModeContext); 

  const theme = createTheme({ palette: { mode: darkMode ? 'dark' : 'light' } });

  const { setActivePage } = useActivePage();

    // States for right sidebar panels
  const [isWatchlistVisible, setWatchlistVisible] = useState<boolean>(false);
  const [isAlertsVisible, setAlertsVisible] = useState<boolean>(false);
  const [isHotlistVisible, setHotlistVisible] = useState<boolean>(false);
  const [isCalendarVisible, setCalendarVisible] = useState<boolean>(false);
  const [isNotesVisible, setNotesVisible] = useState<boolean>(false);
  const [isChatsVisible, setChatsVisible] = useState<boolean>(false);
  const [isIdeasStreamVisible, setIdeasStreamVisible] = useState<boolean>(false);
  const [isLiveStreamsVisible, setLiveStreamsVisible] = useState<boolean>(false);
  const [isCalculatorVisible, setCalculatorVisible] = useState<boolean>(false);

    // State for main content area (set by left bar menu)
  const [mainContent, setMainContent] = useState<string>("home"); // default to "home"

    // Handler functions to update the main content state
  const showHome = (): void => setMainContent("home");
  const showTradeEngine = (): void => setMainContent("tradeEngine");
  const showSignals = (): void => setMainContent("signals");
  const showBots = (): void => setMainContent("bots");
  const showPortfolioAnalytics = (): void => setMainContent("portfolioAnalytics");
  const showSettings = (): void => setMainContent("settings");

    // State to track the active panel
    const [activePanel, setActivePanel] = useState<string | null>(null);

    // which panel component to switch to
    const ActivePanelComponent = panelComponents[activePanel];

    // right panel visiblity
    const { isPanelVisible, setPanelVisible } = usePanelVisibility();

    // Function to toggle right panel flip outs panels
    const togglePanel = (panel: string) => setActivePanel(activePanel === panel ? null : panel);

    const handleToggle = () => {
        setPanelVisible(!isPanelVisible);
    };

    // Functions to toggle visibility of right sidebar panels
    const toggleWatchlist = () => setWatchlistVisible(!isWatchlistVisible);
    const toggleAlerts = () => setAlertsVisible(!isAlertsVisible);
    const toggleHotlist = () => setHotlistVisible(!isHotlistVisible);
    const toggleCalendar = () => setCalendarVisible(!isCalendarVisible);
    const toggleNotes = () => setNotesVisible(!isNotesVisible);
    const toggleChats = () => setChatsVisible(!isChatsVisible);
    const toggleIdeasStream = () => setIdeasStreamVisible(!isIdeasStreamVisible);
    const toggleLiveStreams = () => setLiveStreamsVisible(!isLiveStreamsVisible);
    const toggleCalculator = () => setCalculatorVisible(!isCalculatorVisible);


    // Function to change main content and update active page in context
    const changeMainContent = (content) => {
        setMainContent(content); // Update local state
        setActivePage(content);  // Update context
    };

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const isMenuOpen = Boolean(anchorEl);
    
    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    
    const handleThemeChange = (event: React.MouseEvent) => {
        event.stopPropagation(); // Prevents the menu from closing
        toggleDarkMode();
    };
    
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
    anchorEl={anchorEl}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    id={menuId}
    keepMounted
    transformOrigin={{ vertical: -5, horizontal: 10 }}
    open={isMenuOpen}
    onClose={handleMenuClose}
  >
   <MenuItem>
     <Typography variant="subtitle1" sx={{ my: 1, fontSize: '0.8rem' }}>Flow</Typography>


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
    <Switch checked={darkMode} onChange={handleThemeChange} onClick={(e) => e.stopPropagation()} />
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
    onClick={(e) => e.stopPropagation()}  // Stop the menu from closing on toggle
  />
</MenuItem>      <MenuItem onClick={handleMenuClose}>
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
   
  
    <div className="main-container" style={{ display: 'flex', flexDirection: 'row' }}>

 
  

  
    <div className="left-sidebar">

    <div className='userAccountMenu' style={{ width: '10px', flexDirection: 'column' }}>
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


  <Button onClick={() => { setMainContent("home"); setActivePage("home"); }}><FontAwesomeIcon icon={faHome} /></Button>
<Button onClick={() => { setMainContent("tradeEngine"); setActivePage("tradeEngine"); }}><FontAwesomeIcon icon={faChartLine} /></Button>
<Button onClick={() => { setMainContent("signals"); setActivePage("signals"); }}><FontAwesomeIcon icon={faBroadcastTower} /></Button>
<Button onClick={() => { setMainContent("bots"); setActivePage("bots"); }}><FontAwesomeIcon icon={faRobot} /></Button>
<Button onClick={() => { setMainContent("portfolioAnalytics"); setActivePage("portfolioAnalytics"); }}><FontAwesomeIcon icon={faChartLine} /></Button>
<Button onClick={() => { setMainContent("settings"); setActivePage("settings"); }}><FontAwesomeIcon icon={faCog} /></Button>
 </div>

 <div className="content-container">
   
    <div className={`main-content ${isWatchlistVisible || isAlertsVisible || isHotlistVisible || isCalendarVisible || isNotesVisible || isChatsVisible || isIdeasStreamVisible || isLiveStreamsVisible || isCalculatorVisible ? 'with-panel' : ''}`}>
        
      
   

        {mainContent === "home" && <HomeComponent />}

      {mainContent === "tradeEngine" && <TradeEngineComponent />}
      {mainContent === "signals" && <FlowComponent />}
      {mainContent === "bots" && <BotsComponent />}
      {mainContent === "portfolioAnalytics" && <PortfolioAnalyticsComponent />}
      {mainContent === "settings" && <SettingsComponent />}


       {isPanelVisible && ActivePanelComponent && <div className="panel active"><ActivePanelComponent /></div>}
  
  </div>
 {isPanelVisible && <HomePanel setActivePanel={setActivePanel} />}


  </div>
  </div>
  

  </ThemeProvider>

);
}

export default App;