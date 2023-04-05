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
