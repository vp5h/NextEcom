import React from 'react';
import { useContext, useEffect } from 'react';
import { DataContext } from '../store/GlobalState';
import Loading from './Loading';
import Toast from './Toast';

const Notify = () => {
  const { state, dispatch } = useContext(DataContext);
  const { notify } = state;

  const autoclose = () => {
    setTimeout(function () {
      dispatch({ type: 'NOTIFY', payload: {} });
    }, 5000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: 'NOTIFY', payload: {} });
    }, 1000);
    return () => clearTimeout(timer);
  }, [notify]);

  return (
    <>
      {notify.loading && <Loading />}
      {notify.error && (
        <Toast
          msg={{ msg: notify.error, title: 'Error' }}
          handleShow={() => {
            dispatch({ type: 'NOTIFY', payload: {} });
          }}
          bgColor="bg-danger"
        />
      )}
      {notify.success && (
        <Toast
          msg={{ msg: notify.success, title: 'Success' }}
          handleShow={() => {
            dispatch({ type: 'NOTIFY', payload: {} });
            // autoclose()
          }}
          bgColor="bg-success"
        />
      )}
    </>
  );
};

export default Notify;
