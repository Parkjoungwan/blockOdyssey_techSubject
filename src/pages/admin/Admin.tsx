import React from 'react';
import { Outlet, useLocation } from "react-router-dom";
import AdminIndex from '../../component/admin';

const Admin = () => {
  const { pathname } = useLocation();
  const isProductList = pathname === "/admin/productList";

  return isProductList ? <Outlet /> : <AdminIndex />;
};

export default Admin;