import React, { useEffect, useState } from 'react';

interface UserData {
  preset1: {
    name: string;
  };
  preset2: {
    name: string;
  };
  preset3: {
    name: string;
  };
}

const Home: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const rawUserData = localStorage.getItem('efficient_farm_runs');
    if (rawUserData) {
      const parsedUserData = JSON.parse(rawUserData);
      setUserData(parsedUserData.data);
    }
  }, []);

  return (
    <div>
      <h2 className='preset-header'>Load A Preset</h2>
      <button className='nis-button'>{userData?.preset1.name}</button>
      <button className='nis-button'>{userData?.preset2.name}</button>
      <button className='nis-button'>{userData?.preset3.name}</button>
      <h2 className='preset-header'>Options</h2>
      <div id='option-buttons-wrapper'>
        <button className='nis-button option-button'>Add</button>
        <button className='nis-button option-button'>Edit</button>
        <button className='nis-button option-button'>Delete</button>
      </div>
    </div>
  );
};

export default Home;
