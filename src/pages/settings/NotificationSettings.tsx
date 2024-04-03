import React from 'react';
import {
  Box,
  Typography,
  Button,
  Slider,
  Select,
  MenuItem,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Grid,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';


const CustomPaper = styled(Paper)(({ theme }) => ({
  borderColor: 'rgba(0, 0, 0, 0.12)',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.default,
  marginBottom: theme.spacing(2),
  overflow: 'hidden', // Ensures the content does not spill out
}));

const TitleBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.action.hover,
  padding: theme.spacing(1),
  borderTopLeftRadius: theme.shape.borderRadius,
  borderTopRightRadius: theme.shape.borderRadius,
}));

const CustomSoundsBox = styled(Box)(({ theme }) => ({
  minHeight: '150px', // Adjust as needed
  // ...other styles...
}));

const NotificationSection = ({ title }) => (
  <CustomPaper>
    <TitleBox>
      <Typography variant="subtitle1">{title}</Typography>
    </TitleBox>
    <Box p={2}>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Push notifications" />
        <FormControlLabel control={<Checkbox />} label="Email" />
      </FormGroup>
      <FormControl fullWidth size="small" margin="dense">
        <Select>
          <MenuItem value="sound1">Sound 1</MenuItem>
          <MenuItem value="sound2">Sound 2</MenuItem>
          {/* Add more sounds as MenuItems here */}
        </Select>
      </FormControl>
      <Button size="small">Play sound</Button>
      <Typography gutterBottom>Sound Volume</Typography>
      <Slider defaultValue={30} />
    </Box>
  </CustomPaper>
);

function NotificationSettings() {
  return (
    <Grid container spacing={2}>
      {['Trade Alerts', 'Custom Alert', 'Signal Alerts', 'Default Alerts', 'Scan Alerts'].map((alert) => (
        <Grid item xs={12} sm={6} md={4} key={alert}>
          <NotificationSection title={alert} />
        </Grid>
      ))}

           <Grid item xs={12}> 
           <CustomSoundsBox>
        <CustomPaper>
          <TitleBox>
            <Typography variant="subtitle1">
              Custom Sounds
            </Typography>
          </TitleBox>
          <Box p={2}>
            <Typography variant="body2" gutterBottom>
              You can upload custom sound to use for alerts. Sounds will be saved to your account and seen across all devices.
            </Typography>
            <Box display="flex" padding="0px" alignItems="flex-start" mt={2}>
              <Button variant="contained" component="label">
                Upload Sound
                <input type="file" hidden />
              </Button>
              <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
                Delete Sound
              </Button>
            </Box>
              
          </Box>
        </CustomPaper>
         </CustomSoundsBox>
      </Grid>
    </Grid>
  );
}

export default NotificationSettings;
