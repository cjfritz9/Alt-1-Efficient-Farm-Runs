import { Route, Routes } from 'react-router-dom';
import NewProfilePage1 from './NewUser/Profile/NewProfilePage1';
import NewProfilePage2 from './NewUser/Profile/NewProfilePage2';
import NewProfilePage3 from './NewUser/Profile/NewProfilePage3';
import Home from './Home';
import Landing from './Landing';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/new-user/profile/1' element={<NewProfilePage1 />} />
        <Route path='/new-user/profile/2' element={<NewProfilePage2 />} />
        <Route path='/new-user/profile/3' element={<NewProfilePage3 />} />
      </Routes>
    </>
  );
};

export default App;
