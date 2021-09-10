export function formatPokeId(item) {
  if (item.id <= 9) {
    return `#00${item.id}`;
  } else if (item.id >= 10 && item.id <= 99) {
    return `#0${item.id}`;
  } else {
    return `#${item.id}`;
  }
}

export const pokeImage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"