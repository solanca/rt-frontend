import React, { useEffect,useState, useContext } from 'react';
import { AppBar, Box, Button, CssBaseline, ThemeProvider, Toolbar, Typography, IconButton, createTheme, Tooltip, Menu, MenuItem, Switch } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartLine, faBroadcastTower, faRobot, faComments, faCog } from '@fortawesome/free-solid-svg-icons';
import './assets/css/App.css';
import './assets/css/table-styles.css';
import logo from './assets/logo.svg';
import { TradingPairProvider } from './pages/components/TradingPairContext';
import { DarkModeContext, DarkModeProvider } from './pages/components/DarkModeContext';
import { usePanelVisibility } from './pages/components/PanelVisibilityContext'; // Update the path as necessary
import { PanelVisibilityProvider } from './pages/components/PanelVisibilityContext';
import { ActivePageProvider } from './pages/components/ActivePageContext';
import { useActivePage } from './pages/components/ActivePageContext'; // Ensure correct path

import { ReactFlowProvider} from '@xyflow/react';



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


const panelComponents = {
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

function MainApp() {

    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    const theme = createTheme({ palette: { mode: darkMode ? 'dark' : 'light' } });

    const { setActivePage } = useActivePage(); // Use setActivePage from context

    // States for right sidebar panels
    const [isWatchlistVisible, setWatchlistVisible] = useState(false);
    const [isAlertsVisible, setAlertsVisible] = useState(false);
    const [isHotlistVisible, setHotlistVisible] = useState(false);
    const [isCalendarVisible, setCalendarVisible] = useState(false);
    const [isNotesVisible, setNotesVisible] = useState(false);
    const [isChatsVisible, setChatsVisible] = useState(false);
    const [isIdeasStreamVisible, setIdeasStreamVisible] = useState(false);
    const [isLiveStreamsVisible, setLiveStreamsVisible] = useState(false);
    const [isCalculatorVisible, setCalculatorVisible] = useState(false);

    // State for main content area (left bar menu)
    const [mainContent, setMainContent] = useState("home"); // default to "home"



    // Handler functions to update the main content state
    const showHome = () => setMainContent("home");
    const showTradeEngine = () => setMainContent("tradeEngine");
    const showSignals = () => setMainContent("signals");
    const showBots = () => setMainContent("bots");
    const showPortfolioAnalytics = () => setMainContent("portfolioAnalytics");
    const showSettings = () => setMainContent("settings");


    // State to track the active panel
    const [activePanel, setActivePanel] = useState(null);

    // which panel component to switch to
    const ActivePanelComponent = panelComponents[activePanel];

    // right panel visiblity
    const { isPanelVisible, setPanelVisible } = usePanelVisibility();


    // Function to toggle panels
    const togglePanel = (panel) => {
        setActivePanel(activePanel === panel ? null : panel);
    };

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

    const [anchorEl, setAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleThemeChange = (event) => {
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
        
         <div className = "flex-item">
   

        {mainContent === "home" && <HomeComponent />}

      {mainContent === "tradeEngine" && <TradeEngineComponent />}
      {mainContent === "signals" && <FlowComponent />}
      {mainContent === "bots" && <BotsComponent />}
      {mainContent === "portfolioAnalytics" && <PortfolioAnalyticsComponent />}
      {mainContent === "settings" && <SettingsComponent />}
   
</div>

       {isPanelVisible && ActivePanelComponent && <div className="panel active"><ActivePanelComponent /></div>}
  
  </div>
 {isPanelVisible && <HomePanel setActivePanel={setActivePanel} />}


  </div>
  </div>
  

  </ThemeProvider>

);
};

function App() {


    return (
  <ReactFlowProvider>
    <ActivePageProvider>
        <PanelVisibilityProvider>
    <DarkModeProvider>
      <TradingPairProvider>
        <MainApp />
      </TradingPairProvider>
      
    </DarkModeProvider>
      </PanelVisibilityProvider>
          </ActivePageProvider>
           </ReactFlowProvider>

    );
}

export default App;