import React, { Fragment } from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PokemonList from "./pages/all_pokemon_list";
import PokemonDetail from "./pages/pokemon_details";
import MyPokemonList from "./pages/captured_pokemon";
import { PokemonProvider } from "./context/PokemonContext";

const apolloClient = new ApolloClient({
  uri: "https://graphql-pokeapi.vercel.app/api/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <Fragment>
          <PokemonProvider>
            <Switch>
              <Route exact path="/">
                <PokemonList />
              </Route>
              <Route path="/pokemon/:name">
                <PokemonDetail />
              </Route>
              <Route path="/collections">
                <MyPokemonList />
              </Route>
            </Switch>
          </PokemonProvider>
        </Fragment>
      </Router>
    </ApolloProvider>
  );
}

export default App;
