import React from "react";
import { BrowserRouter } from "react-router-dom";

import Global from "../src/styles/global";
import Header from "../src/components/Header";
import Routes from './routes'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Global />
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
