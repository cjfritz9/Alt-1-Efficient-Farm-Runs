import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Landing from './Landing';
import NewPresetPage1 from './NewUser/Preset/NewPresetPage1';
import NewPresetPage2 from './NewUser/Preset/NewPresetPage2';
import NewProfilePage1 from './NewUser/Profile/NewProfilePage1';
import NewProfilePage2 from './NewUser/Profile/NewProfilePage2';
import NewProfilePage3 from './NewUser/Profile/NewProfilePage3';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/new-user/profile/1' element={<NewProfilePage1 />} />
        <Route path='/new-user/profile/2' element={<NewProfilePage2 />} />
        <Route path='/new-user/profile/3' element={<NewProfilePage3 />} />
        <Route path='/new-user/presets/1' element={<NewPresetPage1 />} />
        <Route path='/new-user/presets/2/*' element={<NewPresetPage2 />} />
      </Routes>
    </>
  );
};

export default App;
