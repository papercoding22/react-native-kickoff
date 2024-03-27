import React, {createContext, useContext} from 'react';

import {UserService} from '@/api/services';

const ServiceContext = createContext({
  userService: UserService,
});

const ServiceProvider = ({children}: {children: React.ReactNode}) => {
  return (
    <ServiceContext.Provider value={{userService: UserService}}>
      {children}
    </ServiceContext.Provider>
  );
};

const name = ServiceProvider.name;

export const useAppServices = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error(`useAppServices must be used within a ${name}`);
  }
  return context;
};

export default ServiceProvider;
