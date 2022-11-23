import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { UserProps } from '../models/props';

const Landing: React.FC<UserProps> = ({ user }) => {
  const navigate = useNavigate();

  const newPresetHandler = () => {
    navigate('/new-preset');
  };

  useEffect(() => {
    if (user) {
      navigate('/home')
    }
  })

  return (
    <div style={{ color: 'white' }}>
      <div>
        <button className='nis-button' onClick={newPresetHandler}>
          Create New Preset
        </button>
      </div>
    </div>
  );
};

export default Landing;
