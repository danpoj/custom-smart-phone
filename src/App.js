import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import ApplePage from './pages/ApplePage';
import GalaxyPage from './pages/GalaxyPage';
import IPhone12ProPage from './pages/IPhone12ProPage';
import IPhone14Page from './pages/IPhone14Page';
import GalaxyS21UltraPage from './pages/GalaxyS21UltraPage';
import GalaxyTabS8UltraPage from './pages/GalaxyTabS8UltraPage';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/apple' element={<ApplePage />} />
        <Route path='/galaxy' element={<GalaxyPage />} />

        <Route path='/apple/12-pro' element={<IPhone12ProPage />} />
        <Route path='/apple/14' element={<IPhone14Page />} />
        <Route path='/galaxy/s21-ultra' element={<GalaxyS21UltraPage />} />
        <Route path='/galaxy/tab-s8-ultra' element={<GalaxyTabS8UltraPage />} />
      </Routes>
    </>
  );
}

export default App;
