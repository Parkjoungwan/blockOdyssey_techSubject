import React from 'react';
import Router from "./router/router";
import { BrowserRouter as Routers } from 'react-router-dom';

function App() {
  return (
    <Routers>
      <Router />
    </Routers>
  );
}

export default App;
