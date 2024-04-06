// RightPanel.js
import React from 'react';
import { Tooltip, IconButton } from '@mui/material';

import {WatchlistIcon} from "./assets/icons/right-panel/watchlist.tsx";
import {AlertsIcon} from "./assets/icons/right-panel/alerts.tsx";
import {HotlistIcon} from "./assets/icons/right-panel/hotlist.tsx";
import {CalendarIcon} from "./assets/icons/right-panel/calendar.tsx";
import {NotesIcon} from "./assets/icons/right-panel/notes.tsx";
import {ChatsIcon} from "./assets/icons/right-panel/chats.tsx";
import {IdeasIcon} from "./assets/icons/right-panel/ideas.tsx";
import {LivestreamIcon} from "./assets/icons/right-panel/livestream.tsx";
import {CalculatorIcon} from "./assets/icons/right-panel/calculator.tsx";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComments,
  faLightbulb,
  faBroadcastTower,
  faCalculator,
} from '@fortawesome/free-solid-svg-icons';

import { PanelType } from './types';

type Props = {
  setActivePanel:React.Dispatch<React.SetStateAction<PanelType|null>>
}

const RightPanel = ({ setActivePanel }:Props) => {
  // Function to toggle panels
  const togglePanel = (panel:PanelType) => {
    setActivePanel((currentPanel:PanelType|null) => currentPanel === panel ? null : panel);
  };

  return (
    <div className="right-sidebar">
      <Tooltip title="Watchlist" placement="left">
        <IconButton onClick={() => togglePanel('watchlist')}>
          <div className="panel-small-icon">
        <WatchlistIcon />
          </div>
        </IconButton>
      </Tooltip>
      <Tooltip title="Alerts" placement="left">
        <IconButton onClick={() => togglePanel('alerts')}>
        <div className="panel-small-icon">
        <AlertsIcon />
          </div>
        </IconButton>
      </Tooltip>
      <Tooltip title="Hotlist" placement="left">
        <IconButton onClick={() => togglePanel('hotlist')}>
        <div className="panel-small-icon">
        <HotlistIcon />
          </div>
        </IconButton>
      </Tooltip>
      <Tooltip title="Calendar" placement="left">
        <IconButton onClick={() => togglePanel('calendar')}>
        <div className="panel-small-icon">
        <CalendarIcon />
          </div>
        </IconButton>
      </Tooltip>
      <Tooltip title="Notes" placement="left">
        <IconButton onClick={() => togglePanel('notes')}>
        <div className="panel-small-icon">
        <NotesIcon />
          </div>
        </IconButton>
      </Tooltip>
      <Tooltip title="Chats" placement="left">
        <IconButton onClick={() => togglePanel('chats')}>
        <div className="panel-small-icon">
        <ChatsIcon />
          </div>
        </IconButton>
      </Tooltip>
      <Tooltip title="Ideas Stream" placement="left">
        <IconButton onClick={() => togglePanel('ideasStream')}>
        <div className="panel-small-icon">
        <IdeasIcon />
          </div>
        </IconButton>
      </Tooltip>
      <Tooltip title="Live Streams" placement="left">
        <IconButton onClick={() => togglePanel('liveStreams')}>
        <div className="panel-small-icon">
        <LivestreamIcon />
          </div>
        </IconButton>
      </Tooltip>
      <Tooltip title="Calculator" placement="left">
        <IconButton onClick={() => togglePanel('calculator')}>
        <div className="panel-small-icon">
        <CalculatorIcon />
          </div>
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default RightPanel;
