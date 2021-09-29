import React from 'react';
import Head from 'next/head';
import Link from 'next/dist/client/link';
import { useState } from 'react';

const Register = () => {
    const intialState = {name: "", email: "", password: "", cf_password:""}
    const [userData, setUserData] = useState(intialState)
    const {name, email, password, cf_password} = userData

    const hadleChangeInput= e=>{
        const {name, value} = e.target
        setUserData({...userData, [name]:value })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(userData)
    }


  return (
    <>
      <Head>
        <title>Register | Next Ecom</title>
      </Head>
      <form className="mx-auto my-4" style={{ maxWidth: '500px' }} onSubmit={handleSubmit}>

      <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={hadleChangeInput}
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
            onChange={hadleChangeInput}
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
            onChange={hadleChangeInput}
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
            onChange={hadleChangeInput}
          />
        </div>

        <button type="submit" className="btn btn-dark w-100">
          Register
        </button>
        <p className="my-2">
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
