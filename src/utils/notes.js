const STORAGE_KEY = "pokemon_notes";

export function getNotes() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
}

export function saveNote(id, note) {
  const notes = getNotes();
  notes[id] = note;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

export function getNoteById(id) {
  const notes = getNotes();
  return notes[id] || "";
}