import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const Provider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const data = {
    theme,
    setTheme,
  };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export default Provider;
