import React from "react";

import CardSkeleton from "components/skeleton";

export default function pokemonListSkeleton() {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
    <CardSkeleton key={index} type={"cardList"} />
  ));
}
