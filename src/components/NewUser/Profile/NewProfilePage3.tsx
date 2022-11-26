import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserData } from '../../../api/rs3-api';
import { UserData } from '../../../models/api-responses';

const NewProfilePage3: React.FC = () => {
  const [userData, setUserData] = useState<UserData | any>('loading');
  const [success, setSuccess] = useState(false);
  const [noUserError, setNoUserError] = useState('');
  const [privateUserError, setPrivateUserError] = useState('');
  const [fetchError, setFetchError] = useState('');
  const [userDataPref, setUserDataPref] = useState('');
  const [confirmData, setConfirmData] = useState(false);

  const navigate = useNavigate();

  const fetchData = async () => {
    const username = localStorage.getItem('efr_api_username')!;
    const userPref = localStorage.getItem('efr_user_data');
    userPref ? setUserDataPref(userPref) : navigate('/');
    const _userData: UserData | any = await getUserData(username);

    if (_userData && _userData.success) {
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

  const confirmHandler = (status: boolean) => {
    setConfirmData(status);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className='outer-wrapper'>
      {userDataPref === 'automate_entry' && !confirmData ? (
        userData === 'loading' ? (
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
            <div id='levels-wrapper'>
              <span>Farming Level: {userData.levels.farmingLvl}</span>
              <span>Magic Level: {userData.levels.magicLvl}</span>
            </div>
            <div>
              <h4>Quest Status</h4>
              <span>
                {userData.quests.maba ? (
                  <div id='quest-completed'>My Arm's Big Adventure</div>
                ) : (
                  <div id='quest-not-completed'>My Arm's Big Adventure</div>
                )}
                {userData.quests.lunarDiplomacy ? (
                  <div id='quest-completed'>Lunary Diplomacy</div>
                ) : (
                  <div id='quest-not-completed'>Lunar Diplomacy</div>
                )}
                {userData.quests.plaguesEnd ? (
                  <div id='quest-completed'>Plague's End</div>
                ) : (
                  <div id='quest-not-completed'>Plague's End</div>
                )}
                {userData.quests.fairyTale1 ? (
                  <div id='quest-completed'>Fairy Tale Pt. 1</div>
                ) : (
                  <div id='quest-not-completed'>Fairy Tale Pt. 1</div>
                )}
                {userData.quests.treeGnomeVillage ? (
                  <div id='quest-completed'>Tree Gnome Village</div>
                ) : (
                  <div id='quest-not-completed'>Tree Gnome Village</div>
                )}
                {userData.quests.loveStory ? (
                  <div id='quest-completed'>Love Story</div>
                ) : (
                  <div id='quest-not-completed'>Love Story</div>
                )}
                {userData.quests.theLightWithin ? (
                  <div id='quest-completed'>The Light Within</div>
                ) : (
                  <div id='quest-not-completed'>The Light Within</div>
                )}
                {userData.quests.pog ? (
                  <div id='quest-completed'>Prisoner of Glouphrie</div>
                ) : (
                  <div id='quest-not-completed'>Prisoner of Glouphrie</div>
                )}
                {userData.quests.tgbr ? (
                  <div id='quest-completed'>The Great Brain Robbery</div>
                ) : (
                  <div id='quest-not-completed'>The Great Brain Robbery</div>
                )}
              </span>
            </div>
            <button className='nis-button' onClick={() => confirmHandler(true)}>
              Confirm
            </button>
          </>
        ) : (
          <h3 className='preset-header'>{fetchError}</h3>
        )
      ) : confirmData || userDataPref === 'manual_entry' ? (
        <>
          <h3 className='preset-header'>Farming Items</h3>
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
        <></>
      )}
    </main>
  );
};

export default NewProfilePage3;
