import { useState, useEffect } from 'react';
import { getUserLevels } from '../../../api/rs3-api';

const NewProfilePage3: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);
  const [magicLvl, setMagicLvl] = useState<any>(0);
  const [farmingLvl, setFarmingLvl] = useState<any>(0);

  const fetchData = async () => {
    const username = localStorage.getItem('efr_api_username')!;
    const userLevels = await getUserLevels(username);
    if (userLevels) {
      console.log(userLevels.skillvalues);

      userLevels.skillvalues.map((skill: { id: number; level: number }) => {
        if (skill.id === 6) {
          setMagicLvl(skill.level);
        }
        if (skill.id === 19) {
          setFarmingLvl(skill.level);
        }
      });
      console.log('MFL', magicLvl, farmingLvl);
    }
    console.log('LVLs', userLevels);
    setUserData(userLevels);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className='outer-wrapper'>
      {userData && typeof userData === 'object' ? (
        <>
          {console.log('DATA: ', userData)}
          <h3 className='preset-header'>{userData.name}</h3>
          <h3 className='preset-header'>Farming Level: {farmingLvl}</h3>
          <h3 className='preset-header'>Magic Level: {magicLvl}</h3>
          <div id='farming-items-wrapper' className='selections-wrapper'>
            <div className='checkbox-label-wrapper'>
              <input
                id='magic-sec'
                type='checkbox'
                style={{ display: 'none' }}
              ></input>
              <img
                className='item-sprites'
                src='https://i.ibb.co/r32FDXz/Magic-Secateurs.png'
                alt='Magic Secateurs'
              />
              <label
                id='item-labels'
                className='checkbox-labels'
                htmlFor='magic-sec'
              >
                Magic Secateurs
              </label>
            </div>
          </div>
        </>
      ) : (
        <h3 className='preset-header'>Loading...</h3>
      )}
    </main>
  );
};

export default NewProfilePage3;
