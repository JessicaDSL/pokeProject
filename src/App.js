import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import PokeAbout from "./pages/PokeAbout";
import Global from "../src/styles/global";
import Header from "../src/components/Header";

function App() {
  return (
    <BrowserRouter>
      <Global />
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/pokeabout" component={PokeAbout} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
