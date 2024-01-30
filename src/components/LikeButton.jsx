import React, { useState } from 'react';
import Button from '@mui/material/Button';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
    setLiked(!liked);
  };

  return (
    <div>     
      <Button variant="contained" color="primary" onClick={handleLike}>
        {liked ? 'Unlike' : 'Like'}
      </Button>
      <p>Likes: {likes}</p>
    </div>
  );
};

export default LikeButton;
