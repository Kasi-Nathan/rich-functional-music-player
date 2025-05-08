import React from "react";
import { Link } from "react-router-dom";
import TrackData from "../tracks.json";
import { Navigate } from "react-router-dom";

const HomePage = () => {

    const handlePlay = () =>{

    };
  return (
    <>
    <div style={{backgroundColor:'black'}}>
      <div className="home-page text-center" style={{color:'red'}}>
        <h1>Welcome to the Home Page</h1>
        <p>This is your home page. You can navigate to the player from here.</p>
        <Link to="/music" className="btn btn-primary">Go to Player</Link>
      </div>

      <div className="container mt-5">
        <div className="row g-4">
          {TrackData.map((track, index) => (
            <div className="col-md-2"  key={track.id || index}>
              <div className="card h-100" onClick={handlePlay} style={{cursor:'pointer'}}>
                <img
                  className="card-img-top"
                  src={track.localArt} // or track.artworkUrl if needed
                  alt={track.title}
                />
                <div className="card-body">
                  <h5 className="card-title font-weight-bold">{track.title}</h5>
                  <p className="card-text">{track.songArtist}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default HomePage;





