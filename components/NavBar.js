/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { DataContext } from '../store/GlobalState';
import Cookie from 'js-cookie';
import { set } from 'mongoose';

export default function NavBar() {
  const router = useRouter();
  const { state, dispatch } = useContext(DataContext);
  const { auth, cart, dark } = state;
  const [darkmode, setDarkmode] = useState(dark);

  const isActive = (r) => {
    if (r === router.pathname) {
      return ' active';
    } else {
      return '';
    }
  };

  useEffect(() => {
    dispatch({ type: 'DARK', payload: darkmode });
  });

  const handleLogout = () => {
    Cookie.remove('refreshtoken', { path: 'api/auth/accessToken' });
    localStorage.removeItem('firstLogin');
    dispatch({ type: 'AUTH', payload: {} });
    dispatch({ type: 'NOTIFY', payload: { success: 'Logged out!' } });
    return router.push('/');
  };

  const adminRouter = () => {
    return (
      <>
        <Link href="/users">
          <a className="dropdown-item">Users</a>
        </Link>
        <Link href="/create">
          <a className="dropdown-item">Add Products</a>
        </Link>
        <Link href="/categories">
          <a className="dropdown-item">Categories</a>
        </Link>
      </>
    );
  };

  const loggedRouter = () => {
    return (
      <li className={'nav-item dropdown'}>
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img
            src={auth.user.avatar}
            alt={auth.user.avatar}
            style={{
              borderRadius: '50%',
              width: '30px',
              height: '30px',
              transform: 'translateY(-3px)',
              marginRight: '3px',
            }}
          />{' '}
          {auth.user.name}
        </a>

        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link href="/profile">
            <a className="dropdown-item">Profile</a>
          </Link>
          {auth.user.role === 'admin' && adminRouter()}
          <div className="dropdown-divider"></div>
          <button className="dropdown-item" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </li>
    );
  };

  return (
    <nav
      className={
        !dark
          ? 'navbar navbar-expand-lg navbar-light bg-light'
          : 'navbar navbar-expand-lg navbar-dark bg-dark'
      }
    >
      <Link href="/">
        <a className="navbar-brand">Next Ecom</a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customSwitch1"
            onChange={(e) => {
              setDarkmode(!darkmode);
              dispatch({ type: 'DARK', payload: darkmode });
            }}
          />
          <label
            className="custom-control-label"
            htmlFor="customSwitch1"
          ></label>
        </div>
        <ul className="navbar-nav p-1">
          <li className="nav-item">
            <Link href="/cart">
              <a className={'nav-link' + isActive('/cart')}>
                <i
                  className="fas fa-shopping-cart position-relative"
                  aria-hidden="true"
                >
                  <span
                    className="position-absolute"
                    style={{
                      padding: '3px 6px',
                      background: '#ed143dc2',
                      borderRadius: '50%',
                      top: '-10px',
                      right: '-10px',
                      color: 'white',
                      fontSize: '14px',
                    }}
                  >
                    {cart.length}
                  </span>
                </i>{' '}
                Cart
              </a>
            </Link>
          </li>

          {Object.keys(auth).length === 0 ? (
            <li className="nav-item">
              <Link href="/Signin">
                <a className={'nav-link' + isActive('/Signin')}>
                  <i className="fas fa-user" aria-hidden="true"></i> Sign in
                </a>
              </Link>
            </li>
          ) : (
            loggedRouter()
          )}
        </ul>
      </div>
    </nav>
  );
}
