import { createContext } from 'react';

export default createContext({
  setClassWithTheme: () => null,
  openSidebar: () => null,
  closeSidebar: () => null,
  isOpenSidebar: false,
});
