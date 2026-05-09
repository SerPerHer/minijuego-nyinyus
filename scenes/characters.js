window.CHARACTER_LIBRARY = {
  rocky: {
    name: "Rocky",
    image: "rocky_normal.png",
    imageTrimmed: "rocky_normal_trim.png",
    accent: "#f2bf57",
    accentDark: "#9b682b",
    role: "protagonist"
  },
  reina: {
    name: "Reina",
    image: "reina_normal.png",
    imageTrimmed: "reina_normal_trim.png",
    imageFlipped: "reina_normal_flip.png",
    imageFlippedTrimmed: "reina_normal_flip_trim.png",
    accent: "#f786ed",
    accentDark: "#f84eb7",
    role: "protagonist"
  },
  abuela: {
    name: "Abuela",
    image: "abuela.png",
    imageTrimmed: "abuela_trim.png",
    imageFlipped: "abuela_flip.png",
    imageFlippedTrimmed: "abuela_flip_trim.png",
    accent: "#9fd7b7",
    accentDark: "#4b8f69",
    scale: 0.8,
    role: "secondary"
  },
  minutu: {
    name: "Minutu",
    image: "minutu.png",
    imageTrimmed: "minutu_trim.png",
    imageFlipped: "minutu_flip.png",
    imageFlippedTrimmed: "minutu_flip_trim.png",
    accent: "#ceb0ff",
    accentDark: "#6f49a8",
    scale: 0.94,
    role: "secondary"
  },
  mako: {
    name: "Mako",
    image: "mako.png",
    imageTrimmed: "mako_trim.png",
    imageFlipped: "mako_flip.png",
    imageFlippedTrimmed: "mako_flip_trim.png",
    accent: "#f08a8a",
    accentDark: "#9c3f3f",
    scale: 0.94,
    role: "secondary"
  },
  blue: {
    name: "Blue",
    image: "blue.png",
    imageTrimmed: "blue_trim.png",
    imageFlipped: "blue_flip.png",
    imageFlippedTrimmed: "blue_flip_trim.png",
    role: "secondary"
  },
  lars: {
    name: "Lars",
    image: "lars.png",
    imageTrimmed: "lars_trim.png",
    imageFlipped: "lars_flip.png",
    imageFlippedTrimmed: "lars_flip_trim.png",
    role: "secondary"
  },
  haze: {
    name: "Haze",
    image: "haze.png",
    imageTrimmed: "haze_trim.png",
    imageFlipped: "haze_flip.png",
    imageFlippedTrimmed: "haze_flip_trim.png",
    role: "secondary"
  },
  valerio: {
    name: "Valerio",
    image: "Valerio.png",
    imageTrimmed: "Valerio_trim.png",
    imageFlipped: "Valerio_flip.png",
    imageFlippedTrimmed: "Valerio_flip_trim.png",
    accent: "#d3d0c2",
    accentDark: "#6f6b5d",
    role: "tertiary"
  }
};

// El layout sale del motor según el rol de cada personaje.
// Solo usa layoutMode: "manual" en una escena si quieres romper este estándar.
window.SCENE_CHARACTER_LAYOUTS = {};

window.characterStep = function characterStep(id, overrides) {
  return {
    type: "character",
    id,
    ...(overrides || {})
  };
};
