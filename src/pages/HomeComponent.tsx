
import React, { useState } from 'react';
import TreeDocComponent from './components/tree-doc'; // Adjust the path if necessary
import TreeViewComponent from './components/tree-view'; // Adjust the path if necessary
import HomeTopBar from './topbars/HomeTopBar';
import { AppBar, Box, Button, CssBaseline, ThemeProvider, Toolbar, Typography, IconButton, createTheme } from '@mui/material';


function HomeComponent() {

  const [selectedFilePath, setSelectedFilePath] = useState('');

   const handleFileSelected = (filePath) => {
        setSelectedFilePath(filePath);
    };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column', // Use column for vertical alignment
    alignItems: 'center',
    //justifyContent: 'top',
    height: '100vh',
    
   background: 'linear-gradient(to right, rgba(131, 164, 212, 0.5), rgba(182, 251, 255, 0.1))',

    padding: '10px', // Add some padding around the content
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'row', // Use row for horizontal alignment
    
    justifyContent: 'space-between',
    width: '100%', // Use full width of the container
  };

  const textStyle = {
   
  };

  const treeViewStyle = {
   width: '100%', // Adjust the width as needed
    height: '400px', // Adjust the height as needed
    border: '1px solid rgba(255, 255, 255, 0.1)', // Faint outline
    borderRadius: '10px', // Optional: rounded corner
    overflow: 'auto', // Add scrollbars if content overflows
    // background: 'rgba(255, 255, 255, 0.8)', // Faint background
    padding: '10px', // Padding inside the tree container

  };

  const treeContainerStyle = {
    width: '450px', // Adjust the width as needed
    height: '400px', // Adjust the height as needed
    border: '1px solid rgba(255, 255, 255, 0.1)', // Faint outline
    borderRadius: '10px', // Optional: rounded corners
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'auto', // Add scrollbars if content overflows
    // background: 'rgba(255, 255, 255, 0.1)', // Faint background
    padding: '10px', // Padding inside the tree container
  };

  return (
<>
<div className = "flex-item">
        <HomeTopBar />


    <div style={containerStyle}>
      <h1>Welcome to your trading app</h1>
    
      <div style={contentStyle}>
      <div style={treeViewStyle}>
      <TreeViewComponent filePath={selectedFilePath} />
      </div>
        <div>

         
        <div style={treeContainerStyle}>


           <TreeDocComponent onFileSelect={handleFileSelected} />
        </div>
      
         </div>
      </div>
         <div style={textStyle}>
          <p>Here's some text about the app. Maybe a quick guide or an overview of features.</p>
          <p>Feel free to explore the documentation on the right to get more information about the available functionalities.</p>
        </div>
    </div>
    </div>
    </>
  );
}

export default HomeComponent;
