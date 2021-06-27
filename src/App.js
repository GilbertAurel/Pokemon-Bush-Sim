import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PokemonList from "./pages/pokemonList";
import PokemonDetail from "./pages/pokemonDetail";
import MyPokemonList from "./pages/myPokemonList";
import { SavedPokemonProvider } from "./context/PokemonContext";

const apolloClient = new ApolloClient({
  uri: "https://graphql-pokeapi.vercel.app/api/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <div>
          <SavedPokemonProvider>
            <Switch>
              <Route exact path="/" component={PokemonList} />
              <Route path="/pokemon/:name" component={PokemonDetail} />
              <Route path="/collections" component={MyPokemonList} />
            </Switch>
          </SavedPokemonProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
