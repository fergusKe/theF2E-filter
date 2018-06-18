import React from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

const Layout = ({children}) => (
  <div>
    <Header />
    <div className="container d-flex flex-column flex-md-row">
      <SideBar />
      <div className="col-md-9">
        {children}
      </div>
    </div>
  </div>
);

export default Layout;
