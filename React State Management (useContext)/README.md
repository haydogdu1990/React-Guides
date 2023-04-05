# React State Management (useContext)

#### Start a New React Project
https://react.dev/learn/start-a-new-react-project

#### npm packages to install
```sh

```

#### context/ThemeContext.jsx
```sh
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const Provider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    //Runs on the first render (İlk işlemde çalışır)
    //And any time any dependency value changes (ve belirtilen değerler değiştiğinde çalışır)

    localStorage.setItem("theme", theme);
  }, [theme]);

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
import { useContext } from "react";

import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import ThemeProvider from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    <ThemeProvider>
  </React.StrictMode>
);
```

#### App.jsx
```sh
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const {theme, setTheme} = useContext(ThemeContext);
  return (
    <div>
     {theme} 
     <Button onClick={(e) => theme==dark ? setTheme("light") : setTheme("dark")}>Text</Button>
    </div>
  );
}

export default App;

```


