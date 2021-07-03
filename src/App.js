import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import VideoCard from "./VideoCard";
import db from "./firebase"
import robin1 from "./1.mp4"
import robin2 from "./2.mp4"

function App() {
  const [reels, setReels] = useState([])
  useEffect(() => {
    db.collection('reels').onSnapshot(snapshot => (
      setReels(snapshot.docs.map(doc => doc.data()))
    ))
  }, [])
  return (
    <div className="app">
      <div className="app_top">
        <img
          className="app_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/198px-Instagram_logo_2016.svg.png"
          alt="abc"
        />
        <h2>Reels</h2>
      </div>
      <div className="app_videos">
        <VideoCard
        channel="reelsforindia"
        avatarSrc={"https://bit.ly/3y0d5hh"}
        song={"test song - abc"}
        url={robin1}
        likes={950}
        shares={40}
        />
        <VideoCard
        channel="okvelvet"
        avatarSrc={"https://bit.ly/3h13uRr"}
        song={"test song - abc"}
        url={robin2}
        likes={750}
        shares={50} />
      </div>
    </div>
  );
}

export default App;
