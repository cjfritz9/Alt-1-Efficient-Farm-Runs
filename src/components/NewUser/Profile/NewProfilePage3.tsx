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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <h3 className='preset-header'>Account Info</h3>
            <div id='user-data-wrapper'>
              <div className='left-panel-wrapper'>
                <h4 className='data-field-headers'>Username</h4>
                <span>{userData.name}</span>
                <h4 className='data-field-headers'>Levels:</h4>
                <div id='levels-wrapper'>
                  <span>Farming Level: {userData.levels.farmingLvl}</span>
                  <span>Magic Level: {userData.levels.magicLvl}</span>
                </div>
              </div>
              <div className='right-panel-wrapper'>
                <h4 className='data-field-headers'>Quests Status:</h4>
                <span>
                  {userData.quests.maba ? (
                    <div id='quest-completed'>
                      <img
                        className='check-x-img'
                        src='https://i.ibb.co/DK4Gpqv/green-check.png'
                        alt=''
                      />
                      My Arm's Big Adventure
                    </div>
                  ) : (
                    <div id='quest-not-completed'>
                      <img
                        className='check-x-img'
                        src='https://i.ibb.co/k5bn1SD/red-x.png'
                        alt=''
                      />
                      My Arm's Big Adventure
                    </div>
                  )}
                  {userData.quests.lunarDiplomacy ? (
                    <div id='quest-completed'>
                      <img
                        className='check-x-img'
                        src='https://i.ibb.co/DK4Gpqv/green-check.png'
                        alt=''
                      />
                      Lunar Diplomacy
                    </div>
                  ) : (
                    <div id='quest-not-completed'>
                      <img
                        className='check-x-img'
                        src='https://i.ibb.co/k5bn1SD/red-x.png'
                        alt=''
                      />
                      Lunar Diplomacy
                    </div>
                  )}
                  {userData.quests.plaguesEnd ? (
                    <div id='quest-completed'>
                      <img
                        className='check-x-img'
                        src='https://i.ibb.co/DK4Gpqv/green-check.png'
                        alt=''
                      />
                      Plague's End
                    </div>
                  ) : (
                    <div id='quest-not-completed'>
                      <img
                        className='check-x-img'
                        src='https://i.ibb.co/k5bn1SD/red-x.png'
                        alt=''
                      />
                      Plague's End
                    </div>
                  )}
                  {userData.quests.fairyTale1 ? (
                    <div id='quest-completed'>
                      <img
                        className='check-x-img'
                        src='https://i.ibb.co/DK4Gpqv/green-check.png'
                        alt=''
                      />
                      Fairy Tale Pt. 1
                    </div>
                  ) : (
                    <div id='quest-not-completed'>
                      <img
                        className='check-x-img'
                        src='https://i.ibb.co/k5bn1SD/red-x.png'
                        alt=''
                      />
                      Fairy Tale Pt. 1
                    </div>
                  )}
                  {userData.quests.treeGnomeVillage ? (
                    <div id='quest-completed'>
                      <img
                        className='check-x-img'
                        src='https://i.ibb.co/DK4Gpqv/green-check.png'
                        alt=''
                      />
                      Tree Gnome Village
                    </div>
                  ) : (
                    <div id='quest-not-completed'>
                      <img
                        className='check-x-img'
                        src='https://i.ibb.co/k5bn1SD/red-x.png'
                        alt=''
                      />
                      Tree Gnome Village
                    </div>
                  )}
                  {userData.quests.loveStory ? (
                    <div id='quest-completed'>
                      <img
                        className='check-x-img'
                        src='https://i.ibb.co/DK4Gpqv/green-check.png'
                        alt=''
                      />
                      Love Story
                    </div>
                  ) : (
                    <div id='quest-not-completed'>
                      <img
                        className='check-x-img'
                        src='https://i.ibb.co/k5bn1SD/red-x.png'
                        alt=''
                      />
                      Love Story
                    </div>
                  )}
                  {userData.quests.theLightWithin ? (
                    <div id='quest-completed'>
                      <img
                        className='check-x-img'
                        src='https://i.ibb.co/DK4Gpqv/green-check.png'
                        alt=''
                      />
                      The Light Within
                    </div>
                  ) : (
                    <div id='quest-not-completed'>
                      <img
                        className='check-x-img'
                        src='https://i.ibb.co/k5bn1SD/red-x.png'
                        alt=''
                      />
                      The Light Within
                    </div>
                  )}
                  {userData.quests.pog ? (
                    <div id='quest-completed'>
                      <img
                        className='check-x-img'
                        src='https://i.ibb.co/DK4Gpqv/green-check.png'
                        alt=''
                      />
                      Prisoner of Glouphrie
                    </div>
                  ) : (
                    <div id='quest-not-completed'>
                      <img
                        className='check-x-img'
                        src='https://i.ibb.co/k5bn1SD/red-x.png'
                        alt=''
                      />
                      Prisoner of Glouphrie
                    </div>
                  )}
                  {userData.quests.tgbr ? (
                    <div id='quest-completed'>
                      <img
                        className='check-x-img'
                        src='https://i.ibb.co/DK4Gpqv/green-check.png'
                        alt=''
                      />
                      The Great Brain Robbery
                    </div>
                  ) : (
                    <div id='quest-not-completed'>
                      <img
                        className='check-x-img'
                        src='https://i.ibb.co/k5bn1SD/red-x.png'
                        alt=''
                      />
                      The Great Brain Robbery
                    </div>
                  )}
                </span>
              </div>
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
