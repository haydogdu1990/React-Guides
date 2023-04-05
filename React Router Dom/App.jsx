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
