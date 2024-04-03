import React from 'react';
import { Box, Typography, IconButton, Button, Switch, Tooltip, styled } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import FolderAddIcon from '@mui/icons-material/CreateNewFolder'; // This is a placeholder, replace with the actual icon import
import VaultIcon from '@mui/icons-material/AccountBalance'; // This is a placeholder, replace with the actual icon import


const AccountItem = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: theme.spacing(1),
  border: '1px solid rgba(255, 255, 255, 0.12)', // Adjust color to match your theme
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'rgba(255, 255, 255, 0.04)', // Adjust color and opacity for feint background
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', // Slight shadow for depth
  display: 'grid',
  gridTemplateColumns: 'min-content 2fr 3fr 2fr min-content', // Adjust the fractions to control the width
  gap: theme.spacing(2),
  alignItems: 'center',
}));

function ExchangeAPIView({ onNavigateToCreate, onEditClick }) {
  // Dummy data for accounts
  const accounts = [
    { name: 'Test', exchange: 'Kucoin', apiKey: '65a63...1e80e', balance: '0.00261541 BTC', balanceUSD: '170.89 USD' },
    { name: 'Kraken Paper', exchange: 'Kraken', apiKey: 'xxxxxx...698', balance: '0.35192809 BTC', balanceUSD: '22996.12 USD' },
    { name: 'Binance US Paper', exchange: 'Binance US', apiKey: 'xxxxxx...123', balance: '0.35063853 BTC', balanceUSD: '22911.85 USD' },
  ];

 return (

  <Box>
    <Typography variant="h6" gutterBottom>
      My Brokers
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}> {/* Increased gap for spacing */}
      {/* Vault Button - Placeholder, replace with actual button */}
      <Button variant="contained" startIcon={<VaultIcon />}>Vault</Button>

      {/* Create Folder Button */}
      <Tooltip title="Create Folder">
        <IconButton>
          <FolderAddIcon />
        </IconButton>
      </Tooltip>

      {/* Paper Trading Button - Made lighter */}
      <Button onClick={onNavigateToCreate} variant="contained" sx={{ backgroundColor: '#f0f0f0', color: '#000', '&:hover': { backgroundColor: '#e0e0e0' } }}>
        <AddIcon />
        Paper Trading
      </Button>

      {/* Connect Account Button */}
      <Tooltip title="Connect">
        <Button onClick={onNavigateToCreate} variant="contained" sx={{ backgroundColor: 'green', '&:hover': { backgroundColor: '#45a045' } }}>
          <AddIcon />
          Connect Account
        </Button>
      </Tooltip>
    </Box>
    <Box>
      {accounts.map((account, index) => (
        <AccountItem key={index}>
          {/* Sideways switch */}
          <Switch
            edge="end"
            inputProps={{ 'aria-label': 'account status' }}
          />
          {/* Account Info */}
          <Box>
            <Typography variant="subtitle1">{account.name}</Typography>
            <Typography variant="body2">{account.exchange}</Typography>
          </Box>
          {/* API Key/Secret */}
          <Typography variant="body2">{account.apiKey}</Typography>
          {/* Balance */}
          <Box>
            <Typography variant="body2">{account.balance}</Typography>
            <Typography variant="body2">{account.balanceUSD}</Typography>
          </Box>
          {/* Edit Icon */}
          <IconButton onClick={() => onEditClick(index)}>
            <EditIcon />
          </IconButton>
        </AccountItem>
      ))}
    </Box>
  </Box>
);
}

export default ExchangeAPIView;