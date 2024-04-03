import React from 'react';
import { Box, Avatar, TextField, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  margin: theme.spacing(1),
}));

const ProfilePhotoUpload = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

function UserProfileSettings() {
  return (
    <Box flexGrow={1} p={3} sx={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 64px)' }}>
      <Typography variant="h6" gutterBottom>
        Profile
      </Typography>
      <ProfilePhotoUpload>
        <Avatar sx={{ width: 56, height: 56 }} />
        <Button variant="contained">Upload new photo</Button>
        <Button>Delete photo</Button>
      </ProfilePhotoUpload>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
        <StyledBox sx={{ flex: 1 }}>
          <TextField fullWidth label="flow ID" variant="outlined" margin="dense" disabled />
          <TextField fullWidth label="Username" variant="outlined" margin="dense" />
          <TextField fullWidth label="Country" select variant="outlined" margin="dense" SelectProps={{ native: true }} />
          <TextField fullWidth label="Bio" variant="outlined" multiline rows={4} margin="dense" />
        </StyledBox>

        <StyledBox sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom>Online presence</Typography>
          <TextField fullWidth label="Website" variant="outlined" margin="dense" />
          <TextField fullWidth label="Twitter" variant="outlined" margin="dense" />
          <TextField fullWidth label="Discord" variant="outlined" margin="dense" />
          <TextField fullWidth label="Telegram" variant="outlined" margin="dense" />
          <Typography variant="h6" color="error" gutterBottom>Delete account</Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>Deleting your account is irreversible...</Typography>
          <Button variant="outlined" color="error">Delete account</Button>
        </StyledBox>
      </Box>
    </Box>
  );
}

export default UserProfileSettings;
