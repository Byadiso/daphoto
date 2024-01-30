import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, Typography } from '@mui/material';
import Photo from "../photos/image1.jpg"
import LikeButton from './LikeButton';

const ImageGallery = ({ images }) => {
  return (
    <Grid container spacing={2}>
      {images.map((image, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Link to={`/post/${index}`} style={{ textDecoration: 'none' }}>
            <Paper elevation={3} style={{ padding: '10px', textAlign: 'center' }}>
              <img src={Photo} alt={`memeroy ${index}`} style={{ maxWidth: '100%', height: 'auto' }} />
              <Typography variant="subtitle1">{image.description}</Typography>
            </Paper>
          </Link>
          <LikeButton/>
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageGallery;
