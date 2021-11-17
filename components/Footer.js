import { useContext } from 'react';
import Link from 'next/dist/client/link';
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { DataContext } from '../store/GlobalState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  const { state, dispatch } = useContext(DataContext);
  const { dark } = state;
  return (
    <div
      className={
        !dark
          ? ' container center d-flex justify-content-around'
          : ' container center d-flex justify-content-around bg-dark'
      }
      style={{ margin: 'auto', width: '100vw' }}
    >
     
        <div
          className={!dark ? 'text-center container' : ' text-center bg-dark text-light container'}
        >
          Made by
          <Link href="https://vp5h.netlify.app/">
            <a> Pravesh</a>
          </Link>
          <div
            className="footer-header"
            style={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '3vh',
            }}
          >
            Socials
          </div>
          <ul
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              margin: 'auto',
              padding: '0',
              maxWidth: '200px',
            }}
          >
            <li
              className="list-item-inline"
              style={{ display: 'inline', padding: '2vh' }}
            >
              <a className="link" href="https://github.com/vp5h">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li
              className="list-item-inline"
              style={{ display: 'inline', padding: '2vh' }}
            >
              <a className="link" href="https://twitter.com/v_p5h">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li
              className="list-item-inline"
              style={{ display: 'inline', padding: '2vh' }}
            >
              <a className="link" href="https://www.linkedin.com/in/vp5h/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </div>
     
    </div>
  );
};

export default Footer;
