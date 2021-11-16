import React from 'react';
import Link from 'next/dist/client/link';
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
  return (
    <div
      className="container center d-flex justify-content-around"
      style={{ margin: 'auto', marginTop: '9vh' }}
    >
      <footer className=" footer text-center text-lg-start ">
        <div className="text-center">
          Made by
          <Link href="https://vp5h.netlify.app/">
            <a className="text-dark"> Pravesh</a>
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
      </footer>
    </div>
  );
};

export default Footer;
