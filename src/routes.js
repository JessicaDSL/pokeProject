import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import PokeAbout from "./pages/PokeAbout";

export default function Routes() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pokeabout/:id" component={PokeAbout} />
      </Switch>
    </BrowserRouter>
  );
}