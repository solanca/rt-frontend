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
import "../assets/css/order-widget.css";
import "../assets/css/user-menu.css";
import "../assets/css/topbar.css";
import "../assets/css/left-menu.css";
import "../assets/css/trade-terminal-widgets.css";
import "../assets/css/right-panel.css";
import "../assets/css/react-flow.css";


import {FlowSchemaIcon} from "../assets/icons/left-menu/schema.tsx";
import {PortfolioIcon} from "../assets/icons/left-menu/portfolio.tsx";
import {AnalyticsIcon} from "../assets/icons/left-menu/analytics.tsx";


//icons n graphic stuff

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChartLine,
  faBroadcastTower,
  faRobot,
  faCog,
} from "@fortawesome/free-solid-svg-icons";


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

import RightPanel from "../RightPanel";
import UserAccountMenu from "../UserAccountMenu";

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

  // State to track the active panel
  const [activePanel, setActivePanel] = useState<PanelType | null>(null);

  // which panel component to switch to
  const ActivePanelComponent = activePanel ? panelComponents[activePanel] : null;

  // right panel visiblity
  const { isPanelVisible, setPanelVisible } = usePanelVisibility();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        className="main-container"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div className="left-sidebar">
            <UserAccountMenu />
          <Button onClick={() => navigate("/")}>
            <FontAwesomeIcon icon={faHome} />
          </Button>
          <Button onClick={() => navigate("/trade")}>
            <FontAwesomeIcon icon={faChartLine} />
          </Button>
          <Button onClick={() => navigate("/flow")}>
          <FlowSchemaIcon className="small-icon"/>
          </Button>
          <Button onClick={() => navigate("/bots")}>
            <FontAwesomeIcon icon={faRobot} />
          </Button>
          <Button onClick={() => navigate("/portfolio")}>
          <PortfolioIcon className="small-icon"/>
          </Button>
          <Button onClick={() => navigate("/analytics")}>     
          <AnalyticsIcon className="small-icon"/>
          </Button>
          <Button onClick={() => navigate("/settings")}>
            <FontAwesomeIcon icon={faCog} />
          </Button>
        </div>

        <div className="content-container">
          <div
            className={"main-content" }
          >
            <Outlet />

            {isPanelVisible && ActivePanelComponent && (
              <div className="panel active">
                <ActivePanelComponent />
              </div>
            )}
          </div>
          {isPanelVisible && <RightPanel setActivePanel={setActivePanel} />}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;
