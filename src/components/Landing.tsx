import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import defaultProfile from '../utils/defaults';

const Landing: React.FC = () => {
  const [profileName, setProfileName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const navHandler = (path: string) => {
    const nameInput = document.getElementById(
      'username-input'
    ) as HTMLInputElement;
    const prevData = localStorage.getItem('efficient_farm_runs');
    let profile;
    if (prevData) {
      profile = JSON.parse(prevData);
    }
    if (nameInput) {
      const profileName = nameInput.value;
      if (profileName && !profile) {
        const newProfile = defaultProfile;
        newProfile.name = profileName;
        localStorage.setItem('efficient_farm_runs', JSON.stringify(newProfile));
      } else if (profileName && profile) {
        profile.name = profileName;
        localStorage.setItem('efficient_farm_runs', JSON.stringify(profile));
      } else {
        return setError('Enter A Valid Name');
      }
    }
    navigate(path);
  };

  const confirmResetHandler = (confirmation: boolean) => {
    defaultProfile.reset();
    if (confirmation) {
      localStorage.setItem(
        'efficient_farm_runs',
        JSON.stringify(defaultProfile)
      );
      setError('');
    } else {
      navHandler('/home');
    }
  };

  const devHelper = () => {
    localStorage.setItem('efficient_farm_runs', '{"completed": true}');
    window.location.reload();
  };

  const enterSubmitHandler = (e: any) => {
    setError('');
    if (e.key === 'Enter' && e.shiftKey === false) {
      navHandler('/new-user/profile/1');
    }
  };

  const changeHandler = (nameInput: string) => {
    setProfileName(nameInput);
  };

  useEffect(() => {
    const data = localStorage.getItem('efficient_farm_runs');
    if (data) {
      const prevProfile = JSON.parse(data);
      if (prevProfile && prevProfile.name) {
        setProfileName(prevProfile.name);
      }
      if (prevProfile && prevProfile.completed) {
        setError('Profile Detected');
      }
    }
  }, []);

  return (
    <main className='outer-wrapper'>
      <h2 className='preset-header'>Profile</h2>
      {error && error.includes('Profile') ? (
        <>
          <div id='error-msg'>{error}</div>
          <div id='error-txt-body'>
            It looks like you have already created a profile. Would you like to
            delete it and start over?
          </div>
          <div className='dbl-btn-wrapper'>
            <button
              onClick={() => confirmResetHandler(false)}
              className='nis-button nis-button-alt'
            >
              No
            </button>
            <button
              onClick={() => confirmResetHandler(true)}
              className='nis-button'
            >
              Yes
            </button>
          </div>
        </>
      ) : (
        <>
          <div id='levels-wrapper' className='selections-wrapper'>
            <label htmlFor='username-input'>Create New Profile</label>
            <input
              id='username-input'
              placeholder='Pick a name!'
              value={profileName}
              maxLength={12}
              onChange={(e) => changeHandler(e.target.value)}
              onKeyDown={(e) => enterSubmitHandler(e)}
            ></input>
          </div>
          <div className='dbl-button-wrapper'>
            <div id='error-msg'>{error}</div>
            <button
              className='nis-button'
              onClick={() => navHandler('/new-user/profile/1')}
            >
              Next
            </button>
          </div>
        </>
      )}
      <button onClick={() => devHelper()} className='nis-button'>
        Helper
      </button>
    </main>
  );
};

export default Landing;
