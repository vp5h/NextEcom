import {useContext} from 'react';
import NavBar from './NavBar';
import Notify from './Notify';
import Modal from './Modal';
import Footer from './Footer';
import { DataContext } from '../store/GlobalState';

export default function Layouts({ children }) {
  const { state, dispatch } = useContext(DataContext);
  const {dark} = state
  return (
    <>
    <div className= {!dark? "": "bg-dark"} style={{minHeight: "100vh"}}>

      <div className= "container">
        <NavBar />
        <Notify />
        <Modal />
        {children}
      </div>
      <Footer />
    </div>
    </>
  );
}
