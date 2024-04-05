// HomePanel.js
import React from 'react';
import { Tooltip, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faList,
  faBell,
  faFire,
  faCalendarAlt,
  faStickyNote,
  faComments,
  faLightbulb,
  faBroadcastTower,
  faCalculator,
} from '@fortawesome/free-solid-svg-icons';
import { PanelType } from './types';
type Props = {
  setActivePanel:React.Dispatch<React.SetStateAction<PanelType|null>>
}
const HomePanel = ({ setActivePanel }:Props) => {
  // Function to toggle panels
  const togglePanel = (panel:PanelType) => {
    setActivePanel((currentPanel:PanelType|null) => currentPanel === panel ? null : panel);
  };

  return (
    <div className="right-sidebar">
      <Tooltip title="Watchlist" placement="left">
        <IconButton onClick={() => togglePanel('watchlist')}>
          <FontAwesomeIcon icon={faList} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Alerts" placement="left">
        <IconButton onClick={() => togglePanel('alerts')}>
          <FontAwesomeIcon icon={faBell} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Hotlist" placement="left">
        <IconButton onClick={() => togglePanel('hotlist')}>
          <FontAwesomeIcon icon={faFire} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Calendar" placement="left">
        <IconButton onClick={() => togglePanel('calendar')}>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Notes" placement="left">
        <IconButton onClick={() => togglePanel('notes')}>
          <FontAwesomeIcon icon={faStickyNote} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Chats" placement="left">
        <IconButton onClick={() => togglePanel('chats')}>
          <FontAwesomeIcon icon={faComments} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Ideas Stream" placement="left">
        <IconButton onClick={() => togglePanel('ideasStream')}>
          <FontAwesomeIcon icon={faLightbulb} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Live Streams" placement="left">
        <IconButton onClick={() => togglePanel('liveStreams')}>
          <FontAwesomeIcon icon={faBroadcastTower} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Calculator" placement="left">
        <IconButton onClick={() => togglePanel('calculator')}>
          <FontAwesomeIcon icon={faCalculator} />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default HomePanel;
