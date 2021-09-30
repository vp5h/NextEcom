import { createContext, useReducer } from 'react';
import reducers from './Reducers';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const intialState = { notify: {}, auth: {} };
  const [state, dispatch] = useReducer(reducers, intialState);

  return (
    <DataContext.Provider value={[state, dispatch]}>
      {children}
    </DataContext.Provider>
  );
};
