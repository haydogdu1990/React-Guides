# React State Management (useContext)

#### Start a New React Project
https://react.dev/learn/start-a-new-react-project

#### npm packages to install
```sh

```

#### context/ThemeContext.jsx
```sh
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

```

#### index.js
```sh
import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import ThemeProvider from './context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

#### App.jsx
```sh
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="App">
      {theme}
      <button
        onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
      >
        Text
      </button>
    </div>
  );
}

export default App;

```


