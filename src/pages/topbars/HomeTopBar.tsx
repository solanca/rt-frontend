import React from 'react';
import { IconButton, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

function HomeTopBar() {
  return (
    <div className="TopBarPanel">
    <div className="TopBarContent">
      <IconButton>
        <HomeIcon />
      </IconButton>
      {/* Add more icons or components specific to HomeTopBar */}
      <p>Home Top Bar Placeholder</p>
      </div>
</div>
  );
}

export default HomeTopBar;
