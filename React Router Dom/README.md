# React Router Dom

#### Start a New React Project
https://react.dev/learn/start-a-new-react-project

#### npm packages to install
```sh
npm i react-router-dom
```

#### index.jsx
```javascript
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
```javascript
import './App.css';

import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

import Layout from './components/Layout';
import Menu from './components/Menu';

function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Layout />}>
          <Route index={true} element={<Products />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
```


#### pages/HomePage.jsx
```javascript
const HomePage = () => {
  return <div>Home Page</div>;
};

export default HomePage;
```

#### useParams

<Route path=":id" element={<ProductDetail />} />

It is used to get the id value from the URL

#### pages/ProductDetail.jsx
```javascript
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  return <div>Product Detail {id}</div>;
};

export default ProductDetail;
```

#### pages/Products.jsx
```javascript
const Products = () => {
  return <div>Products</div>;
};

export default Products;
```


#### Outlet
#### components/Layout.jsx
```javascript
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <div>
        <div>Layout content</div>

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
```

#### NavLink
#### components/Menu.jsx
```javascript
import { NavLink } from 'react-router-dom';

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
          <li>
            <NavLink to="/products/123">Products id 123</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
```
