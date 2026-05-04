const KEY = "favorite_pokemons";

export function getFavorites() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function toggleFavorite(id) {
  const favs = getFavorites();

  if (favs.includes(id)) {
    const updated = favs.filter((f) => f !== id);
    localStorage.setItem(KEY, JSON.stringify(updated));
    return updated;
  } else {
    const updated = [...favs, id];
    localStorage.setItem(KEY, JSON.stringify(updated));
    return updated;
  }
}

export function isFavorite(id) {
  return getFavorites().includes(id);
}