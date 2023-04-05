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
