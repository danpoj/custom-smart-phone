import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import ApplePage from './pages/ApplePage';
import GalaxyPage from './pages/GalaxyPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/apple' element={<ApplePage />} />
      <Route path='/galaxy' element={<GalaxyPage />} />
    </Routes>
  );
}

export default App;
