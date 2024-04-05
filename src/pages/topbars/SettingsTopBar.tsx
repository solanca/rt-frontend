import { IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

function SettingsTopBar() {
  return (
    <div className="TopBarPanel">
      <div className="TopBarContent">
        <IconButton>
          <SettingsIcon />
        </IconButton>
        {/* Add more icons or components specific to SettingsTopBar */}
        <>
          <p>Settings Top Bar Placeholder</p>
        </>
      </div>
    </div>
  );
}

export default SettingsTopBar;
