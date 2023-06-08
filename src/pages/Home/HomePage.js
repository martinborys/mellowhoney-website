import React from "react";
import "./home.css";
import Navbar from "../../components/Navbar";
import VideoGallery from "../../components/Video";

export default function Home() {
  return (
    <div className="homepage">
      <Navbar />
      <VideoGallery />
    </div>
  );
}
