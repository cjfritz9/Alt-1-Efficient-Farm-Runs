import { Route, Routes } from 'react-router-dom';
import NewProfile from './NewProfile';
import Home from './Home';
import Landing from './Landing';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/new-user/profile' element={<NewProfile />} />
      </Routes>
    </>
  );
};

export default App;
