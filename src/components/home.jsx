import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TrackData from "../tracks.json";
import { useMusic } from "../context/MusicContext";

const HomePage = () => {
  const {
    handleRedirect
  } = useMusic();
  const { setCurrentTrackIndex } = useMusic();

  const navigate = useNavigate();
  const handlePlay = (index) => {
    setCurrentTrackIndex(index);
    navigate("/music");
  };

  return (
    <>
      <div style={{ backgroundColor: 'black' }}>
        {/* <div className="home-page text-center" style={{ color: 'red' }}>
          <h1>Welcome to the Home Page</h1>
          <p>This is your home page. You can navigate to the player from here.</p>
          <Link to="/music" className="btn btn-primary">Go to Player</Link>
        </div> */}
        <div className="paddingadjust"></div>
        <div className="text-center py-4">
          <input
            type="text"
            placeholder="Search by title or artist..."
            onFocus={handleRedirect}
            style={{
              width: "300px",
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#1e1e1e",
              color: "white",
              marginRight: "10px"
            }}
          />
          <button
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#4CAF50",
              color: "white",
              cursor: "pointer"
            }}
          >
            Search
          </button>
        </div>


        <div className="container mt-5">
          <div className="row g-4">
            {TrackData.map((track, index) => (
              <div className="col-md-2" key={track.id || index}>
                <div className="card h-100" onClick={() => handlePlay(index)} style={{ cursor: 'pointer' }}>
                  <img className="card-img-top" src={track.localArt} alt={track.title} />
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

