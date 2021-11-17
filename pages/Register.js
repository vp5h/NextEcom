import React from 'react';
import Head from 'next/head';
import Link from 'next/dist/client/link';
import { useState, useContext, useEffect } from 'react';
import valid from '../utils/valid';
import { DataContext } from '../store/GlobalState';
import { postData } from '../utils/fetchdata';
import { useRouter } from 'next/router';

const Register = () => {
  const intialState = { name: '', email: '', password: '', cf_password: '' };
  const [userData, setUserData] = useState(intialState);
  const { name, email, password, cf_password } = userData;

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
    console.log(userData);
    const errMsg = valid(name, email, password, cf_password);
    if (errMsg) return dispatch({ type: 'NOTIFY', payload: { error: errMsg } });

    dispatch({ type: 'NOTIFY', payload: { loading: true } });

    const res = await postData('auth/Register', userData);
    if (res.err)
      return dispatch({ type: 'NOTIFY', payload: { error: res.err } });
    console.log(res);

    return dispatch({ type: 'NOTIFY', payload: { success: res.msg } });
  };
  useEffect(() => {
    if (Object.keys(auth).length !== 0) router.push('/');
  }, [auth]);
  return (
    <>
      <Head>
        <title>Register | Next Ecom</title>
      </Head>
      <form
        className={!dark?"mx-auto my-4": "mx-auto my-4 text-light"}
        style={{ maxWidth: '500px' }}
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={handleChangeInput}
          />
        </div>

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
            well never share your email with anyone else.
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
        <div className="form-group">
          <label htmlFor="exampleInputPassword2">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            name="cf_password"
            value={cf_password}
            onChange={handleChangeInput}
          />
        </div>

        <button type="submit" className="btn btn-dark w-100">
          Register
        </button>
        <p className="my-2 d-flex justify-content-center">
          Already, Have An Account!
          <Link href="/Signin">
            <a style={{ color: 'blue' }}> Login Here!</a>
          </Link>
        </p>
      </form>
    </>
  );
};

export default Register;
