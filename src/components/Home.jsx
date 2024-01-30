import React from "react";
import { Link } from "react-router-dom";
import LikeButton from "./LikeButton";

import images from "../photos/images.jsx"
import ImageGallery from "./ImageGallery";

const Home = () => (
  <div>
    <h1>Welcome to my website</h1>

    <p>Explore different features:</p>
    <ul>
      <li>
        <Link to="/upload">Upload Photo</Link>
      </li>
      <li>
        <Link to="/post">Post Text</Link>
      </li>
      <li>
        <Link to="/comment">Comment Section</Link>
      </li>
      
    </ul>

    <ImageGallery images={images} />

  </div>
);

export default Home;
