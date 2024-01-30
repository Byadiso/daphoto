import React, { useState } from 'react';
import { Button, Container, Typography, Box } from '@mui/material';

const UploadPhoto = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
      // Implement upload logic here
    } else {
      console.log('No file selected.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h2" gutterBottom>
        Upload Photo
      </Typography>
      <Box mb={2}>
        <input type="file" onChange={handleFileChange} />
      </Box>
      <Box mb={2}>
        <Button variant="contained" color="primary" onClick={handleUpload}>
          Upload
        </Button>
      </Box>
    </Container>
  );
};

export default UploadPhoto;
