import React, { createContext } from 'react';

import useAuth from './hooks/useAuth';

const Context = createContext();

const AuthProvider = ({ children }) => {
  const { authenticated, loading, login, logout, role } = useAuth();

  return (
    <Context.Provider value={{ loading, authenticated, login, logout, role }}>
      {children}
    </Context.Provider>
  );
};

export { Context, AuthProvider };
