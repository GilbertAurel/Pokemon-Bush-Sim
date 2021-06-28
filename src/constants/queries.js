import { gql } from "@apollo/client";

export const GET_ONE_POKEMON_QUERY = gql`
  query GetOnePokemon($name: String!) {
    pokemon(name: $name) {
      id
      moves {
        move {
          name
        }
      }
      sprites {
        front_default
      }
      types {
        type {
          name
        }
      }
    }
  }
`;

export const GET_TEN_OFFSET_POKEMONS_QUERY = gql`
  query GetPokemons($limit: Int!, $currentPage: Int!) {
    pokemons(limit: $limit, offset: $currentPage) {
      count
      results {
        name
      }
      nextOffset
      prevOffset
    }
  }
`;
