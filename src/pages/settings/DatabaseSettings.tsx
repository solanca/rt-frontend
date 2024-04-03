import React, { useState } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

const handleClearInfluxDatabase = async () => {
  // Your existing handleClearDatabase function
  try {
    const response = await fetch('http://127.0.0.1:8080/api/clear_database', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error(`Error clearing database: ${response.status}`);
    alert('InfluxDB cleared successfully');
  } catch (error) {
    console.error("Error clearing InfluxDB:", error);
    alert(`Error clearing InfluxDB: ${error.message}`);
  }
};

const handleClearPostgresDatabase = () => {
  // Dummy function for PostgreSQL
  alert('Clear PostgresDB function not implemented yet');
};

function DatabaseSettings() {
  return (
    <Box>
      <Typography variant="h6">Database Settings</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          {/* Database actions */}
          <Typography variant="h6">InfluxDB</Typography>
          <Button variant="contained" color="error" onClick={handleClearInfluxDatabase}>
            Clear InfluxDB
          </Button>

          <Typography variant="h6" style={{ marginTop: '20px' }}>PostgreSQL</Typography>
          <Button variant="contained" color="error" onClick={handleClearPostgresDatabase}>
            Clear PostgresDB
          </Button>
        </Grid>

        <Grid item xs={12} md={6}>
          {/* Database console outputs */}
          <Typography variant="h6">InfluxDB Console Output</Typography>
          <Box border={1} height="200px" marginBottom="20px">
            {/* Placeholder or actual content */}
          </Box>

          <Typography variant="h6">PostgreSQL Console Output</Typography>
          <Box border={1} height="200px">
            {/* Placeholder or actual content */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DatabaseSettings;
