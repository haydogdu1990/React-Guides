import { useContext, useState } from 'react';

import { ThemeContext } from './context/ThemeContext';

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="App">
      {theme}
      <button
        onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
      >
        Theme
      </button>
    </div>
  );
}

export default App;
