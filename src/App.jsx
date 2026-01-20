import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VideoRoom from './pages/VideoRoom';
import Plans from './pages/Plans';
import MeetingTypes from './pages/MeetingTypes';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/room/:roomID' element={<VideoRoom />} />
        <Route path='/plans' element={<Plans />} />
        <Route path='/meeting-types' element={<MeetingTypes />} />
      </Routes>
    </>
  );
};

export default App;