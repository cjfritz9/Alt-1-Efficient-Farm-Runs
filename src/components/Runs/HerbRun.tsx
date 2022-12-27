import { useEffect, useState } from 'react';
import UserPresets from '../../models/preset';
import Profile from '../../models/profile';

const HerbRun: React.FC = () => {
  const [herbPatches, setHerbPatches] = useState();

  useEffect(() => {
    const rawPresetData = localStorage.getItem('efficient_farm_runs');
    if (rawPresetData) {
      const parsedUserData: Profile = JSON.parse(rawPresetData);
      const _herbPatches = Object.values(parsedUserData.presets).filter(
        (preset) => {
          return preset.type === 'herb';
        }
      );
      if (_herbPatches) {
        setHerbPatches(_herbPatches)
      }
    }
  }, []);

  return (
    <main className='outer-wrapper'>
      {herbPatches ?
        <>
          <h2 className='preset-header'>Presets</h2>
          {
            herbPatches.southFalador ?
          }
        </>
      : null}
    </main>
  );
};

export default HerbRun;
