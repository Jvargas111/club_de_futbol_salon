import { Outlet } from 'react-router-dom';

const PageComponent = () => {
  return (
    <div
      className='bg-cover bg-center flex items-center justify-center bg-gradient-to-r from-black to-blue-800'
    >
      <Outlet />
    </div>
  );
};

export default PageComponent;
