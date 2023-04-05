# React Router Dom

#### Start a New React Project
https://react.dev/learn/start-a-new-react-project

#### npm packages to install
```sh
npm npm i react-router-dom
```

#### index.js
```sh
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

#### App.jsx
```sh
import { useState, useContext } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { Routes, Route, Link, NavLink } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductCategory from "./pages/ProductCategory";
import ProductDetail from "./pages/ProductDetail";

import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

function App() {
  
  return (
    <div>
      <Navbar />
      <Menu />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Layout />}>
          <Route index={true} element={<ProductCategory />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
);
```
#### NavLink
```sh
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <NavLink to="/">Home Page</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
```

#### useParams
/products/:id

<Route path=":id" element={<ProductDetail />} />

It is used to get the id value from the URL

```sh
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  return (
    <div>
      {id}
    </div>
  );
};

export default ProductDetail;
```
