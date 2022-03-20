import { createContext } from 'react';

interface ReduxContextPropTypes {
  bodyWidth: number;
  scrollTop: number;
}

export const ReduxContext = createContext<ReduxContextPropTypes>({
  bodyWidth: document.body.clientWidth,
  scrollTop: 0,
});

const ReduxContextProvider = ReduxContext.Provider;

export default ReduxContextProvider;
