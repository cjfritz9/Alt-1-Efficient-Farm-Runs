import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPresets } from '../models/preset';

const Home: React.FC = () => {
  const [presetData, setPresetData] = useState<UserPresets | null>(null);

  const navigate = useNavigate();

  const navigateHandler = (url: string): void => {
    navigate(url)
  };

  useEffect(() => {
    const rawPresetData: string | null = localStorage.getItem('efr_presets');
    if (rawPresetData) {
      const parsedUserData: UserPresets = JSON.parse(rawPresetData);
      setPresetData(parsedUserData);
    }
  }, []);

  return (
    <main className='outer-wrapper'>
      {presetData ? (
        <h2 className='preset-header'>Load A Preset</h2>
      ) : (
        <>
          <h2 className='preset-header'>No Presets Found</h2>
          <button className='nis-button' onClick={() => navigateHandler('/new-preset')}>
            Create New Preset
          </button>
        </>
      )}
      {presetData ? (
        Object.values(presetData).map((preset) => {
          console.log(preset);
          return (
            <>
              <button className='nis-button'>{preset.name}</button>
            </>
          );
        })
      ) : (
        <></>
      )}
      {presetData ? (
        <>
          <h2 className='preset-header'>Options</h2>
          <div id='option-buttons-wrapper'>
            <button className='nis-button option-button'>Add</button>
            <button className='nis-button option-button'>Edit</button>
            <button className='nis-button option-button'>Delete</button>
          </div>
        </>
      ) : (
        <></>
      )}
    </main>
  );
};

export default Home;
