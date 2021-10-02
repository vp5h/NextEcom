import React from 'react';
import NavBar from './NavBar';
import Notify from './Notify';
import Modal from './Modal';

export default function Layouts({ children }) {
  return (
    <div className="container">
      <NavBar />
      <Notify />
      <Modal />
      {children}
    </div>
  );
}
