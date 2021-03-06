import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Cookie from 'js-cookie';
import Link from 'next/dist/client/link';
import { useState, useContext, useEffect } from 'react';
import { DataContext } from '../store/GlobalState';
import { postData } from '../utils/fetchdata';

const Signin = () => {
  let initialState = { email: 'user@prv.com', password: '123456' };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;

  const { state, dispatch } = useContext(DataContext);
  const { auth, dark } = state;

  const router = useRouter();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    dispatch({ type: 'NOTIFY', payload: {} });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'NOTIFY', payload: { loading: true } });
    const res = await postData('auth/login', userData);

    if (res.err)
      return dispatch({ type: 'NOTIFY', payload: { error: res.err } });
    dispatch({ type: 'NOTIFY', payload: { success: res.msg } });

    dispatch({
      type: 'AUTH',
      payload: {
        token: res.access_token,
        user: res.user,
      },
    });

    Cookie.set('refreshtoken', res.refresh_token, {
      path: 'api/auth/accessToken',
      expires: 7,
    });

    localStorage.setItem('firstLogin', true);
  };

  useEffect(() => {
    if (Object.keys(auth).length !== 0) router.push('/');
  }, [auth]);

  return (
    <>
      <Head>
        <title>Sign in | Next Ecom</title>
      </Head>
      <form
        className={!dark ? 'mx-auto my-4' : 'mx-auto my-4 text-light'}
        style={{ maxWidth: '500px' }}
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
          <small id="emailHelp" className="form-text text-muted">
            Well never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={password}
            onChange={handleChangeInput}
          />
        </div>

        <button type="submit" className={!dark? "btn btn-dark w-100 my-2":"btn btn-light w-100 my-2" }>
          Login
        </button>
        <button
          type="submit"
          className={!dark? "btn btn-dark w-100 my-2":"btn btn-light w-100 my-2" }
          onClick={() => setUserData({ ...userData, email: 'admin@prv.com' })}
        >
          Login as Admin
        </button>

        <p className="my-2 d-flex justify-content-center">
          You dont have an account?{' '}
          <Link href="/Register">
            <a style={{ color: 'crimson' }}>Register Now</a>
          </Link>
        </p>
      </form>
    </>
  );
};

export default Signin;
