import { Route, Routes } from 'react-router-dom';
import NewPreset from './NewPreset';
import Home from './Home';
import Landing from './Landing';

const App: React.FC = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/new-preset' element={<NewPreset />} />
      </Routes>
    </>
  );
};

export default App;
