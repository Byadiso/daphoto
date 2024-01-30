import React from 'react';
import { useParams } from 'react-router-dom';
import { Paper, Typography } from '@mui/material';
import photo from "../photos/image1.jpg"

const SinglePost = () => {
  const { id } = useParams();


  return (
    <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
      <img src={photo.url} alt={`photo ${id}`} style={{ maxWidth: '100%', height: 'auto' }} />
      <Typography variant="h6" gutterBottom>{photo.fullText}</Typography>
    </Paper>
  );
};

export default SinglePost;
