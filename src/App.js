import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CommentSection from "./components/CommentSection";
import Home from "./components/Home.jsx";
import PostText from "./components/PostText.jsx";
import UploadPhoto from "./components/UploadPhoto";
import SinglePost from "./components/SinglePost";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comment" element={<CommentSection />} />
          <Route path="/upload" element={<UploadPhoto />} />
          <Route path="/post" element={<PostText />} />
          <Route path="/post/:id" render={<SinglePost  />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
