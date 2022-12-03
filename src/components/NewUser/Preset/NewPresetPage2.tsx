import { Route, Routes } from 'react-router-dom';
import HerbPatches from './Patches/Herb';

const NewPresetPage2: React.FC = () => {
  return (
    <>
      <Routes>
        {/* <Route path='/bush' element={} /> */}
        {/* <Route path='/cactus' element={} /> */}
        {/* <Route path='/fruit-tree' element={} /> */}
        <Route path='/herb' element={<HerbPatches />} />
        {/* <Route path='/mushroom' element={} /> */}
        {/* <Route path='/tree' element={} /> */}
      </Routes>
    </>
  );
};

export default NewPresetPage2;
