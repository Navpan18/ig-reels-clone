import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import VideoCard from "./VideoCard";
import db from "./firebase"

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
        url={"https://icecube-eu-830.icedrive.io/download?p=TPZh_dZAlH2htfpwQOlz5lAtiikqcyvZCtRKGfOAp1J0jdbEzqAuW1acqoq4BIE.avQiXloKy3IZPqUV8VmlMMaPKn7hPXTeOinTZb8Rksf_aNe3D_sssI26g6IxupBqlvbV3aCvcEMFtHoGihdCq5qkJuWdaERIvtQWojQFSf06ILsnm9vsVw4zLZd99aAtmHKFJDJ6JrhMqvgoBND6j83ta4Hfbarxgr4wla5vsMFIq1tZgAO0shcTNJqFxpgU"}
        likes={950}
        shares={40}
        />
        <VideoCard
        channel="okvelvet"
        avatarSrc={"https://bit.ly/3h13uRr"}
        song={"test song - abc"}
        url={"https://icecube-eu-830.icedrive.io/download?p=TPZh_dZAlH2htfpwQOlz5lAtiikqcyvZCtRKGfOAp1Io.ibrAKPGf4_N8J6PNNkbavQiXloKy3IZPqUV8VmlMMaPKn7hPXTeOinTZb8RkseK0L4vdqkQ8.8m3Llx.rp2n7CZFyyncsFmxfiH8myAxMgGplUBwcdE6yyhPnEstXfqYuu29uw9qbDDfzRLrBxi3JmEwIV5m._IV7.6pRnx47IpT57YGjrFM9dgVRFQAuMZItJdpG_wtPqFtySjcuuT"}
        likes={750}
        shares={50} />
      </div>
    </div>
  );
}

export default App;
