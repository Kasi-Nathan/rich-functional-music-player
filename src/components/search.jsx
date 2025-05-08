import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TrackData from "../tracks.json";
import { useMusic } from "../context/MusicContext";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const { setCurrentTrackIndex } = useMusic();
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    const filtered = TrackData
      .map((track, index) => ({ ...track, originalIndex: index }))
      .filter((track) =>
        (track.title?.toLowerCase().includes(query.toLowerCase()) || 
      track.songArtist?.toLowerCase().includes(query.toLowerCase()))
     
      );

    setResults(filtered);
  };

  const handlePlay = (originalIndex) => {
    setCurrentTrackIndex(originalIndex);
    navigate("/music");
  };

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', paddingTop: '90px' }}>
      {/* Search Input */}
      <div className="text-center py-4">
        <input
          type="text"
          placeholder="Search by title or artist..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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
          onClick={handleSearch}
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

      {/* Search Results */}
      {results.length > 0 ? (
        <div className="container">
          <div className="row g-4 justify-content-center">
            {results.map((track) => (
              <div className="col-md-2" key={track.id || track.originalIndex}>
                <div
                  className="card h-100 text-white"
                  style={{ backgroundColor: "#2c2c2e", cursor: "pointer" }}
                  onClick={() => handlePlay(track.originalIndex)}
                >
                  <img className="card-img-top" src={track.localArt} alt={track.title} />
                  <div className="card-body">
                    <h5 className="card-title">{track.title}</h5>
                    <p className="card-text">{track.songArtist}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        query.trim() !== "" && (
          <p className="text-center text-muted">No results found</p>
        )
      )}
    </div>
  );
};

export default Search;
