import { createRef, useRef, useState } from "react";
import { useMusic } from "../context/MusicContext";
import { BackwardIcon, ForwardIcon } from "@heroicons/react/16/solid";
import { PauseCircleIcon, PlayCircleIcon } from "@heroicons/react/24/outline";
import BASE_URL from '../../config';
import { FiVolume2 } from "react-icons/fi";
import { FaHeart } from 'react-icons/fa';
import { FaPlayCircle, FaPauseCircle, FaForward, FaBackward } from "react-icons/fa";


const PlayerV2 = () => {
   const {
      currentTrack,
      isPlaying,
      playTrack,
      pauseTrack,
      stopTrack,
      nextTrack,
      previousTrack,
      audioProgress,
      totalDuration,
      currentTime,
      handleMusicProgressBar,
      volume,
      handleVolume,
      showSlider,
      setShowSlider,
      handleLikeClick,
      isLiked,
      likedSong,
      handleRedirect
   } = useMusic();

   const formatTime = (timeInSeconds) => {
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = Math.floor(timeInSeconds % 60);
      return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
   };

   // Change Avatar Class
   let avatarClass = ['object-cover', 'object-contain', 'object-none']
   const [avatarClassIndex, setAvatarClassIndex] = useState(0)
   const handleAvatar = () => {
      if (avatarClassIndex >= avatarClass.length - 1) {
         setAvatarClassIndex(0)
      } else {
         setAvatarClassIndex(avatarClassIndex + 1)
      }
   }


   // Change BG Video
   // const [videoIndex, setVideoIndex] = useState(0);
   // const vidArray = ['/videos/video1.mp4', '/videos/video2.mp4', '/videos/video3.mp4', '/videos/video6.mp4', '/videos/video7.mp4', '/videos/video8.mp4', '/videos/video9.mp4', '/videos/video10.mp4'];
   // const handleChangeBackground = () => {
   //    if (videoIndex >= vidArray.length - 1) {
   //       setVideoIndex(0);
   //    } else {
   //       setVideoIndex(videoIndex + 1)
   //    }
   // }

   // const videoRefs = useRef([]);
   // for (let i = 0; i < vidArray.length; i++) {
   //    videoRefs.current.push(createRef());
   // }

   return (
      <div className="container-fluid p-0 m-0" style={{ backgroundColor: 'black' }}>
         <div className="paddingadjust"></div>



         <div className="row">
            <div className="d-flex justify-content-center py-3">

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

            </div>
            <div className="col-md-2" style={{ backgroundColor: '#181818' }}>
               <h1 style={{ textAlign: 'left' }} className="library">Your Library</h1>
               <h5 className="artist">Artists</h5>
               <ul className="artistlist">
                  <li className="d-flex align-items-center mb-2 ani">
                     <img src="./tracks/art/Ani.jpg" alt="Anirudh" className="me-3 rounded-circle" style={{ width: '40px', height: '40px', objectFit: 'cover' }} />
                     <p className="mb-0">Anirudh Ravichandran</p>
                  </li>

                  <li className="d-flex align-items-center mb-2 ani">
                     <img src="./tracks/art/SidSriram.jpg" alt="Anirudh" className="me-3 rounded-circle" style={{ width: '40px', height: '40px', objectFit: 'cover' }} />
                     <p className="mb-0">Sid Sriram</p>
                  </li>
                  <li className="d-flex align-items-center mb-2 ani">
                     <img src="./tracks/art/Yuvan.jpg" alt="Anirudh" className="me-3 rounded-circle" style={{ width: '40px', height: '40px', objectFit: 'cover' }} />
                     <p className="mb-0">Yuvan Shankar Raja</p>
                  </li>
                  <li className="d-flex align-items-center mb-2 ani">
                     <img src="./tracks/artists/Alan.jpg" alt="" className="me-3 rounded-circle" style={{ width: '40px', height: '40px', objectFit: 'cover' }} />
                     <p className="mb-0">Alan Walker</p>
                  </li>
               </ul>
            </div>
            <div className="col-md-8">
               <div style={{ minHeight: '100vh', backgroundColor:'#181818' }} className="d-flex justify-content-center align-items-center">
                  {currentTrack && (
                     <>
                        {/* <video
                           src={vidArray[videoIndex]}
                           loop
                           muted
                           autoPlay
                           style={{ width: '100%', height: '100vh', position: 'absolute', right: '0', top: '0', objectFit: 'cover', zIndex: -1, filter: 'saturate(5)' }}
                        /> */}
                        <div
                           className="black-screen position-absolute"
                           style={{ width: '100vw', height: '100vh', pointerEvents: 'none', backgroundColor: '#11111133' }}
                        />
                        <div
                           className="music-container d-flex flex-column justify-content-center align-items-center text-center fw-semibold shadow-lg"
                           style={{ width: '350px', paddingTop: '2.25rem', paddingBottom: '2.25rem', paddingLeft: '2.5rem', paddingRight: '2.5rem', borderRadius: '36px', backdropFilter: 'blur(16px)' }}
                        >
                           <p className="track-name text-center mx-auto my-0 fs-4">
                              {currentTrack?.title}
                           </p>
                           <p className="artist-name my-1 mx-0 fw-normal fs-5 text-primaryDim">
                              {currentTrack?.songArtist || 'Artist'}
                           </p>
                           <div className="position-relative">
                              <img
                                 src={`${currentTrack.localArt}`}
                                 className={`${avatarClass[avatarClassIndex]} ${isPlaying ? 'animate-avatar' : ''} rounded-circle my-5 mx-0 position-relative`}
                                 style={{ width: '200px', height: '200px', cursor: 'pointer' }}
                                 onClick={handleAvatar}
                                 alt="song Avatar"
                              />
                              <p>
                                 <span>
                                    <button onClick={handleLikeClick}>
                                       <FaHeart color={isLiked ? 'red' : 'gray'} />
                                    </button>
                                 </span>
                              </p>
                              <div
                                 className={`position-absolute rounded-circle border ${isPlaying ? 'animate-pulse' : ''}`}
                                 style={{
                                    width: '200px',
                                    height: '200px',
                                    top: '20px',
                                    left: '0',
                                    bottom: '20px',
                                    marginTop: '28px',
                                    borderWidth: '1px',
                                    borderColor: '#f9fafb',
                                 }}
                              />
                              <div className="w-100 d-flex justify-content-between fw-semibold">
                                 <p className="current-time">{formatTime(currentTime)}</p>
                                 <p className="total-lenght">{formatTime(totalDuration)}</p>
                              </div>

                              <input
                                 type="range"
                                 name="music-progress-bar"
                                 className="w-100"
                                 style={{ height: '10px', marginBottom: '1rem', outline: 'none', borderRadius: '0.375rem', filter: 'hue-rotate(90deg)', cursor: 'pointer' }}
                                 value={audioProgress}
                                 onChange={handleMusicProgressBar}
                                 title=""
                              />
                              <div className="position-relative d-flex justify-content-center align-items-center mb-4">
                                 <button
                                    onClick={() => setShowSlider(!showSlider)}
                                    className="text-white fs-4 me-2"
                                    title="Volume"
                                    style={{ color: '#FF3B30' }}
                                 >
                                    <FiVolume2 />
                                 </button>

                                 {showSlider && (
                                    <input
                                       type="range"
                                       min="0"
                                       max="100"
                                       defaultValue="50"
                                       onChange={handleVolume}
                                       className="form-range"
                                       style={{ width: '100px', height: '5px', cursor: 'pointer' }}
                                    />
                                 )}
                              </div>

                              <div className="d-flex flex-row gap-4" style={{ paddingLeft: '20px' }}>
                                 <FaBackward className="cursor-pointer fs-2 functions" onClick={previousTrack} />
                                 <div onClick={isPlaying ? pauseTrack : playTrack}>
                                    {isPlaying ? (
                                       <FaPauseCircle className="cursor-pointer fs-1 functions" />
                                    ) : (
                                       <FaPlayCircle className="cursor-pointer fs-1 functions" />
                                    )}
                                 </div>
                                 <FaForward className="cursor-pointer fs-2 functions" onClick={nextTrack} />
                              </div>
                           </div>
                        </div>
                     </>
                  )}
               </div>
            </div>
            <div className="col-md-2" style={{ backgroundColor: '#181818' }}>
               <h3 style={{ color: 'white' }} className="library">Liked Songs</h3>
               <ul className="artistlist">
                  {likedSong.length === 0 ? (
                     <li className="text-muted">No liked songs yet</li>
                  ) : (
                     likedSong.map((track, index) => (
                        <li key={index} className="d-flex align-items-center mb-2 ani">
                           <img
                              src={track.localArt}
                              alt={track.title}
                              className="me-3 rounded-circle"
                              style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                           />
                           <p className="mb-0">{track.title}</p>
                        </li>
                     ))
                  )}
               </ul>


            </div>
         </div>
      </div>
   );

}

export default PlayerV2;