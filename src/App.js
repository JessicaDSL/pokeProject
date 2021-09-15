import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import PokeAbout from "./pages/PokeAbout";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/pokeabout" component={PokeAbout} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
