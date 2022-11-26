import { useNavigate } from 'react-router-dom';

const NewProfilePage2: React.FC = () => {
  const navigate = useNavigate();

  const navHandler = (path: string) => {
    navigate(path);
  };
  return (
    <main className='outer-wrapper'>
      <h3 className='preset-header'>
        <img
          id='qc-bubble'
          src='https://i.ibb.co/XkzpY53/Quick-chat-button.webp'
          alt='Quick Chat Icon'
        />
        What is your level in ...
      </h3>
      <div id='levels-wrapper' className='selections-wrapper'></div>
      <button
        className='nis-button'
        onClick={() => navHandler('/new-user/profile/3')}
      >
        Next
      </button>
    </main>
  );
};

export default NewProfilePage2;
