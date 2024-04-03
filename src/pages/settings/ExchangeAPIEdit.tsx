import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const ExchangeAPIEdit = ({ onSave, onCancel, account }) => {
  return (
    <Box>
      <Typography variant="h6">Edit API Exchange Account</Typography>
      {/* Include fields pre-filled with account data */}
      <TextField
        label="Account Name"
        defaultValue={account ? account.name : ''}
        fullWidth
        margin="normal"
      />
      {/* ...other fields... */}
      <Box mt={2}>
        <Button variant="contained" onClick={() => onSave(account)}>Save</Button>
        <Button onClick={onCancel}>Cancel</Button>
      </Box>
    </Box>
  );
};

export default ExchangeAPIEdit;
