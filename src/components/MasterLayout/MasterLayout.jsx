import React from "react";
const MasterLayout = ({Outlet}) => {
  return (
    <div className="app-admin-wrap layout-sidebar-large">
      <div className="main-content-wrap sidenav-open d-flex flex-column">
        <Outlet />
        <div className="flex-grow-1"></div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default MasterLayout;
