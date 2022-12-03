import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewProfilePage3: React.FC = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const navHandler = (url: string) => {
    localStorage.setItem('efficient_farm_runs', JSON.stringify(userData));
    navigate(url);
  };

  useEffect(() => {
    const data = localStorage.getItem('efficient_farm_runs');
    if (data) {
      setUserData(JSON.parse(data));
    }
  }, []);

  return (
    <main className='outer-wrapper'>
      <h2 className='preset-header'>Farming Items</h2>
      {userData ? (
        <>
          <div id='farming-items-wrapper' className='selections-wrapper'>
            <div className='checkbox-label-wrapper single-item'>
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
            <div className='checkbox-label-wrapper single-item'>
              <input
                id='wild-sword'
                type='checkbox'
                style={{ display: 'none' }}
              ></input>
              <img
                className='item-sprites'
                src='https://runescape.wiki/images/Wilderness_sword_1_detail.png?642c3&20180131150459'
                alt='Wilderness Sword 1+'
              />
              <label
                id='item-labels'
                className='checkbox-labels'
                htmlFor='wild-sword'
              >
                Wilderness Sword
              </label>
            </div>
            <div className='checkbox-label-wrapper single-item'>
              <input
                id='explorers-ring'
                type='checkbox'
                style={{ display: 'none' }}
              ></input>
              <img
                className='item-sprites'
                src='https://runescape.wiki/images/archive/20180910143816%21Explorer%27s_ring_3_detail.png?b8e3f'
                alt="Explorer's Ring 3+"
              />
              <label
                id='item-labels'
                className='checkbox-labels'
                htmlFor='explorers-ring'
              >
                Explorer's Ring 3
              </label>
            </div>
            <div className='checkbox-label-wrapper single-item'>
              <input
                id='ardy-cloak'
                type='checkbox'
                style={{ display: 'none' }}
              ></input>
              <img
                className='item-sprites'
                src='https://runescape.wiki/images/thumb/Ardougne_cloak_4_detail.png/570px-Ardougne_cloak_4_detail.png?6b983&20120818213812'
                alt='Ardougne Cloak 2+'
              />
              <label
                id='item-labels'
                className='checkbox-labels'
                htmlFor='ardy-cloak'
              >
                V Ardougne Cloak
              </label>
            </div>
            <div className='checkbox-label-wrapper single-item'>
              <input
                id='tir-quiver'
                type='checkbox'
                style={{ display: 'none' }}
              ></input>
              <img
                className='item-sprites'
                src='https://runescape.wiki/images/Tirannwn_quiver_4_detail.png?7ccbd&20141216200512'
                alt='Tirannwn Quiver'
              />
              <label
                id='item-labels'
                className='checkbox-labels'
                htmlFor='tir-quiver'
              >
                V Tirannwn Quiver
              </label>
            </div>
            <div className='checkbox-label-wrapper single-item'>
              <input
                id='attuned-tp'
                type='checkbox'
                style={{ display: 'none' }}
              ></input>
              <img
                className='item-sprites'
                src='https://runescape.wiki/images/thumb/Attuned_crystal_teleport_seed_detail.png/75px-Attuned_crystal_teleport_seed_detail.png?b4cb1&20170411101927'
                alt='Attuned Crystal Teleport Seed'
              />
              <label
                id='item-labels'
                className='checkbox-labels'
                htmlFor='attuned-tp'
              >
                Attuned Crystal
              </label>
            </div>
            <div className='checkbox-label-wrapper single-item'>
              <input
                id='juju'
                type='checkbox'
                style={{ display: 'none' }}
              ></input>
              <img
                className='item-sprites'
                src='https://runescape.wiki/images/archive/20110611225619%21Juju_teleport_spiritbag_detail.png?3229f'
                alt='Juju / Witchdoctor'
              />
              <label
                id='item-labels'
                className='checkbox-labels'
                htmlFor='juju'
              >
                Juju / Witchdoctor
              </label>
            </div>
            <div className='checkbox-label-wrapper single-item'>
              <input
                id='spirit-tree'
                type='checkbox'
                style={{ display: 'none' }}
              ></input>
              <img
                className='item-sprites'
                src='https://runescape.wiki/images/Spirit_tree_re-rooter_detail.png?fcdc8&20180621103114'
                alt='Spirit Tree Re-rooter'
              />
              <label
                id='item-labels'
                className='checkbox-labels'
                htmlFor='spirit-tree'
              >
                <img
                  className='inv-icon'
                  src='https://runescape.wiki/images/Invention.png?b4132&20221124145106'
                  alt='invention-icon'
                />
                Spirit Tree
              </label>
            </div>
            <div className='checkbox-label-wrapper single-item'>
              <input
                id='fairy-rings'
                type='checkbox'
                style={{ display: 'none' }}
              ></input>
              <img
                className='item-sprites'
                src='https://runescape.wiki/images/thumb/Portable_fairy_ring_%28inactive%29_detail.png/120px-Portable_fairy_ring_%28inactive%29_detail.png?f96cd&20220605170524'
                alt='Portable Fairy Ring'
              />
              <label
                id='item-labels'
                className='checkbox-labels'
                htmlFor='fairy-rings'
              >
                <img
                  className='inv-icon'
                  src='https://runescape.wiki/images/Invention.png?b4132&20221124145106'
                  alt='invention-icon'
                />
                Fairy Ring
              </label>
            </div>
          </div>
          <div className='dbl-btn-wrapper'>
            <button
              onClick={() => navHandler('/new-user/profile/2')}
              className='nis-button nis-button-alt'
            >
              Back
            </button>
            <button onClick={() => navHandler('/404')} className='nis-button'>
              Next
            </button>
          </div>
        </>
      ) : (
        <>
          <div id='error-msg'>Unknown Error</div>
          <div id='error-txt-body'>Hey! You shouldn't be here!</div>
          <div id='error-txt-body'>
            (something went wrong or you manually navigated here)
          </div>
          <button
            onClick={() => navHandler('/')}
            className='nis-button nis-button-alt'
          >
            Go Back
          </button>
        </>
      )}
    </main>
  );
};

export default NewProfilePage3;
