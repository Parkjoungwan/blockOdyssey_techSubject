import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "../component/admin/ProductList";
import Admin from "../pages/admin/Admin";
import Index from "../pages/Index";

const Router = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Admin />}>
        <Route path="productList" element={<ProductList />} />
      </Route>
      <Route path="*" element={<Index />} />
    </Routes>
  );
};

export default Router;
