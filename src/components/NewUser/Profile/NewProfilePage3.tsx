import { useState, useEffect } from 'react';
import { getUserData } from '../../../api/rs3-api';

const NewProfilePage3: React.FC = () => {
  const [userData, setUserData] = useState<any>('loading');
  const [success, setSuccess] = useState(false);
  const [noUserError, setNoUserError] = useState('');
  const [privateUserError, setPrivateUserError] = useState('');
  const [fetchError, setFetchError] = useState('');

  const fetchData = async () => {
    const username = localStorage.getItem('efr_api_username')!;
    const _userData = await getUserData(username);

    if (_userData && typeof _userData === 'object' && _userData.success) {
      setSuccess(_userData.success);
    }

    if (_userData && typeof _userData === 'string') {
      if (_userData === 'NO_PROFILE') {
        setNoUserError(`${username} Not Found`);
      }
      if (_userData === 'PROFILE_PRIVATE') {
        setPrivateUserError('Private Profile');
      }
    }

    if (!_userData) {
      setFetchError('No response from server. Try again after a few minutes.');
    }

    console.log('USER DATA', _userData);
    setUserData(_userData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className='outer-wrapper'>
      {userData === 'loading' ? (
        <h3 className='preset-header'>Loading...</h3>
      ) : fetchError ? (
        <>
          <h3 className='preset-header'>{fetchError}</h3>
        </>
      ) : privateUserError ? (
        <>
          <h3 className='preset-header'>{privateUserError}</h3>
        </>
      ) : noUserError ? (
        <>
          <h3 className='preset-header'>{noUserError}</h3>
        </>
      ) : userData && success ? (
        <>
          <h3 className='preset-header'>{userData.name}</h3>
          <h3 className='preset-header'>
            Farming Level: {userData.levels.farmingLvl}
          </h3>
          <h3 className='preset-header'>
            Magic Level: {userData.levels.magicLvl}
          </h3>
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
        <h3 className='preset-header'>{fetchError}</h3>
      )}
    </main>
  );
};

export default NewProfilePage3;
