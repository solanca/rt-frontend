import React from 'react';
import { Box, Typography, Button, TextField, styled, Grid, IconButton } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security'; // You can choose an appropriate icon
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/VpnKey';
import VisibilityIcon from '@mui/icons-material/Visibility';

const SecuritySection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  margin: theme.spacing(2),
  border: '1px solid rgba(255, 255, 255, 0.12)',
  boxShadow: theme.shadows[2], // Add shadow for depth
}));

function AccountSecurity() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h6" gutterBottom>
        Account Security
      </Typography>
      
      <Grid container spacing={3}>
        {/* 2FA Section */}
        <Grid item xs={12} md={6}>
          <SecuritySection>
            <Box display="flex" alignItems="center" marginBottom={2}>
              <SecurityIcon color="warning" sx={{ marginRight: 2 }} />
              <Typography variant="h6">2 Factor Authentication</Typography>
            </Box>
            <Typography variant="body1" paragraph>
              Protect your account with an extra layer of security. Once configured you'll be required to enter both your password and an authentication code from your mobile phone in order to sign in.
            </Typography>
            <Button variant="contained" color="primary" startIcon={<KeyIcon />}>
              Enable 2FA
            </Button>
          </SecuritySection>
        </Grid>

        {/* Change Email and Password Section */}
        <Grid item xs={12} md={6}>
          <SecuritySection>
            {/* Change Email Section */}
            <Box display="flex" alignItems="center" marginBottom={2}>
              <EmailIcon sx={{ marginRight: 2 }} />
              <Typography variant="h6">Change Email Address</Typography>
            </Box>
            <TextField
              fullWidth
              label="Enter your new email address"
              variant="outlined"
              margin="normal"
            />
            <Button variant="contained" sx={{ marginTop: 1 }}>
              Change Email
            </Button>
          </SecuritySection>

          {/* Change Password Section */}
          <SecuritySection>
            <Box display="flex" alignItems="center" marginBottom={2}>
              <KeyIcon sx={{ marginRight: 2 }} />
              <Typography variant="h6">Change Password</Typography>
            </Box>
            <TextField
              fullWidth
              label="Current Password"
              type="password"
              variant="outlined"
              margin="normal"
            />
            <Box display="flex" alignItems="center" marginY={1}>
              <TextField
                fullWidth
                label="New Password"
                type="password"
                variant="outlined"
                margin="normal"
                sx={{ marginRight: 2 }}
              />
              <IconButton>
                <VisibilityIcon />
              </IconButton>
            </Box>
            <Button variant="contained" sx={{ marginTop: 1 }}>
              Change Password
            </Button>
          </SecuritySection>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AccountSecurity;
