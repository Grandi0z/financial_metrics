import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => (
  <>
    <div className="details">
      <Outlet />
    </div>
  </>

);

export default Root;
