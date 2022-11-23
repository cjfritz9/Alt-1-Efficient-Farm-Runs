import { useEffect, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NewPreset from './NewPreset';
import Home from './Home';
import Landing from './Landing';

const App: React.FC = () => {
  const [user, setUser] = useState(null)
  const userRef = useRef();

  const getUserInfo = () => {
    if (!user) {
      const userSettings = localStorage.getItem('efficient_farm_runs');

      if (userSettings && typeof userSettings === 'string') {
        const parsedSettings = JSON.parse(userSettings);
        setUser(parsedSettings)
        userRef.current = parsedSettings;
      }
    }
  };

  useEffect(() => {
    getUserInfo();
  });

  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing user={userRef.current!} />} />
        <Route path='/home' element={<Home />} />
        <Route path='/new-preset' element={<NewPreset />} />
      </Routes>
    </div>
  );
};

export default App;
