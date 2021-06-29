export const scrollHandler = (event, data, setCurrentPage) => {
  const atBottom =
    event.target.scrollHeight - event.target.scrollTop ===
    event.target.clientHeight;

  if (atBottom) {
    return setCurrentPage(data.pokemons.nextOffset);
  }
};
