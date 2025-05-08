import { MusicContextProvider } from './context/MusicContext';
import HelmetHead from './HelmetHead';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlayerV2 from './components/PlayerV2';  // Import PlayerV2 directly
import HomePage from './components/home';
import Search from './components/search';
import NavBar from './components/navbar';


const App = () => {
  return (
    <div className='text-primary'>
      <HelmetHead />
      <Router>
        <MusicContextProvider>
        <NavBar />
          <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="/music" element={<PlayerV2 />} />
            <Route path="/search" element={<Search/>}/>
          </Routes>
        </MusicContextProvider>
      </Router>
    </div>
  );
};

export default App;

