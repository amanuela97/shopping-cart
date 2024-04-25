import { createContext, useContext, useState } from 'react';
import { initial } from '../util';
import { Carts } from '../types';

//create a context, with createContext api
export const GlobalStateContext = createContext({
  carts: [] as Carts,
  setCarts: {} as React.Dispatch<React.SetStateAction<Carts>>,
});

const GlobalStateProvider = ({ children }: { children: React.ReactNode }) => {
  // this state will be shared with all components
  const [carts, setCarts] = useState(initial);

  return (
    // this is the provider providing state
    <GlobalStateContext.Provider value={{ carts, setCarts }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a CartsContext');
  }
  return context;
};

export { GlobalStateProvider, useGlobalState };
