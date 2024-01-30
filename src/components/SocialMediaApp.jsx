import React from "react";

import { BrowserRouter as  Routes, Route} from "react-router-dom";

import UploadPhoto from "./UploadPhoto.jsx";
import PostText from "./PostText.jsx";
import CommentSection from "./CommentSection.jsx";
import LikeButton from "./LikeButton.jsx";
import Home from "./Home.jsx";

const SocialMediaApp = () => {
  return (
  
      <div>
        <h1>Social Media App</h1>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/upload" component={UploadPhoto} />
          <Route path="/post" component={PostText} />
          <Route path="/comment" component={CommentSection} />
          <Route path="/like" component={LikeButton} />
        </Routes>
      </div>
  
  );
};

export default SocialMediaApp;
